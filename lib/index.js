"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FancyTaskReporter = exports.BasicTaskReporter = void 0;
var tasker_lib_1 = require("tasker-lib");
var path = require("path");
var testColorSupport = require("color-support");
var FancyTaskReporter_1 = require("./FancyTaskReporter");
Object.defineProperty(exports, "FancyTaskReporter", { enumerable: true, get: function () { return FancyTaskReporter_1.FancyTaskReporter; } });
var BasicTaskReporter_1 = require("./BasicTaskReporter");
Object.defineProperty(exports, "BasicTaskReporter", { enumerable: true, get: function () { return BasicTaskReporter_1.BasicTaskReporter; } });
var reporter = testColorSupport() ? new FancyTaskReporter_1.FancyTaskReporter() : new BasicTaskReporter_1.BasicTaskReporter();
var tasker = new tasker_lib_1.TaskRunner(reporter);
globalThis["addTask"] = tasker.addTask.bind(tasker);
globalThis["removeTask"] = tasker.removeTask.bind(tasker);
globalThis["addDependencies"] = tasker.addDependencies.bind(tasker);
globalThis["removeDependencies"] = tasker.removeDependencies.bind(tasker);
globalThis["getTaskList"] = tasker.getTaskList.bind(tasker);
try {
    var tsNode = require("ts-node");
    tsNode.register();
}
catch (e) {
    // ignore if peer dependency is not met
}
var filePath = process.argv[2];
if (filePath) {
    require(path.resolve(filePath));
}
else {
    console.error("No task file path given, exiting");
    process.exit(1);
}
tasker.run("default");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXdDO0FBQ3hDLDJCQUE2QjtBQUM3QixnREFBa0Q7QUFFbEQseURBQXdEO0FBaUNwRCxrR0FqQ0sscUNBQWlCLE9BaUNMO0FBaENyQix5REFBd0Q7QUErQnBELGtHQS9CSyxxQ0FBaUIsT0ErQkw7QUE1QnJCLElBQU0sUUFBUSxHQUFHLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUkscUNBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0FBQ3hGLElBQU0sTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV4QyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFELFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BFLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzVELElBQUk7SUFDQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQ3JCO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDUix1Q0FBdUM7Q0FDMUM7QUFFRCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLElBQUksUUFBUSxFQUFFO0lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztDQUNuQztLQUFNO0lBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkI7QUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=