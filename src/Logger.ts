interface Logger {

    error(message?: any, ...optionalParams: any[]): void;

    warn(message?: any, ...optionalParams: any[]): void;

    log(message?: any, ...optionalParams: any[]): void;
}

export { Logger };