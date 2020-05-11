"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FancyTaskReporter = void 0;
var colors = require("ansi-colors");
var FancyTaskReporter = /** @class */ (function () {
    function FancyTaskReporter(logger) {
        if (logger === void 0) { logger = console; }
        this.logger = logger;
    }
    FancyTaskReporter.prototype.onTaskStart = function (taskName) {
        this.logger.log("Starting " + colors.cyan(taskName));
    };
    FancyTaskReporter.prototype.onTaskEnd = function (taskName, totalTaskTimeMs) {
        this.logger.log("Finished " + colors.cyan(taskName) + " after " + colors.magenta(totalTaskTimeMs + "ms"));
    };
    FancyTaskReporter.prototype.onTaskFail = function (taskName) {
        this.logger.log("Task " + colors.cyan(taskName) + " " + colors.red("errored"));
    };
    return FancyTaskReporter;
}());
exports.FancyTaskReporter = FancyTaskReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFuY3lUYXNrUmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRmFuY3lUYXNrUmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQXNDO0FBR3RDO0lBSUksMkJBQW1CLE1BQXdCO1FBQXhCLHVCQUFBLEVBQUEsZ0JBQXdCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsUUFBZ0IsRUFBRSxlQUF1QjtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFHLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRU0sc0NBQVUsR0FBakIsVUFBa0IsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBUSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFHLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBRVEsOENBQWlCIn0=