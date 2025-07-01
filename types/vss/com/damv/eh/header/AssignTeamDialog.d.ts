import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import Order from "../../controller/Order.controller";
import { FragmentId } from "../../model/Enums";
import { IDialog } from "../../types/ControllerInterface";
import Dialog from "sap/m/Dialog";
/**
 * @namespace vss.com.dama.eh.header
 */
export default class AssignTeamDialog implements IDialog {
    private _orderCtrl;
    _Dialog: Dialog;
    _UiModel: JSONModel;
    private assignTeamDialog;
    private headerData;
    private textBundle;
    private teamListData;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    open(): Promise<void>;
    static onListItemEvent(this: AssignTeamDialog, event: Event): void;
    static onSelectionChange(this: AssignTeamDialog, event: Event): void;
    private getAssignTeamDialog;
    static onSearch(this: AssignTeamDialog, event: Event): void;
    static onConfirm(this: AssignTeamDialog, event: Event): void;
    static onClose(this: AssignTeamDialog, event: Event): void;
}
