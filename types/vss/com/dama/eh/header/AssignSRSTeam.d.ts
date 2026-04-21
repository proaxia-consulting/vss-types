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
export default class AssignSRSTeam implements IDialog {
    private _orderCtrl;
    _Dialog: Dialog;
    _UiModel: JSONModel;
    private AssignSRSTeamDialog;
    private headerData;
    private teamListData;
    constructor(_orderCtrl: Order, _fragmentId: FragmentId);
    open(): void;
    private _open;
    static onSelectionChange(this: AssignSRSTeam, event: SelectDialogBase$SelectionChangeEvent): void;
    private getAssignSRSTeamDialog;
    static onSearch(this: AssignSRSTeam, event: SelectDialog$SearchEvent): void;
    static onConfirm(this: AssignSRSTeam, event: SelectDialog$ConfirmEvent): void;
    static onClose(this: AssignSRSTeam, event: Event): void;
}
