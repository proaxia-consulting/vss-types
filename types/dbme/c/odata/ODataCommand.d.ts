import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { type TMessage } from "dbme/c/Log";
import { type TResponseDetails, type TResponseSuccess } from "dbme/c/util/handleReturn";
/**
 * @deprecated Use `dbme.c.util.handleReturn.TResponseDetails` or `sap.ui.core.message.Message` instead!
 */
export type TODataMessage = TMessage;
type TResponseMessage = TODataMessage | (TResponseDetails & {
    title?: string;
    hasError?: boolean;
    hasWarning?: boolean;
});
type IODatResponseParser = {
    addResponse(response: TResponseSuccess): TResponseMessage;
};
export declare const ApiVersion: {
    readonly LEGACY: 1;
    readonly V2: 2;
};
/**
 * @nonui5
 */
declare class ODataCommand<TEntityData> {
    protected oModel: ODataModel;
    apiVersion: number;
    protected oLog: IODatResponseParser;
    protected bResetChangesOnError: boolean;
    constructor(oModel: ODataModel);
    submit(sBatchGroupId?: string): Promise<{
        data: TEntityData | TEntityData[];
        response: TResponseSuccess;
        message: TResponseMessage;
    }>;
    create(sPath: string, oCreateData: object): Promise<{
        data: TEntityData;
        response: TResponseSuccess;
        message: TResponseMessage;
    }>;
    update(sPath: string, oUpdateData: object): Promise<{
        data: TEntityData;
        response: TResponseSuccess;
        message: TResponseMessage;
    }>;
    remove(sPath: string): Promise<{
        data?: TEntityData;
        response: TResponseSuccess;
        message: TResponseMessage;
    }>;
    protected _getMessageFromResponse(response: TResponseSuccess, isBatch?: boolean): TResponseMessage;
    protected _responseParser(): IODatResponseParser;
}
/**
 * @namespace dbme.c.odata
 */
export default ODataCommand;
