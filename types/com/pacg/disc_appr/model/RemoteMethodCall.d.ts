import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { TResponseSuccessTyped } from "./handleReturn";
import type Dialog from "sap/m/Dialog";
type TResponseData = {
    jsonOut?: string;
};
type TResponse = TResponseSuccessTyped<TResponseData>;
/**
 * @namespace com.pacg.dpao_pp.model
 */
export default class RemoteMethodCall<TInput, TOutput> {
    protected _appName: string;
    protected _messageId: string;
    protected _displaySuccessMessages: boolean;
    protected _displayErrorMessages: boolean;
    protected _modelInstance?: ODataModel;
    protected _modelSettings: object;
    protected _modelEndPoint: "Call01Set";
    protected _lastDialog?: Dialog;
    protected _lastResponse?: TResponse;
    protected _lastError?: unknown;
    constructor(_appName: string, _messageId: string, _displaySuccessMessages?: boolean, _displayErrorMessages?: boolean);
    call(input?: TInput): Promise<TOutput>;
    getLastDialog(): Dialog | undefined;
    getLastResponse(): TResponse | undefined;
    getLastError(): unknown;
    protected _model(): ODataModel;
}
export {};
