type TaskResult = { [taskName: string]: any };

interface AsyncTask<T> {
    (results?: TaskResult, done?: (result: T) => void): void;
}

interface SyncTask<T> {
    (results?: TaskResult): T;
}

interface PromiseTask<T> {
    (results?: TaskResult): Promise<T>;
}

type Task<T> = SyncTask<T> | AsyncTask<T> | PromiseTask<T>;

/**
 * Add a task to the task tree with an optional set of dependencies.
 *
 * Adding a task that already exists with the same name will result in an error being thrown unless the TaskRunner
 * is created with the option "throwOnOverwrite" set to false.
 *
 * Tasks are functions that can have up to two parameters:
 *  - results?: TaskResult - A map of task names to their associated results. Used to consume results of dependent
 *                           tasks.
 *  - done?: (result: T) => void - If defined, this function *must* be called to trigger task completion.
 *
 * @param {string} taskName -  The unique name for this task.
 * @param {string | string[]} [dependencies] - An optional list of dependencies needed before this task can be executed.
 * These do not need to exist when adding this task, but do need to exist when running the task later.
 * @param {(results?: TaskResult, done?: (result: any) => void)} task - A function to execute for this task. May be
 * a synchronous function (regular return value), promise function (return a promise), or other asynchronous
 * function (return nothing, call "done" when complete).
 */
declare function addTask<T>(taskName: string, dependencies?: string | string[] | Task<T>, task?: Task<T>): void;

/**
 * Removes a given task from the task tree. This will result in the task no longer existing, but will *not* affect
 * any tasks that may depend on it.
 *
 * @param {string} taskName - The unique name of the task to remove. Does nothing if the task does not exist.
 */
declare function removeTask(taskName: string): void;

/**
 * Adds one or more new dependencies to the given parent task. The parent task must exist when adding dependencies,
 * but the dependent tasks do not need to exist until run is called. This does nothing if the task-dependency link
 * is already in place.
 *
 * Throws an error if the parent task does not exist.
 *
 * @param {string} taskName - The unique name of the task to add dependencies to.
 * @param {(string | string[])} dependencies - One or more dependencies to add to the given task.
 */
declare function addDependencies(taskName: string, dependencies: string | string[]): void;

/**
 * Removes one or more dependencies from the given task. This will not remove the dependent tasks themselves, but
 * only the dependency link. This does nothing if the task does not exist or if there is no dependency link in
 * place.
 *
 * @param {string} taskName - The unique name of the task to remove dependencies from.
 * @param {(string | string[])} dependencies - One ore more dependencies to remove from the given task.
 */
declare function removeDependencies(taskName: string, dependencies: string | string[]): void;

/**
 * Returns a list of all tasks and their associated dependencies.
 *
 * @returns {{taskName: string}: string[]}
 */
declare function getTaskList(): { [taskName: string]: string[] };