import Dialog from "sap/m/Dialog";
import { MessageType } from "sap/ui/core/library";
import type Message from "sap/ui/core/message/Message";
export declare enum DataKey {
    messages = "messages"
}
export declare enum Severity {
    info = "info",
    error = "error",
    success = "success",
    warning = "warning"
}
export type TResponseSuccessTyped<T> = {
    body: string;
    data?: T;
    headers: Record<string, string>;
    requestUri: string;
    statusCode: number;
    statusText: string;
    responseText: string;
};
export type TResponseSuccess = {
    body: string;
    data?: unknown;
    headers: Record<string, string>;
    requestUri: string;
    statusCode: number;
    statusText: string;
    responseText: string;
};
export type TError = {
    statusCode: number;
    statusText: string;
    message?: string;
    responseText: string;
};
export type TResponseDetails = {
    code?: string;
    message: string;
    severity: Severity;
    target?: string;
    transition?: boolean;
};
export declare function createSimpleMessage(m: Message): TResponseDetails;
export type TResponseError = {
    error: {
        code: string;
        innererror: {
            errordetails?: TResponseDetails[];
        };
        message: {
            value: string;
        };
    };
};
export type TResponseSuccessMessages = TResponseDetails & {
    details: TResponseDetails[];
};
export declare function severityFromMessageType(messageType: MessageType): Severity | undefined;
export declare function htmlMessage(m: TResponseDetails): string;
export declare function hasError(messages: TResponseDetails[]): boolean;
/**
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export declare function hasErrorResponse(...response: TResponseSuccess[]): boolean;
export declare function worstSeverity(messages: TResponseDetails[]): Severity;
export declare function parseError(err: TError, fallbackMessage?: boolean): TResponseDetails[];
export declare function handleError(err: TError, autoOpen?: boolean): Dialog;
export declare function extractBatchSuccess(response: TResponseSuccess): TResponseSuccess[];
export declare function parseSuccess(response: TResponseSuccess): TResponseDetails[];
export declare function handleSuccess(response: TResponseSuccess, autoOpen?: boolean): Dialog | undefined;
