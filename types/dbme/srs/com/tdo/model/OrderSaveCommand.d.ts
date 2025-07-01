import type IController from "dbme/srs/com/tdo/controller/Details.controller";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
/**
 * @namespace dbme.srs.com.tdo.model
 * @nonui5
 */
export default class OrderSaveCommand {
    private oCtrl;
    private _orderData;
    private _model;
    constructor(oCtrl: IController);
    save(): Promise<void | {
        data: IOrderEntity;
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    private _getMessageTemplate;
    private _getRequestData;
    private _getIgnoredNavigationKeys;
}
