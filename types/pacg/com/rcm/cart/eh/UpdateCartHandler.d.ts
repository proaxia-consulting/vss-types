import type Event from "sap/ui/base/Event";
import type { IListReportController } from "vss/com/fe/ListReport";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
declare const UpdateCartHandler: {
    onActionButtonAddToCartPress(this: IListReportController | IObjectPageController, event: Event): void;
    onActionButtonRemoveFromCartPress(this: IListReportController | IObjectPageController, event: Event): void;
};
/**
 * @namespace pacg.com.rcm.cart.eh
 */
export default UpdateCartHandler;
