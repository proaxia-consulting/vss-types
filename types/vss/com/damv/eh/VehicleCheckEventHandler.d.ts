import Event from "sap/ui/base/Event";
import type OrderController from "../controller/Order.controller";
/**
 * @namespace vss.com.dama.eh
 */
export default class VehicleCheckEventHandler {
    static onRangeStatus(this: OrderController, event: Event): void;
    static onSliderChanged(this: OrderController, event: Event): void;
    static onRepairCodePress(this: OrderController, event: Event): void;
    static onStepInputChange(this: OrderController, event: Event): void;
    static onConditionStatus(this: OrderController, event: Event): void;
    static onSelectListType(this: OrderController, event: Event): void;
    static onCheckItemAttachment(this: OrderController, event: Event): void;
    static onTirePress(this: OrderController, event: Event): void;
    static onApplyAxle(this: OrderController, event: Event): void;
    static onDimensionVh(this: OrderController, event: Event): void;
    static onCheckItemLongText(this: OrderController, event: Event): void;
    static onLongTextClose(this: OrderController, event: Event): void;
}
