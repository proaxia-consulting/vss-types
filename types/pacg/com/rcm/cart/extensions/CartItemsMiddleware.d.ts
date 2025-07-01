import type ICart from "vss/com/rcl/cart/ICart";
import { TCartItem } from "vss/com/rcl/cart/ICartModel";
/**
 * @nonui5
 * @namespace pacg.com.rcm.cart.extensions
 */
export default class CartItemsMiddleware {
    private _cart;
    private _quantityInputId?;
    private _quantityInput?;
    private _dialog?;
    constructor(_cart: ICart);
    updateItemsQuantity(...newItems: TCartItem[]): Promise<TCartItem[]>;
    private _quantityValue;
    private _createQuantityDialog;
}
