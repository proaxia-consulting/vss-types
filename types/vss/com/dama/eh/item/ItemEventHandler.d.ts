import type Event from "sap/ui/base/Event";
import type OrderController from "../../controller/Order.controller";
/**
 * @namespace vss.com.dama.eh.header
 */
export default class ItemEventHandler {
    static onDeleteItem(this: OrderController, event: Event): void;
    static onEditItem(this: OrderController, event: Event): void;
    static onAddLabour(this: OrderController, event: Event): void;
    static onAddPart(this: OrderController, event: Event): void;
    static onAddManualLabour(this: OrderController, event: Event): void;
}
