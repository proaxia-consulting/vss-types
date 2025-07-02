export declare enum ActionName {
    OutboudDelivery = "OutboudDelivery",
    PartialDelivery = "PartialDelivery",
    ManufacturerSerialNo = "ManufacturerSerialNo",
    GoodsIssue = "GoodsIssue",
    ReverseGoodsMvmnt = "ReverseGoodsMvmnt",
    DeleteDelivery = "DeleteDelivery",
    InboundDelivery = "InboundDelivery",
    GoodsReceipt = "GoodsReceipt",
    SerialNoUpdate = "SerialNoUpdate"
}
export declare enum DeliveryStatus {
    NotRelevant = "",
    NotDelivered = "A",
    PartiallyDelivered = "B",
    Completed = "C"
}
export declare enum ControlId {
    SalesOrderTable = "fe::table::tab1::LineItem",
    DeliveryTable = "fe::table::tab2::LineItem",
    SectionDocumentFlowSalesOrder = "fe::CustomSubSection::SubSectionDocumentFlowSalesOrder"
}
export declare enum DataKey {
    eventAttached = "eventAttached"
}
export declare enum ContextCheck {
    All = 0,
    AtLeastOne = 1
}
