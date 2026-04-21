/**
 * @namespace com.pacg.dpf_pp
 */
export default class Logger {
    static debug(message: string, details?: string | Error): void;
    static error(message: string, exception?: Error): void;
    static info(message: string, details?: string): void;
    static warning(message: string, exception?: Error): void;
}
