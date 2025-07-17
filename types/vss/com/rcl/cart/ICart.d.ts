import type Button from "sap/m/Button";
import type { TCartItem, ICartModel, TCartHeader } from "vss/com/rcl/cart/ICartModel";
/**
 * @namespace vss.com.rcl.cart
 */
export default interface ICart {
    getHeader?: () => TCartHeader;
    getItems(): TCartItem[];
    isEmpty(): boolean;
    flush(): void;
    add(...newItems: TCartItem[]): void;
    exists(item: TCartItem): boolean;
    remove(...forRemove: TCartItem[]): void;
    model(): ICartModel;
    button?: () => Button;
    clearButton?: () => Button;
    exclude(key: string): void;
    isExcluded(key: string): boolean;
    destroy(): void;
}
