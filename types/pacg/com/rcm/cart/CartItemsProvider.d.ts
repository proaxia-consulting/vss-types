import type Control from "sap/ui/core/Control";
/**
 * @nonui5
 * @namespace pacg.com.rcm.cart
 */
export default class CartItemsProvider {
    private static _itemsProvider;
    private _cart;
    private _rootForHierarchy;
    private _posnr;
    private _model;
    private constructor();
    static getInstance(reload?: boolean): CartItemsProvider;
    updateCart(sourceControls: Control[], added?: boolean): Promise<void>;
    private _getCart;
    private requestRoot;
    private fromControls;
    private appendSubItems;
}
