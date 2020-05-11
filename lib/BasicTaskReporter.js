"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicTaskReporter = void 0;
var BasicTaskReporter = /** @class */ (function () {
    function BasicTaskReporter(logger) {
        if (logger === void 0) { logger = console; }
        this.logger = logger;
    }
    BasicTaskReporter.prototype.onTaskStart = function (taskName) {
        this.logger.log("Starting " + taskName);
    };
    BasicTaskReporter.prototype.onTaskEnd = function (taskName, totalTaskTimeMs) {
        this.logger.log("Finished " + taskName + " after " + totalTaskTimeMs + "ms");
    };
    BasicTaskReporter.prototype.onTaskFail = function (taskName) {
        this.logger.log("Task " + taskName + " failed");
    };
    return BasicTaskReporter;
}());
exports.BasicTaskReporter = BasicTaskReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNUYXNrUmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFzaWNUYXNrUmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFJSSwyQkFBbUIsTUFBd0I7UUFBeEIsdUJBQUEsRUFBQSxnQkFBd0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVNLHVDQUFXLEdBQWxCLFVBQW1CLFFBQWdCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHFDQUFTLEdBQWhCLFVBQWlCLFFBQWdCLEVBQUUsZUFBdUI7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBWSxRQUFRLGVBQVUsZUFBZSxPQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sc0NBQVUsR0FBakIsVUFBa0IsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBUSxRQUFRLFlBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFFUSw4Q0FBaUIifQ==