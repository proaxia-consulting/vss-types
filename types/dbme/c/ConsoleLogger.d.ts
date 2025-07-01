import errorMessage from "dbme/c/util/errorMessage";
/** Create a proxy to utility function, for better convenience and reduction of necessary imports  */
export { errorMessage };
export declare function debug(message: string, details?: string): void;
export declare function error(message: string, exception?: Error): void;
export declare function info(message: string, details?: string): void;
export declare function warning(message: string, exception?: Error): void;
