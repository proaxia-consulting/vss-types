import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import ODataCommand from "dbme/c/odata/ODataCommand";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
/**
 * @namespace dbme.srs.com.has.model
 * @global
 * @nonui5
 */
export default class AssignmentUpdateCommand extends ODataCommand<HierarchyAssignmentEntity> {
    private oCtrl;
    private sPath;
    private oUpdateData;
    constructor(oCtrl: TreeController, sPath: string, oUpdateData: object);
    update(): Promise<{
        data: HierarchyAssignmentEntity;
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    private _getMessageTemplate;
}
