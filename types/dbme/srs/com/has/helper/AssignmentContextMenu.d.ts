import type { ListBase$BeforeOpenContextMenuEvent } from "sap/m/ListBase";
import type { MenuItemBase$SelectEvent } from "sap/ui/unified/MenuItemBase";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
declare const AssignmentContextMenu: {
    onBeforeOpenContextMenu(this: TreeController, event: ListBase$BeforeOpenContextMenuEvent): void;
    onAssignmentEdit(this: TreeController, event: MenuItemBase$SelectEvent): void;
    onAssignmentRemove(this: TreeController, event: MenuItemBase$SelectEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default AssignmentContextMenu;
