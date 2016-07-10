<a name="1.0.17"></a>
## [1.0.17](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.16...v1.0.17) (2016-05-31)


### Bug Fixes

* **datepicker:** added ngOnChanges hook ([ecffdb0](https://github.com/valor-software/ng2-bootstrap/commit/ecffdb0)), closes [#543](https://github.com/valor-software/ng2-bootstrap/issues/543)
* **timepicker:** added null value validation ([f9ad7e7](https://github.com/valor-software/ng2-bootstrap/commit/f9ad7e7)), closes [#533](https://github.com/valor-software/ng2-bootstrap/issues/533)
* **tooltip:** Fix tooltip arrows in bootstrap v4 ([b4250d4](https://github.com/valor-software/ng2-bootstrap/commit/b4250d4)), closes [#141](https://github.com/valor-software/ng2-bootstrap/issues/141)


### Features

* **modals:** added declarative modals component ([#564](https://github.com/valor-software/ng2-bootstrap/issues/564)) ([1d0903f](https://github.com/valor-software/ng2-bootstrap/commit/1d0903f)), closes [#29](https://github.com/valor-software/ng2-bootstrap/issues/29)
* **tooltip:** adds implementation to tooltipEnable ([#517](https://github.com/valor-software/ng2-bootstrap/issues/517)) ([1470892](https://github.com/valor-software/ng2-bootstrap/commit/1470892))



<a name="1.0.16"></a>
## [1.0.16](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.15...v1.0.16) (2016-05-06)


### Bug Fixes

* **build:** system.js bundler updated to rc.1([6945ad9](https://github.com/valor-software/ng2-bootstrap/commit/6945ad9))
* **collapse:** had to disable animation in order to update to rc.1([3443495](https://github.com/valor-software/ng2-bootstrap/commit/3443495))
* **collapse:** removed dependecy to animation builder([fed473f](https://github.com/valor-software/ng2-bootstrap/commit/fed473f))
* **docs:** update to ButtonRadioDirective and ButtonCheckboxDirective ([#476](https://github.com/valor-software/ng2-bootstrap/issues/476))([2e2d79b](https://github.com/valor-software/ng2-bootstrap/commit/2e2d79b))


### Features

* **package:** upgrade ng2-bootstrap to rc.1 ([#481](https://github.com/valor-software/ng2-bootstrap/issues/481))([554be3d](https://github.com/valor-software/ng2-bootstrap/commit/554be3d)), closes [#482](https://github.com/valor-software/ng2-bootstrap/issues/482) [#472](https://github.com/valor-software/ng2-bootstrap/issues/472) [#477](https://github.com/valor-software/ng2-bootstrap/issues/477)



<a name="1.0.15"></a>
## [1.0.15](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.14...v1.0.15) (2016-04-28)


### Bug Fixes

* **buttons:** had incorrect import statement which breaks .d.ts and import ([67ee5b5](https://github.com/valor-software/ng2-bootstrap/commit/67ee5b5))
* **universal:** now plays well with ng2 universal ([9d595d3](https://github.com/valor-software/ng2-bootstrap/commit/9d595d3)), closes [#61](https://github.com/valor-software/ng2-bootstrap/issues/61)



<a name="1.0.14"></a>
## [1.0.14](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.13...v1.0.14) (2016-04-26)


### Bug Fixes

* **accordion:** Panel isn't resizing after content has changed ([914ae1a](https://github.com/valor-software/ng2-bootstrap/commit/914ae1a)), closes [#454](https://github.com/valor-software/ng2-bootstrap/issues/454)
* **collapse:** Setting overflow back to visible in Collapse (#433) ([5c9434e](https://github.com/valor-software/ng2-bootstrap/commit/5c9434e)), closes [#372](https://github.com/valor-software/ng2-bootstrap/issues/372)
* **datepicker:** added support for null value ([8109dd2](https://github.com/valor-software/ng2-bootstrap/commit/8109dd2)), closes [#16](https://github.com/valor-software/ng2-bootstrap/issues/16) [#445](https://github.com/valor-software/ng2-bootstrap/issues/445)
* **datepicker:** If the date was set by ngModel it will be overwritten by default value ([6321253](https://github.com/valor-software/ng2-bootstrap/commit/6321253))
* **Tabset:** add tab-container class to the Tabset component for correct display ([2b951f7](https://github.com/valor-software/ng2-bootstrap/commit/2b951f7))

### Features

* **package:** updated angular2 to 0-beta.16 ([75b3568](https://github.com/valor-software/ng2-bootstrap/commit/75b3568))
* **typeahead:** show list of options on focuse when minLength=0 ([f1c1909](https://github.com/valor-software/ng2-bootstrap/commit/f1c1909)), closes [#187](https://github.com/valor-software/ng2-bootstrap/issues/187) [#413](https://github.com/valor-software/ng2-bootstrap/issues/413)

### Breaking changes
All components was renamed accordingly to ng2 style guide ([da131ea](https://github.com/valor-software/ng2-bootstrap/commit/da131ea))

| Before | After |
|---|---|
|Accordion|AccordionComponent|
|AccordionPanel|AccordionPanelComponent|
|Alert|AlertComponent|
|ButtonCheckbox|ButtonCheckboxDirective|
|ButtonRadio|ButtonRadioDirective|
|Carousel|CarouselComponent|
|Slide|SlideComponent|
|Collapse|CollapseDirective|
|DatePicker|DatePickerComponent|
|Dropdown|DropdownDirective|
|Pager|PagerComponent|
|Pagination|PaginationComponent|
|Bar|BarComponent|
|Progress|ProgressDirective|
|Progressbar|ProgressbarComponent|
|Rating|RatingComponent|
|Tab|TabDirective|
|TabHeading|TabHeadingDirective|
|Tabset|TabsetComponent|
|Timepicker|TimepickerComponent|
|Tooltip|TooltipDirective|
|Typeahead|TypeaheadDirective|

<a name="1.0.13"></a>
## [1.0.13](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.12...v1.0.13) (2016-04-15)


### Bug Fixes

* **typeahead:** blur event handler should not prevent item selection ([847d375](https://github.com/valor-software/ng2-bootstrap/commit/847d375)), closes [#403](https://github.com/valor-software/ng2-bootstrap/issues/403) [#418](https://github.com/valor-software/ng2-bootstrap/issues/418) [#356](https://github.com/valor-software/ng2-bootstrap/issues/356)
* **typeahead:** Blur hide with timeout, to allow other events to be triggered. (fixes #363) ([1a719d0](https://github.com/valor-software/ng2-bootstrap/commit/1a719d0)), closes [#363](https://github.com/valor-software/ng2-bootstrap/issues/363) [#395](https://github.com/valor-software/ng2-bootstrap/issues/395) [#389](https://github.com/valor-software/ng2-bootstrap/issues/389) [#363](https://github.com/valor-software/ng2-bootstrap/issues/363)



<a name="1.0.12"></a>
## [1.0.12](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.11...v1.0.12) (2016-04-15)


### Features

* **deps:** upgrade to angular2 beta.15 ([00e6ad4](https://github.com/valor-software/ng2-bootstrap/commit/00e6ad4))



<a name="1.0.11"></a>
## [1.0.11](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.10...v1.0.11) (2016-04-08)


### Bug Fixes

* **build:** generate source maps for systemjs bundles (fixes #367) ([81e16b7](https://github.com/valor-software/ng2-bootstrap/commit/81e16b7)), closes [#367](https://github.com/valor-software/ng2-bootstrap/issues/367)
* **demo:** added card clasess to pre tags in bs4 demo ([0dfe7b2](https://github.com/valor-software/ng2-bootstrap/commit/0dfe7b2))
* **lint:** added usage of tslint-config-valorsoft ([cad6af3](https://github.com/valor-software/ng2-bootstrap/commit/cad6af3))
* **lint:** enable tslint and codelyzer (fixes #309) ([b60ce40](https://github.com/valor-software/ng2-bootstrap/commit/b60ce40)), closes [#309](https://github.com/valor-software/ng2-bootstrap/issues/309)
* **typeahead:** prevent form submition when typeahead selected (fixes #359) ([4297410](https://github.com/valor-software/ng2-bootstrap/commit/4297410)), closes [#359](https://github.com/valor-software/ng2-bootstrap/issues/359)

### Features

* **package:** updated to angular2 beta.14 ([243585b](https://github.com/valor-software/ng2-bootstrap/commit/243585b))



<a name="1.0.10"></a>
## [1.0.10](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.9...v1.0.10) (2016-04-01)


### Features

* **package:** angular2 version updated to beta.13 ([91e4ad1](https://github.com/valor-software/ng2-bootstrap/commit/91e4ad1))



<a name="1.0.9"></a>
## [1.0.9](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.8...v1.0.9) (2016-03-31)


### Bug Fixes

* **collapse:** animate is not available for system.js ([b28fd5d](https://github.com/valor-software/ng2-bootstrap/commit/b28fd5d))



<a name="1.0.8"></a>
## [1.0.8](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.7...v1.0.8) (2016-03-30)


### Bug Fixes

* use synchronous event emitters as a workaround for dehydrated detector issues (s ([9c9f290](https://github.com/valor-software/ng2-bootstrap/commit/9c9f290))
* **build:** reduce typings pain ([686ef90](https://github.com/valor-software/ng2-bootstrap/commit/686ef90)), closes [#128](https://github.com/valor-software/ng2-bootstrap/issues/128) [#322](https://github.com/valor-software/ng2-bootstrap/issues/322)
* **carousel:** Fix Typescript 7030 error ([128db51](https://github.com/valor-software/ng2-bootstrap/commit/128db51))
* **demo:** including es6-shim and es6-promise (fixes #194) ([80b73b4](https://github.com/valor-software/ng2-bootstrap/commit/80b73b4)), closes [#194](https://github.com/valor-software/ng2-bootstrap/issues/194)
* **dropdowns:** dropdown should close correctly when used in modals (fixes #267, fixes #221) ([a7a02ff](https://github.com/valor-software/ng2-bootstrap/commit/a7a02ff)), closes [#267](https://github.com/valor-software/ng2-bootstrap/issues/267) [#221](https://github.com/valor-software/ng2-bootstrap/issues/221)
* **ie9,10:** usage of [hidden] replaced with *ngIf (fixes #238) ([260e963](https://github.com/valor-software/ng2-bootstrap/commit/260e963)), closes [#238](https://github.com/valor-software/ng2-bootstrap/issues/238)
* **tooltip:** fix tooltip after upgrade to angular2 2.0.0-beta.12 ([87a57f5](https://github.com/valor-software/ng2-bootstrap/commit/87a57f5))
* **tooltip:** updated for beta.12 (fixes #296, closes #332) ([413c2f1](https://github.com/valor-software/ng2-bootstrap/commit/413c2f1)), closes [#296](https://github.com/valor-software/ng2-bootstrap/issues/296) [#332](https://github.com/valor-software/ng2-bootstrap/issues/332)
* **typeahead:** Fixed potential error if value of typeahead is undefined. Fixes #345 ([aeb2bc1](https://github.com/valor-software/ng2-bootstrap/commit/aeb2bc1)), closes [#345](https://github.com/valor-software/ng2-bootstrap/issues/345)
* **typeahead:** Hide typeahead popup on blur. Fixes #351 ([9c6f257](https://github.com/valor-software/ng2-bootstrap/commit/9c6f257)), closes [#351](https://github.com/valor-software/ng2-bootstrap/issues/351)

### Features

* **collapse:** added animation, toggle\hide\show methods made public (closes #348, fixes #287) ([2625b29](https://github.com/valor-software/ng2-bootstrap/commit/2625b29)), closes [#348](https://github.com/valor-software/ng2-bootstrap/issues/348) [#287](https://github.com/valor-software/ng2-bootstrap/issues/287)
* **datepicker:** Added functionality to add a custom class to specific dates. Supports empty cust ([0f6389f](https://github.com/valor-software/ng2-bootstrap/commit/0f6389f))
* **package:** angular2 version updated to 2.0.0-beta.12 ([15c866f](https://github.com/valor-software/ng2-bootstrap/commit/15c866f))



<a name="1.0.7"></a>
## [1.0.7](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.6...v1.0.7) (2016-03-16)


### Bug Fixes

* **demo:** fix demo layout ([227ef4e](https://github.com/valor-software/ng2-bootstrap/commit/227ef4e))
* **progress:** progress bar now works with ng2 ([f970433](https://github.com/valor-software/ng2-bootstrap/commit/f970433))

### Features

* **pagination:** use inner html for pagination button text ([66cc008](https://github.com/valor-software/ng2-bootstrap/commit/66cc008))



<a name="1.0.6"></a>
## [1.0.6](https://github.com/valor-software/ng2-bootstrap/compare/v1.0.5...v1.0.6) (2016-03-09)


### Bug Fixes

* **datepicker-inner:** When changing view on datepicker, and going left and right, selected date ([97c8735](https://github.com/valor-software/ng2-bootstrap/commit/97c8735))
* **tooltip:** fix positioning of tooltip container ([5697574](https://github.com/valor-software/ng2-bootstrap/commit/5697574))

### Features

* **datepicker:** Added an attribute onlyCurrentMonth which if true will not show dates from previ ([529af20](https://github.com/valor-software/ng2-bootstrap/commit/529af20))



<a name="1.0.5"></a>
## [1.0.5](https://github.com/valor-software/ng2-bootstrap/compare/1.0.4...v1.0.5) (2016-02-24)


### Bug Fixes

* **datepicker:** setting default value for SHOW_WEEKS ([aa09451](https://github.com/valor-software/ng2-bootstrap/commit/aa09451))
* **daypicker:** text center align in bootstrap 4 ([dfd502f](https://github.com/valor-software/ng2-bootstrap/commit/dfd502f))
* **tabs:** destroy cycle, closes #180 ([ae8c617](https://github.com/valor-software/ng2-bootstrap/commit/ae8c617)), closes [#180](https://github.com/valor-software/ng2-bootstrap/issues/180)



<a name="1.0.4"></a>
## [1.0.4](https://github.com/valor-software/ng2-bootstrap/compare/1.0.1-beta.2...v1.0.4) (2016-02-24)


### Bug Fixes

* **build:** fix npm start command, fixes #113 ([217fe3a](https://github.com/valor-software/ng2-bootstrap/commit/217fe3a)), closes [#113](https://github.com/valor-software/ng2-bootstrap/issues/113)
* **build:** rollback compression plugin version to 0.2, fixes #103 ([3d59e2d](https://github.com/valor-software/ng2-bootstrap/commit/3d59e2d)), closes [#103](https://github.com/valor-software/ng2-bootstrap/issues/103)
* "outsideClick" still closed the dropdown on any click ([6348f72](https://github.com/valor-software/ng2-bootstrap/commit/6348f72)), closes [#124](https://github.com/valor-software/ng2-bootstrap/issues/124)
* **build:** updated to use ts 1.8.2, fixes #116 ([206770b](https://github.com/valor-software/ng2-bootstrap/commit/206770b)), closes [#116](https://github.com/valor-software/ng2-bootstrap/issues/116)
* **datepicker:** setting default value for SHOW_WEEKS ([f0079ad](https://github.com/valor-software/ng2-bootstrap/commit/f0079ad))
* **datepicker:** upgrade to beta 1, issue #38 ([b1a5507](https://github.com/valor-software/ng2-bootstrap/commit/b1a5507))
* **export:** all the correct directives are now properly exported ([b00a30b](https://github.com/valor-software/ng2-bootstrap/commit/b00a30b))
* **pager:** multiple times defined event numPages, fixes #111, closes #112 ([780eebd](https://github.com/valor-software/ng2-bootstrap/commit/780eebd)), closes [#111](https://github.com/valor-software/ng2-bootstrap/issues/111) [#112](https://github.com/valor-software/ng2-bootstrap/issues/112)
* **pagination:** multiple triggering of pageChanged event, fix #76, fix #138, closes #146 ([91c4ec4](https://github.com/valor-software/ng2-bootstrap/commit/91c4ec4)), closes [#76](https://github.com/valor-software/ng2-bootstrap/issues/76) [#138](https://github.com/valor-software/ng2-bootstrap/issues/138) [#146](https://github.com/valor-software/ng2-bootstrap/issues/146)

### Features

* allow two-way binding on `isOpen` ([674fcb7](https://github.com/valor-software/ng2-bootstrap/commit/674fcb7))
* **build:** update to use ng2 beta7 & use ts typings, fixes #212 ([31e6300](https://github.com/valor-software/ng2-bootstrap/commit/31e6300)), closes [#212](https://github.com/valor-software/ng2-bootstrap/issues/212)
* **datepicker:** datepicker fixed for 0-beta.2, closes #120, fixes #38 ([a3d9e1c](https://github.com/valor-software/ng2-bootstrap/commit/a3d9e1c)), closes [#120](https://github.com/valor-software/ng2-bootstrap/issues/120) [#38](https://github.com/valor-software/ng2-bootstrap/issues/38)
* **dropdown:** implement "nonInput" auto-close mode ([94d9909](https://github.com/valor-software/ng2-bootstrap/commit/94d9909))
* **tabs:** removable tabs ([c465610](https://github.com/valor-software/ng2-bootstrap/commit/c465610))



