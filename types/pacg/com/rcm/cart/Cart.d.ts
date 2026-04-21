import OverflowToolbarButton from "sap/m/OverflowToolbarButton";
import CartModel from "pacg/com/rcm/cart/model/CartModel";
import type ICart from "vss/com/rcl/cart/ICart";
import type { TCartItem, TCartHeader } from "vss/com/rcl/cart/ICartModel";
/**
 * @nonui5
 * @namespace pacg.com.rcm.cart
 */
export default class Cart implements ICart {
    private _model;
    private _button?;
    private _clearButton?;
    private _itemsMiddleware;
    constructor();
    model(): CartModel;
    clearButton(): OverflowToolbarButton;
    button(): OverflowToolbarButton;
    add(...newItems: TCartItem[]): void;
    remove(...forRemove: TCartItem[]): void;
    flush(): void;
    destroy(): void;
    isEmpty(): boolean;
    getItems(): TCartItem[];
    getHeader(): TCartHeader;
    setHeader(header: TCartHeader): void;
    exists(item: TCartItem): boolean;
    private refresh;
    private createCustomDataForButton;
    exclude(key: string): void;
    isExcluded(key: string): boolean;
}
