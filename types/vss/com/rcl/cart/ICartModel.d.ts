import type JSONModel from "sap/ui/model/json/JSONModel";
import type { RentalClassTypeType } from "vss/com/rcl/model/Enums";
export declare const IconUri: {
    readonly CartAdd: "sap-icon://cart-3";
    readonly CartRemove: "sap-icon://cart-2";
    readonly CartEmpty: "sap-icon://cart";
    readonly CartFull: "sap-icon://cart-full";
};
export type TContractItemNumber = {
    SalesDocumentItem?: number;
    HigherLevelItem?: number;
};
export type TContractHeaderData = {
    ValidityStartDate?: Date;
    ValidityEndDate?: Date;
};
export type TCartHeader = {
    data: TContractHeaderData;
};
export type TContractItemData = TContractItemNumber & {
    Equipment: string;
    Equipment_Text?: string;
    SerialNumber: string;
    Material: string;
    Material_Text?: string;
    Plant: string;
    Plant_Text?: string;
    StorageLocation: string;
    StorageLocation_Text?: string;
    RentalClassType?: RentalClassTypeType;
    Batch?: string;
};
export type TCartItem = {
    key: string;
    data?: TContractItemData;
    Quantity?: number;
    QuantityUnit?: string;
    ValidityStartDate?: Date;
    ValidityEndDate?: Date;
};
/**
 * Cart model data
 */
export type TCartData = {
    items: TCartItem[];
    header: TCartHeader;
    enabled: boolean;
};
export type TCartItemsMap = Record<string, TCartItem>;
export interface ICartModel {
    add(...newItems: TCartItem[]): void;
    remove(...forRemove: TCartItem[]): void;
    refresh(items?: TCartItem[]): void;
    findIndex(searchItem?: TCartItem, items?: TCartItem[]): number;
    exists(searchItem?: TCartItem, items?: TCartItem[]): boolean;
    model(): JSONModel;
}
