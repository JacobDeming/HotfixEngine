"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var EnvironmentService = (function () {
    function EnvironmentService(_http) {
        this._http = _http;
        this.environmentUpdated = new core_1.EventEmitter();
    }
    EnvironmentService.prototype.updateEnvironment = function (toggle, room) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/update', { headers: headers })
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    EnvironmentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EnvironmentService);
    return EnvironmentService;
}());
exports.EnvironmentService = EnvironmentService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50L2Vudmlyb25tZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQU1qQjtJQUlFLDRCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUY5Qix1QkFBa0IsR0FBRyxJQUFJLG1CQUFZLEVBQWUsQ0FBQztJQUVyQixDQUFDO0lBRWpDLDhDQUFpQixHQUFqQixVQUFrQixNQUFhLEVBQUMsSUFBVztRQUN6QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ3JFLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWRIO1FBQUMsaUJBQVUsRUFBRTs7MEJBQUE7SUFlYix5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMEJBQWtCLHFCQWM5QixDQUFBIiwiZmlsZSI6ImVudmlyb25tZW50L2Vudmlyb25tZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZSxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tICcuL0Vudmlyb25tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50U2VydmljZSB7XHJcbiAgZW52aXJvbm1lbnQ6IEVudmlyb25tZW50O1xyXG4gIGVudmlyb25tZW50VXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RW52aXJvbm1lbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxyXG5cclxuICB1cGRhdGVFbnZpcm9ubWVudCh0b2dnbGU6c3RyaW5nLHJvb206c3RyaW5nKXtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBkYXRlJyx7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgLm1hcChyZXNwb25zZSA9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
