export type POIdentifierOData = {
    PODelivery: string;
    POPositionNumber: string;
};
export type SubmitEntityOData = POIdentifierOData & OrderSubmitIdentifierOData;
export type SubmitEntityODataDetail = {
    toBeSubmitted: SubmitEntityOData[];
    errorState: number;
};
export type OrderIdentifierOData = {
    VSSOrder: string;
    VSSPositionNumber: string;
};
export type OrderSubmitIdentifierOData = OrderIdentifierOData & AssignedQuantityOData & {
    StorageLocation: string;
    StorageBin: string;
};
export type AssignedQuantityOData = {
    AssignedQuantity: string;
};
export type POAssignedQuantityOData = POIdentifierOData & AssignedQuantityOData;
export type OrderHalfExtendedIdentifierOData = OrderSubmitIdentifierOData & OrderDataOData;
export type OrderDataOData = {
    Quantity: string | undefined;
};
export type PurchaseOrderDataOData = {
    POQuantity: string;
    OpenForGR: string | undefined;
};
export type MaterialDataOData = {
    MaterialNumber: string | undefined;
    MaterialDescr: string | undefined;
};
export type TableColumnsOData = POIdentifierOData & OrderHalfExtendedIdentifierOData & PurchaseOrderDataOData & MaterialDataOData & {
    VSSTrackingNumber: string;
    ButtonsColumn: string | undefined;
    DeliveryDate: string | undefined;
    Priority: string;
};
export type TableAdditionalDataOData = {
    PriorityDescr: string;
};
export type TableAllDataOData = TableColumnsOData & TableAdditionalDataOData & OrderAdditionalDataOData;
export type OrderAdditionalDataOData = {
    Plant: string;
    SalesOrganization: string;
    ToStock: string;
};
