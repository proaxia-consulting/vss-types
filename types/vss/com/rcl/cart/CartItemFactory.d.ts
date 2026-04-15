import type { TCartItem, TContractItemNumber } from "vss/com/rcl/cart/ICartModel";
import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
declare const CartItemFactory: {
    /**
     * Common properties for Equipment and Material
     */
    requestProperties(): string[];
    requestEquipmentProperties(): string[];
    requestMaterialProperties(): string[];
    fromRoot(itemData: TRootEntity, contractItemNumber?: TContractItemNumber, quantity?: number): TCartItem;
};
/**
 * @namespace vss.com.rcl.cart
 */
export default CartItemFactory;
