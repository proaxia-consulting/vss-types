import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Event from "sap/ui/base/Event";
import type { ListBase$BeforeOpenContextMenuEvent } from "sap/m/ListBase";
declare const ResourceContextMenu: {
    onBeforeOpenContextMenu(this: TreeController, oEvent: ListBase$BeforeOpenContextMenuEvent): void;
    onShowResourceAssignmentList(this: TreeController, oEvent: Event): void;
    onEditResourceImage(this: TreeController, oEvent: Event): void;
    onEditResourceShow(this: TreeController, oEvent: Event): void;
    onEditTeamShow(this: TreeController, oEvent: Event): void;
    onResourceRemove(this: TreeController, oEvent: Event): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default ResourceContextMenu;
