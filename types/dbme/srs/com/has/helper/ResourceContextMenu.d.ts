import type { ListBase$BeforeOpenContextMenuEvent } from "sap/m/ListBase";
import type { MenuItemBase$SelectEvent } from "sap/ui/unified/MenuItemBase";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
declare const ResourceContextMenu: {
    onBeforeOpenContextMenu(this: TreeController, event: ListBase$BeforeOpenContextMenuEvent): void;
    onShowResourceAssignmentList(this: TreeController, event: MenuItemBase$SelectEvent): void;
    onEditResourceImage(this: TreeController, event: MenuItemBase$SelectEvent): void;
    onEditResourceShow(this: TreeController, event: MenuItemBase$SelectEvent): void;
    onEditTeamShow(this: TreeController, event: MenuItemBase$SelectEvent): void;
    onResourceRemove(this: TreeController, event: MenuItemBase$SelectEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default ResourceContextMenu;
