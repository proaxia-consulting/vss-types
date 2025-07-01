import Event from "sap/ui/base/Event";
import { FragmentId } from "../../model/Enums";
import LabourValueHelp from "./LabourValueHelp";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
import Context from "sap/ui/model/odata/v4/Context";
import Order from "../../controller/Order.controller";
export default class PartDialog extends BaseDialog implements IDialog {
    private _jobCtx;
    _newItemCtx: Context;
    private _partUiModel;
    private _itemsBinding;
    OPartDialog: PartDialog;
    LabourValueHelp: LabourValueHelp;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    open(eventCtx: Event): void;
    private getPartDialog;
    static onMaterialChanged(this: PartDialog, event: Event): void;
    static availabilityCheck(this: PartDialog): void;
    static onQuantityChanged(this: PartDialog, event: Event): void;
    static onSave(this: PartDialog, event: Event): void;
    static onClose(this: PartDialog, event: Event): void;
    static resetContext(this: PartDialog): void;
    static onScan(this: PartDialog, event: Event): void;
    initUiModel(): void;
    private _validateData;
    private _stripMessage;
}
