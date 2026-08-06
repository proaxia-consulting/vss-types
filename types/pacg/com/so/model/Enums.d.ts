/** @deprecated Use vss.com.rcl.model.DeliveryActionQuery.ActionName */
export declare enum ActionName {
    OutboundDelivery = "OutboundDelivery",
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
    ActionDialog = "DialogActionId",
    /** @deprecated use vss.com.rcl.model.Enums.ControlId.SalesOrderItemsAllTable instead! */
    SalesOrderTable = "fe::table::OrderItemTab::LineItem",
    SalesOrderItemsAllTable = "fe::table::OrderItemTab::LineItem",
    SalesOrderItemsInboundTable = "fe::table::OrderItemInTab::LineItem",
    SalesOrderItemsOutboundTable = "fe::table::OrderItemOutTab::LineItem",
    SectionDocumentFlowSalesOrder = "fe::CustomSubSection::SubSectionDocumentFlowSalesOrder"
}
/** @deprecated Use vss.com.rcl.templates.ListReport.AbstractDeliveryListReportExtension.DataKey */
export declare enum DataKey {
    eventAttached = "eventAttached"
}
/** @deprecated Use vss.com.rcl.model.Enums.ContextCheck */
export declare enum ContextCheck {
    All = 0,
    AtLeastOne = 1
}
