import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
type TBatchData = {
    __batchResponses: {
        data: IOrderEntity;
    }[];
};
/**
 * @namespace dbme.srs.com.tdo.model
 */
export default class OrderCreateCommand {
    private _model;
    constructor(_model: ODataModel);
    submit(sBatchGroupId: string): Promise<{
        order: IOrderEntity;
        data: TBatchData | TBatchData[];
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
}
export {};
