import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
import Order from "vss/com/dama/controller/Order.controller";
import { DialogMode, FragmentId, OrderLevel } from "vss/com/dama/model/Enums";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace vss.com.dama.eh
 */
export default class BaseDialog implements IDialog {
    protected _orderCtrl: Order;
    protected fragmentId: FragmentId;
    _Dialog: Dialog;
    _UiModel: JSONModel;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    setBeforeLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    getModel(): JSONModel;
    open(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    loadDialog(fragmentId: FragmentId): Promise<Dialog>;
    close(): void;
}
