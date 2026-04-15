import type Order from "vss/com/dama/controller/Order.controller";
import { FragmentId } from "vss/com/dama/model/Enums";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
/**
 * @namespace vss.com.dama.eh
 */
export default class FactoryDialog {
    private static dialogMap;
    static get(orderCtrl: Order, fragmentId: FragmentId): IDialog;
    static destroyDialogs(): void;
}
