import type { ResourceEntity } from "dbme/w/lib/core/types/IEntity";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Dialog from "sap/m/Dialog";
/**
 * @namespace dbme.srs.com.has.model
 * @global
 * @nonui5
 */
export default class ResourceSaveCommand {
    private oCtrl;
    private oDialog;
    private oCtx;
    private bCreate;
    constructor(oCtrl: TreeController, oDialog: Dialog);
    submit(): Promise<{
        data: ResourceEntity | ResourceEntity[];
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    private _getMessageTemplate;
}
