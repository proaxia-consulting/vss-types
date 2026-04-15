import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type Context from "sap/ui/model/Context";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Order from "vss/com/dama/controller/Order.controller";
import type { DialogMode, FragmentId, OrderLevel } from "vss/com/dama/model/Enums";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
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
    open(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel, context?: Context): void;
    loadDialog(fragmentId: FragmentId, context?: Context): Promise<Dialog>;
    close(): void;
}
