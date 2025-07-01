import { MessageType } from "sap/ui/core/library";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { type TResponseSuccess } from "dbme/c/util/handleReturn";
import type Message from "sap/ui/core/message/Message";
export type TMessage = {
    code: string;
    counter: number;
    description?: string;
    error: string;
    hasError: boolean;
    hasWarning: boolean;
    message: string;
    subtitle: string;
    success: string;
    title: string;
    type: MessageType;
    warning: string;
};
type TMessageDefaults = {
    code?: string;
    message?: string;
    subtitle?: string;
    title?: string;
};
/**
 * @nonui5
 * @deprecated Use dbme.c.util.handleReturn instead!
 * @namespace dbme.c
 */
export default class Log {
    private _clearOnBatchRequestSent;
    private _clearOnRequestSent;
    private _aMessage;
    private _model;
    constructor(model: ODataModel, _clearOnBatchRequestSent?: boolean, _clearOnRequestSent?: boolean);
    addModelMessages(...message: Message[]): this;
    clearModelMessages(): this;
    getModelMessages(): Message[];
    hasError(oResponse: TResponseSuccess): boolean;
    /**
     * Map sap.ui.core.message.Message[] to LOG internal log message format
     */
    addResponse(oResponse: TResponseSuccess, oDefaultSuccess?: TMessageDefaults, oDefaultError?: TMessageDefaults): TMessage;
    private _getMessageTemplate;
}
export {};
