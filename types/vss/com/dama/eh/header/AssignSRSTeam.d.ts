import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import Order from "../../controller/Order.controller";
import { FragmentId } from "../../model/Enums";
import { IDialog } from "../../types/ControllerInterface";
import Dialog from "sap/m/Dialog";
import { SelectDialogBase$SelectionChangeEvent } from "sap/m/SelectDialogBase";
import { SelectDialog$ConfirmEvent, SelectDialog$SearchEvent } from "sap/m/SelectDialog";
/**
 * @namespace vss.com.dama.eh.header
 */
export default class AssignSRSTeam implements IDialog {
    private _orderCtrl;
    _Dialog: Dialog;
    _UiModel: JSONModel;
    private AssignSRSTeamDialog;
    private headerData;
    private textBundle;
    private teamListData;
    constructor(_orderCtrl: Order, _fragmentId: FragmentId);
    open(): Promise<void>;
    static onSelectionChange(this: AssignSRSTeam, event: SelectDialogBase$SelectionChangeEvent): void;
    private getAssignSRSTeamDialog;
    static onSearch(this: AssignSRSTeam, event: SelectDialog$SearchEvent): void;
    static onConfirm(this: AssignSRSTeam, event: SelectDialog$ConfirmEvent): void;
    static onClose(this: AssignSRSTeam, event: Event): void;
}
