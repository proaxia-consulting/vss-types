import type { Button$PressEvent } from "sap/m/Button";
import type { IListReportController } from "vss/com/fe/ListReport";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
declare const UpdateCartHandler: {
    onActionButtonAddToCartPress(this: IListReportController | IObjectPageController, event: Button$PressEvent): void;
    onActionButtonRemoveFromCartPress(this: IListReportController | IObjectPageController, event: Button$PressEvent): void;
};
/**
 * @namespace pacg.com.rcm.cart.eh
 */
export default UpdateCartHandler;
