import { Options } from "tasker-lib";
import { Logger } from "./Logger";

class BasicTaskReporter implements Options {

    private readonly logger: Logger;

    public constructor(logger: Logger = console) {
        this.logger = logger;
    }

    public onTaskStart(taskName: string): void {
        this.logger.log(`Starting ${taskName}`);
    }

    public onTaskEnd(taskName: string, totalTaskTimeMs: number): void {
        this.logger.log(`Finished ${taskName} after ${totalTaskTimeMs}ms`);
    }

    public onTaskFail(taskName: string): void {
        this.logger.log(`Task ${taskName} failed`);
    }
}

export { BasicTaskReporter };