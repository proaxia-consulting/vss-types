import { State } from "sap/m/p13n/Engine";
import { MetadataObject } from "sap/m/p13n/MetadataHelper";
export type POIdentifier = {
    PODelivery: HiddableTextObject;
    POPositionNumber: HiddableTextObject;
};
export type OrderIdentifier = {
    VSSOrder: string;
    VSSPositionNumber: string;
};
export type AssignedQuantityObject = {
    value: string;
    error: boolean;
    errorText: string;
};
export type OrderSubmitIdentifier = OrderIdentifier & {
    AssignedQuantity: AssignedQuantityObject;
    StorageLocation: Array<StorageLocationSelect> | string;
};
export type OrderHalfExtendedIdentifier = OrderSubmitIdentifier & OrderData;
export type OrderExtendedIdentifier = OrderSubmitIdentifier & OrderData & OrderAdditionalData;
export type POExtendedIdentifier = POIdentifier & {
    Index: int;
};
export type POReadExtendedIdentifier = POIdentifier & MoreOrders;
export type MoreOrders = {
    CounterVSSOrders: int;
};
export type OrderAdditionalData = {
    Plant: string;
    SalesOrganization: string;
    ToStock: string;
};
export type OrderData = {
    Quantity: string | undefined;
};
export type TablePurchaseOrder = POExtendedIdentifier & MaterialData & PurchaseOrderData & MoreOrders;
export type PurchaseOrderData = {
    POQuantity: HiddableTextObject;
    OpenForGR: HiddableTextObject;
};
export type MaterialData = {
    MaterialNumber: HiddableTextObject;
    MaterialDescr: HiddableTextObject;
};
export type SubmitOrder = POIdentifier & OrderIdentifier & PurchaseOrderData & OrderData & MaterialData;
export type SubmitEntity = POIdentifier & OrderSubmitIdentifier;
export type TableColumns = POIdentifier & OrderHalfExtendedIdentifier & PurchaseOrderData & MaterialData & {
    VSSTrackingNumber: HiddableTextObject;
    ButtonsColumn: string | undefined;
    DeliveryDate: string | undefined;
    Priority: HiddableTextObject;
};
export type TableAllData = TableColumns & TableAdditionalData;
export type TableAssignedQuantityData = {
    PurchaseOrder: string;
    PurchaseOrderPos: string;
    PurchaseOrderReqQty: number;
    PurchaseOrderAssignQty: number;
    VSSOrder: string;
    VSSOrderPos: string;
    VSSOrderReqQty: number;
    VSSOrderAssignQty: number;
};
export type TableAdditionalData = {
    PriorityDescr: string;
};
export type ColumnObject = {
    columnId: string;
    text: string;
};
export type LookupIndexes = {
    IndexStart: int;
    IndexEnd: int;
};
export type BackendMessage = {
    type: string;
    code: string;
    message: string;
};
export type StorageLocations = {
    Plant: string;
    SalesOrganization: string;
    Location: string;
};
export type StorageLocationSelect = {
    location: string;
    selected: boolean;
};
export type SelectionCriteriaTypeKey = {
    SelectionCriteria: string;
};
export type SelectionCriteriaType = SelectionCriteriaTypeKey & {
    Description: string;
    IsDefault: "X" | "";
};
export type StateP13n = State & {
    Columns: MetadataObject[];
    Sorter: MetadataObject & {
        key?: string;
        sorted?: boolean;
        descending?: boolean;
    }[];
    Groups: MetadataObject[];
    ColumnWidth: Record<string, string>;
};
export type HiddableTextObject = {
    value: any;
    displayValue: any;
};
export type ProductDescription = {
    Product: string;
    Language: string;
    ProductDescription: string;
};
