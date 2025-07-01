import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type { DragDropInfo$DragEndEvent, DragDropInfo$DragStartEvent } from "sap/ui/core/dnd/DragDropInfo";
import type { DropInfo$DropEvent } from "sap/ui/core/dnd/DropInfo";
declare const DragDrop: {
    onResourceDragStart(this: TreeController, oEvent: DragDropInfo$DragStartEvent): void;
    onResourceDragEnter(this: TreeController, oEvent: DragDropInfo$DragEndEvent): void;
    onResourceDrop(this: TreeController, oEvent: DropInfo$DropEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default DragDrop;
