export type TReturn = {
    Message: string;
    Type: ReturnMessageType;
};
export declare enum ReturnMessageType {
    Information = "I",
    Error = "E",
    Warning = "W"
}
export type TResponse = {
    message: string;
    responseText: string;
    statusCode: number;
    statusText: string;
};
export declare enum Severity {
    info = "info",
    error = "error",
    success = "success",
    warning = "warning"
}
export declare function getReturnMessage(err: TResponse): string;
export declare function handleError(err: TResponse): void;
/**
 * @namespace vss.com.dama.utils
 */
export default function handleReturn(ret: TReturn): void;
