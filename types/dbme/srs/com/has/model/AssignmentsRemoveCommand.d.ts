import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import ODataCommand from "dbme/c/odata/ODataCommand";
/**
 * @namespace dbme.srs.com.has.model
 * @global
 * @nonui5
 */
export default class AssignmentsRemoveCommand extends ODataCommand<void> {
    private oCtrl;
    constructor(oCtrl: TreeController);
    submit(): Promise<{
        data: void | void[];
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    _getMessageTemplate(): {
        success: string;
        error: string;
    };
}
