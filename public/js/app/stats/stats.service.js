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
var Observable_1 = require('rxjs/Observable');
var StatsService = (function () {
    function StatsService(_http) {
        this._http = _http;
    }
    StatsService.prototype.getStats = function () {
        return this._http.get('http://localhost:3000/server/Highwayman')
            .map(function (response) {
            var data = response.json().obj;
            return data;
        }).catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    StatsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StatsService);
    return StatsService;
}());
exports.StatsService = StatsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzL3N0YXRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUkzQztJQUdFLHNCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUFFLENBQUM7SUFFakMsK0JBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQzthQUM3RCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBWkg7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQWFiLG1CQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxvQkFBWSxlQVl4QixDQUFBIiwiZmlsZSI6InN0YXRzL3N0YXRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7SW5qZWN0YWJsZSxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQge0NoYW1waW9ufSBmcm9tICcuL2NoYW1waW9uJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdHNTZXJ2aWNlIHtcclxuICBjaGFtcGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApe31cclxuXHJcbiAgZ2V0U3RhdHMoKXtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZlci9IaWdod2F5bWFuJylcclxuICAgICAgLm1hcChyZXNwb25zZT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
