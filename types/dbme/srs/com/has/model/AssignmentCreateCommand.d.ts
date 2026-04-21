import type { ITreeController } from "dbme/srs/com/has/types/IController";
import ODataCommand from "dbme/c/odata/ODataCommand";
import type { TreeNodeEntity } from "dbme/srs/com/has/types/IEntity";
/**
 * @namespace dbme.srs.com.has.model
 * @global
 * @nonui5
 */
export default class AssignmentCreateCommand extends ODataCommand<void> {
    private oCtrl;
    private sPath;
    private oCreateData;
    constructor(oCtrl: ITreeController, aAssignment: TreeNodeEntity[]);
    create(): Promise<{
        data: void;
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    private _getMessageTemplate;
}
