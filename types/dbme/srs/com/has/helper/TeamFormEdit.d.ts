import type { Button$PressEvent } from "sap/m/Button";
import type Dialog from "sap/m/Dialog";
import type StandardListItem from "sap/m/StandardListItem";
import type StandardTreeItem from "sap/m/StandardTreeItem";
import type { SmartTable$BeforeRebindTableEvent } from "sap/ui/comp/smarttable/SmartTable";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
declare const TeamFormEdit: {
    showDialog(this: TreeController, oResource: StandardListItem): void;
    onBtnOK(this: TreeController, oEvent: Button$PressEvent): Promise<void>;
    save(this: TreeController, oDialog: Dialog, oTreeItem?: StandardTreeItem): Promise<void>;
    onBeforeRebindTable(this: TreeController, event: SmartTable$BeforeRebindTableEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default TeamFormEdit;
