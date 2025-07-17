/** @deprecated Do not use! */
export type TReasonableReject = {
    reason: string;
};
declare const ErrorHandler: {
    /** @deprecated Use dbme.w.lib.core.ConsoleLogger.errorMessage instead! */
    toString(err: unknown, defaultError?: string): string;
};
/**
 * @namespace dbme.w.lib.core.util
 * @global
 */
export default ErrorHandler;
