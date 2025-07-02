import Order from "../controller/Order.controller";
import { FragmentId } from "../model/Enums";
import { IDialog } from "../types/ControllerInterface";
/**
 * @namespace vss.com.dama.eh
 */
export default class FactoryDialog {
    private static dialogMap;
    static get(orderCtrl: Order, fragmentId: FragmentId): IDialog;
    static destroyDialogs(): void;
}
