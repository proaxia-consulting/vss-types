import type { Button$PressEvent } from "sap/m/Button";
import type Event from "sap/ui/base/Event";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
declare const CartItemEventHandler: {
    /**
     * Propagate the 'Add to cart' event to the EventBus; Handle in component that implements {vss.com.rcl.cart.ICart}
     * @see {pacg.com.rcm.cart.eh.UpdateCartHandler}
     */
    onActionButtonAddToCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Button$PressEvent): void;
    onActionButtonOpenCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Event): void;
    /**
     * Propagate the 'Remove from cart' event to the EventBus; Handle in component that implements {vss.com.rcl.cart.ICart}
     * @see {pacg.com.rcm.cart.eh.UpdateCartHandler}
     */
    onActionButtonRemoveFromCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Event): void;
};
/**
 * @namespace pacg.com.rcm.eh
 */
export default CartItemEventHandler;
