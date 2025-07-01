import JSONModel from "sap/ui/model/json/JSONModel";
import type { ICartModel, TCartItem } from "vss/com/rcl/cart/ICartModel";
/**
 * @nonui5
 * @namespace pacg.com.rcm.cart.model
 */
export default class CartModel implements ICartModel {
    private _now;
    private _model;
    constructor();
    static create(): JSONModel;
    model(): JSONModel;
    add(...newItems: TCartItem[]): void;
    remove(...forRemove: TCartItem[]): void;
    flush(): void;
    findIndex(searchItem?: TCartItem, items?: TCartItem[]): number;
    exists(searchItem?: TCartItem, items?: TCartItem[]): boolean;
    refresh(items?: TCartItem[]): void;
    private key;
}
