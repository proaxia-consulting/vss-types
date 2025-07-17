import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Dialog from "sap/m/Dialog";
import type StandardListItem from "sap/m/StandardListItem";
import type Event from "sap/ui/base/Event";
import type StandardTreeItem from "sap/m/StandardTreeItem";
import type { SmartTable$BeforeRebindTableEvent } from "sap/ui/comp/smarttable/SmartTable";
declare const TeamFormEdit: {
    showDialog(this: TreeController, oResource: StandardListItem): void;
    onBtnOK(this: TreeController, oEvent: Event): Promise<any>;
    save(this: TreeController, oDialog: Dialog, oTreeItem?: StandardTreeItem): Promise<any>;
    onBeforeRebindTable(this: TreeController, event: SmartTable$BeforeRebindTableEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default TeamFormEdit;
