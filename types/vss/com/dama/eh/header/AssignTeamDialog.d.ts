import type { Button$PressEvent } from "sap/m/Button";
import type Dialog from "sap/m/Dialog";
import type { SelectDialog$ConfirmEvent, SelectDialog$SearchEvent } from "sap/m/SelectDialog";
import type { SelectDialogBase$SelectionChangeEvent } from "sap/m/SelectDialogBase";
import type Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Order from "vss/com/dama/controller/Order.controller";
import { FragmentId } from "vss/com/dama/model/Enums";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
/**
 * @namespace vss.com.dama.eh.header
 */
export default class AssignTeamDialog implements IDialog {
    private _orderCtrl;
    _Dialog: Dialog;
    _UiModel: JSONModel;
    private assignTeamDialog;
    private headerData;
    private teamListData;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    open(): void;
    private _open;
    static onListItemEvent(this: AssignTeamDialog, event: Button$PressEvent): void;
    static onSelectionChange(this: AssignTeamDialog, event: SelectDialogBase$SelectionChangeEvent): void;
    private getAssignTeamDialog;
    static onSearch(this: AssignTeamDialog, event: SelectDialog$SearchEvent): void;
    static onConfirm(this: AssignTeamDialog, event: SelectDialog$ConfirmEvent): void;
    static onClose(this: AssignTeamDialog, event: Event): void;
}
