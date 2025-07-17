import type ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { TCartItem } from "vss/com/rcl/cart/ICartModel";
/**
 * @nonui5
 * @namespace pacg.com.rcm.model
 */
export default class CartItemsToContract {
    private _api;
    private _itemsBinding;
    constructor(_api: IObjectPageExtensionAPI, _itemsBinding: ODataListBinding);
    create(...cartItem: TCartItem[]): Promise<void>;
    private _prepareCartItems;
}
