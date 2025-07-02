import type { DocumentIOTypeType } from "vss/com/rcl/model/Enums";
export type RootEntity = {
    DeliveryDocument: string;
    DeliveryDocumentItem: string;
    DeliveryStatus: string;
    GoodsIssueStatus: boolean;
    HandoverStatus: string;
    ManufacturerSerialNumber: string;
    OrderQuantity: string;
    OrderQuantityUnit: string;
    RequestedDeliveryDate: string;
    SalesDocument: string;
    SalesDocumentItem: string;
    SerialNumber: string;
    TargetQuantity: string;
    TargetQuantityUnit: string;
    IOType?: DocumentIOTypeType;
    HasHierarchyChildren?: boolean;
};
