import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Dialog from "sap/m/Dialog";
import type StandardListItem from "sap/m/StandardListItem";
import type Event from "sap/ui/base/Event";
import type StandardTreeItem from "sap/m/StandardTreeItem";
import type { ListBase$DeleteEvent } from "sap/m/ListBase";
declare const Assignments: {
    showDialog(this: TreeController, oResource: StandardListItem): void;
    onAssignmentListRemove(this: TreeController, oEvent: ListBase$DeleteEvent): void;
    onBtnAssignmentRemoveCommit(this: TreeController, oEvent: Event): void;
    removeAssignment(this: TreeController, treeItem: StandardTreeItem): void;
    removeAssignmentCommit(this: TreeController, oDialog?: Dialog, oTreeItem?: StandardTreeItem): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default Assignments;
