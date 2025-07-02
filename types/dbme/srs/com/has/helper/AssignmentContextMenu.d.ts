import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Event from "sap/ui/base/Event";
import type { ListBase$BeforeOpenContextMenuEvent } from "sap/m/ListBase";
declare const AssignmentContextMenu: {
    onBeforeOpenContextMenu(this: TreeController, oEvent: ListBase$BeforeOpenContextMenuEvent): void;
    onAssignmentEdit(this: TreeController, oEvent: Event): void;
    onAssignmentRemove(this: TreeController, oEvent: Event): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default AssignmentContextMenu;
