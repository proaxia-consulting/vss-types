import type { ResourceEntity } from "dbme/w/lib/core/types/IEntity";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Context from "sap/ui/model/odata/v2/Context";
/**
 * @namespace dbme.srs.com.has.model
 * @global
 * @nonui5
 */
export default class TeamSaveCommand {
    private oCtrl;
    private oCtx;
    constructor(oCtrl: TreeController, oCtx: Context);
    submit(): Promise<{
        data: ResourceEntity | ResourceEntity[];
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    private _getMessageTemplate;
}
