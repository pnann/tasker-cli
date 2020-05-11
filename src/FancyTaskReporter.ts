import { Options } from "tasker-lib";
import * as colors from "ansi-colors";
import { Logger } from "./Logger";

class FancyTaskReporter implements Options {

    private readonly logger: Logger;

    public constructor(logger: Logger = console) {
        this.logger = logger;
    }

    public onTaskStart(taskName: string): void {
        this.logger.log(`Starting ${colors.cyan(taskName)}`);
    }

    public onTaskEnd(taskName: string, totalTaskTimeMs: number): void {
        this.logger.log(`Finished ${colors.cyan(taskName)} after ${colors.magenta(totalTaskTimeMs + "ms")}`);
    }

    public onTaskFail(taskName: string): void {
        this.logger.log(`Task ${colors.cyan(taskName)} ${colors.red("errored")}`);
    }
}

export { FancyTaskReporter };