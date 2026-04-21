import type { Button$PressEvent } from "sap/m/Button";
import type OrderController from "vss/com/dama/controller/Order.controller";
import type { Control$Event } from "vss/com/dama/types/ControllerInterface";
/**
 * @namespace vss.com.dama.eh.header
 */
export default class ItemEventHandler {
    static onDeleteItem(this: OrderController, event: Button$PressEvent): void;
    static onEditItem(this: OrderController, event: Control$Event): void;
    static onAddLabour(this: OrderController, event: Control$Event): void;
    static onAddPart(this: OrderController, event: Control$Event): void;
    static onAddManualLabour(this: OrderController, event: Control$Event): void;
}
