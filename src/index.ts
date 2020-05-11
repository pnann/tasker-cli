import { TaskRunner } from "tasker-lib";
import * as path from "path";
import * as testColorSupport from "color-support";

import { FancyTaskReporter } from "./FancyTaskReporter";
import { BasicTaskReporter } from "./BasicTaskReporter";
import { Logger } from "./Logger";

const reporter = testColorSupport() ? new FancyTaskReporter() : new BasicTaskReporter();
const tasker = new TaskRunner(reporter);

globalThis["addTask"] = tasker.addTask.bind(tasker);
globalThis["removeTask"] = tasker.removeTask.bind(tasker);
globalThis["addDependencies"] = tasker.addDependencies.bind(tasker);
globalThis["removeDependencies"] = tasker.removeDependencies.bind(tasker);
globalThis["getTaskList"] = tasker.getTaskList.bind(tasker);


try {
    const tsNode = require("ts-node");
    tsNode.register();
} catch (e) {
    // ignore if peer dependency is not met
}

const filePath = process.argv[2];
if (filePath) {
    require(path.resolve(filePath));
} else {
    console.error("No task file path given, exiting");
    process.exit(1);
}

tasker.run("default");

export {
    BasicTaskReporter,
    FancyTaskReporter,
    Logger
}