import { BaseException } from '@angular/core';
import { DEFAULT_OUTLET_NAME } from './constants';
import { reflector } from './core_private';
import { ListWrapper, StringMapWrapper } from './facade/collection';
import { isBlank, isPresent, stringify } from './facade/lang';
import { PromiseWrapper } from './facade/promise';
import { RoutesMetadata } from './metadata/metadata';
import { RouteSegment, RouteTree, TreeNode, equalUrlSegments, rootNode } from './segments';
export function recognize(componentResolver, rootComponent, url, existingTree) {
    let matched = new _MatchResult(rootComponent, [url.root], {}, rootNode(url).children, []);
    return _constructSegment(componentResolver, matched, rootNode(existingTree))
        .then(roots => new RouteTree(roots[0]));
}
function _recognize(componentResolver, parentComponent, url, existingSegments) {
    let metadata = _readMetadata(parentComponent); // should read from the factory instead
    if (isBlank(metadata)) {
        throw new BaseException(`Component '${stringify(parentComponent)}' does not have route configuration`);
    }
    let match;
    try {
        match = _match(metadata, url);
    }
    catch (e) {
        return PromiseWrapper.reject(e, null);
    }
    let segmentsWithRightOutlet = existingSegments.filter(r => r.value.outlet == match.outlet);
    let segmentWithRightOutlet = segmentsWithRightOutlet.length > 0 ? segmentsWithRightOutlet[0] : null;
    let main = _constructSegment(componentResolver, match, segmentWithRightOutlet);
    let aux = _recognizeMany(componentResolver, parentComponent, match.aux, existingSegments)
        .then(_checkOutletNameUniqueness);
    return PromiseWrapper.all([main, aux]).then(ListWrapper.flatten);
}
function _recognizeMany(componentResolver, parentComponent, urls, existingSegments) {
    let recognized = urls.map(u => _recognize(componentResolver, parentComponent, u, existingSegments));
    return PromiseWrapper.all(recognized).then(ListWrapper.flatten);
}
function _constructSegment(componentResolver, matched, existingSegment) {
    return componentResolver.resolveComponent(matched.component).then(factory => {
        let segment = _createOrReuseSegment(matched, factory, existingSegment);
        let existingChildren = isPresent(existingSegment) ? existingSegment.children : [];
        if (matched.leftOverUrl.length > 0) {
            return _recognizeMany(componentResolver, factory.componentType, matched.leftOverUrl, existingChildren)
                .then(children => [new TreeNode(segment, children)]);
        }
        else {
            return _recognizeLeftOvers(componentResolver, factory.componentType, existingChildren)
                .then(children => [new TreeNode(segment, children)]);
        }
    });
}
function _createOrReuseSegment(matched, factory, segmentNode) {
    let segment = isPresent(segmentNode) ? segmentNode.value : null;
    if (isPresent(segment) && equalUrlSegments(segment.urlSegments, matched.consumedUrlSegments) &&
        StringMapWrapper.equals(segment.parameters, matched.parameters) &&
        segment.outlet == matched.outlet && factory.componentType == segment.type) {
        return segment;
    }
    else {
        return new RouteSegment(matched.consumedUrlSegments, matched.parameters, matched.outlet, factory.componentType, factory);
    }
}
function _recognizeLeftOvers(componentResolver, parentComponent, existingSegments) {
    return componentResolver.resolveComponent(parentComponent).then(factory => {
        let metadata = _readMetadata(factory.componentType);
        if (isBlank(metadata)) {
            return [];
        }
        let r = metadata.routes.filter(r => r.path == '' || r.path == '/');
        if (r.length === 0) {
            return PromiseWrapper.resolve([]);
        }
        else {
            let segmentsWithMatchingOutlet = existingSegments.filter(r => r.value.outlet == DEFAULT_OUTLET_NAME);
            let segmentWithMatchingOutlet = segmentsWithMatchingOutlet.length > 0 ? segmentsWithMatchingOutlet[0] : null;
            let existingChildren = isPresent(segmentWithMatchingOutlet) ? segmentWithMatchingOutlet.children : [];
            return _recognizeLeftOvers(componentResolver, r[0].component, existingChildren)
                .then(children => {
                return componentResolver.resolveComponent(r[0].component).then(factory => {
                    let segment = _createOrReuseSegment(new _MatchResult(r[0].component, [], {}, [], []), factory, segmentWithMatchingOutlet);
                    return [new TreeNode(segment, children)];
                });
            });
        }
    });
}
function _match(metadata, url) {
    for (let r of metadata.routes) {
        let matchingResult = _matchWithParts(r, url);
        if (isPresent(matchingResult)) {
            return matchingResult;
        }
    }
    let availableRoutes = metadata.routes.map(r => `'${r.path}'`).join(', ');
    throw new BaseException(`Cannot match any routes. Current segment: '${url.value}'. Available routes: [${availableRoutes}].`);
}
function _matchWithParts(route, url) {
    let path = route.path.startsWith('/') ? route.path.substring(1) : route.path;
    if (path == '*') {
        return new _MatchResult(route.component, [], null, [], []);
    }
    let parts = path.split('/');
    let positionalParams = {};
    let consumedUrlSegments = [];
    let lastParent = null;
    let lastSegment = null;
    let current = url;
    for (let i = 0; i < parts.length; ++i) {
        if (isBlank(current))
            return null;
        let p = parts[i];
        let isLastSegment = i === parts.length - 1;
        let isLastParent = i === parts.length - 2;
        let isPosParam = p.startsWith(':');
        if (!isPosParam && p != current.value.segment)
            return null;
        if (isLastSegment) {
            lastSegment = current;
        }
        if (isLastParent) {
            lastParent = current;
        }
        if (isPosParam) {
            positionalParams[p.substring(1)] = current.value.segment;
        }
        consumedUrlSegments.push(current.value);
        current = ListWrapper.first(current.children);
    }
    let p = lastSegment.value.parameters;
    let parameters = StringMapWrapper.merge(p, positionalParams);
    let axuUrlSubtrees = isPresent(lastParent) ? lastParent.children.slice(1) : [];
    return new _MatchResult(route.component, consumedUrlSegments, parameters, lastSegment.children, axuUrlSubtrees);
}
function _checkOutletNameUniqueness(nodes) {
    let names = {};
    nodes.forEach(n => {
        let segmentWithSameOutletName = names[n.value.outlet];
        if (isPresent(segmentWithSameOutletName)) {
            let p = segmentWithSameOutletName.stringifiedUrlSegments;
            let c = n.value.stringifiedUrlSegments;
            throw new BaseException(`Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
        }
        names[n.value.outlet] = n.value;
    });
    return nodes;
}
class _MatchResult {
    constructor(component, consumedUrlSegments, parameters, leftOverUrl, aux) {
        this.component = component;
        this.consumedUrlSegments = consumedUrlSegments;
        this.parameters = parameters;
        this.leftOverUrl = leftOverUrl;
        this.aux = aux;
    }
    get outlet() {
        return this.consumedUrlSegments.length === 0 || isBlank(this.consumedUrlSegments[0].outlet) ?
            DEFAULT_OUTLET_NAME :
            this.consumedUrlSegments[0].outlet;
    }
}
function _readMetadata(componentType) {
    let metadata = reflector.annotations(componentType).filter(f => f instanceof RoutesMetadata);
    return ListWrapper.first(metadata);
}
//# sourceMappingURL=recognize.js.map