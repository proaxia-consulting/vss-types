import Log, { type TMessage } from "dbme/c/Log";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { TResponseSuccess } from "dbme/c/util/handleReturn";
export type TODataMessage = TMessage;
declare class ODataCommand<TEntityData> {
    protected oModel: ODataModel;
    protected oLog: Log;
    protected bResetChangesOnError: boolean;
    constructor(oModel: ODataModel);
    submit(sBatchGroupId?: string): Promise<{
        data: TEntityData | TEntityData[];
        response: TResponseSuccess;
        message: TODataMessage;
    }>;
    create(sPath: string, oCreateData: object): Promise<{
        data: TEntityData;
        response: TResponseSuccess;
        message: TODataMessage;
    }>;
    update(sPath: string, oUpdateData: object): Promise<{
        data: TEntityData;
        response: TResponseSuccess;
        message: TODataMessage;
    }>;
    remove(sPath: string): Promise<{
        data?: TEntityData;
        response: TResponseSuccess;
        message: TODataMessage;
    }>;
    protected _getMessageFromResponse(oResponse: TResponseSuccess, isBatch?: boolean): TMessage;
}
/**
 * @namespace dbme.c.odata
 */
export default ODataCommand;
