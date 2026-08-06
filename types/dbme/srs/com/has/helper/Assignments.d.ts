import type { Button$PressEvent } from "sap/m/Button";
import type Dialog from "sap/m/Dialog";
import type { ListBase$DeleteEvent } from "sap/m/ListBase";
import type StandardListItem from "sap/m/StandardListItem";
import type StandardTreeItem from "sap/m/StandardTreeItem";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
declare const Assignments: {
    showDialog(this: TreeController, oResource: StandardListItem): void;
    onAssignmentListRemove(this: TreeController, oEvent: ListBase$DeleteEvent): void;
    onBtnAssignmentRemoveCommit(this: TreeController, event: Button$PressEvent): void;
    removeAssignment(this: TreeController, treeItem: StandardTreeItem): void;
    removeAssignmentCommit(this: TreeController, oDialog?: Dialog, oTreeItem?: StandardTreeItem): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default Assignments;
