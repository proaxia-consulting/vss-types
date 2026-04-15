export declare enum PlanningMode {
    Automatic = "0",
    Manual = "1",
    NoAllocation = "2"
}
export declare enum OrderParameter {
    SrvAdvPickup = "SAD2"
}
export declare enum OrderSelectionMode {
    None = "",
    Single = "S",
    Multiple = "M"
}
/**
 * @deprecated Use definitely typed controller.UISettings instead!
 * @see dbme.srs.com.tdo.controller.AbstractBase.$UISettings
 */
export declare enum UISettingsKey {
    DemandDefaultUoM = "TDO_DEF_DEM_UOM",
    DefaultOrderType = "TDO_DEF_ORD_TYPE",
    DisplayCancelledDemands = "TDO_CANC_DEMA_SHOW",
    HideMeasuringPointsTab = "TDO_HIDE_MPT_TAB",
    PlannedFromInPast = "C_X_TDO_PLAN_FROM_PAST"
}
export declare enum ScreenArea {
    Customer = "C",
    Vehicle = "V",
    Order = "O"
}
export declare enum ComponentEvent {
    ScreenSectionTableItemsLoaded = "ScreenSectionTableItemsLoaded",
    ScreenSectionTableSelectionChange = "ScreenSectionTableSelectionChange"
}
/**
 * @deprecated Use dbme.w.lib.core.ui.Enums.ServiceName instead!
 * @see dbme.w.lib.core.ui.Enums.ServiceName
 */
export declare const ServiceName: {
    readonly MeasuringPoint: "MeasuringPoint";
};
/**
 * @deprecated Replaced with dbme.w.lib.core.model.Enums.ModelName
 * @see dbme.w.lib.core.model.Enums.ModelName
 */
export declare enum ModelName {
    Calendar = "cal",
    Device = "device",
    Local = "local",
    TestMode = "TestMode",
    Translate = "i18n"
}
export declare enum TabKey {
    ActionHistory = "ActionHistory",
    Agreements = "Agreements",
    Attachments = "Attachments",
    Date = "Date",
    Demands = "Demands",
    Location = "Location",
    Parameters = "Parameters",
    MeasuringPoints = "MeasuringPoints",
    Notes = "Notes"
}
export declare enum SectionType {
    Component = "C",
    DecissionTree = "T",
    Manual = "M",//Doesn't exists in Backend
    Service = "E",
    Work = ""
}
export declare enum DemandOrigin {
    Automatic = "",
    Catalog = "C",
    WorkItem = "I",
    Manual = "M",
    Parameter = "P"
}
export declare enum FieldGroupId {
    Address = "Addr",
    Allocation = "Allocation",
    Customer = "Cust",
    Default = "defaultGroupId",
    Demand = "Demand",
    email = "emailId",
    Order = "Order",
    OrderActionButton = "actionButtonGroupId",
    SearchCustomer = "SearchCust",
    SearchOrder = "SearchOrder",
    SearchVehicle = "SearchVehi",
    ServiceItemTable = "TDOServiceItemSet",
    Vehicle = "Vehi",
    VehicleMeta = "VehiMeta",
    WorkItemTable = "TDOWorkItemSet"
}
export declare const ControlId: {
    readonly OrderActionsContainer: "idActionsContainer";
    readonly OrderCreateForm: "idOrderForm";
    readonly OrderTable: "idTable";
    readonly VehicleSearchForm: "idSearchForm";
    readonly VehicleSearchTable: "idSearchResults";
    readonly Tabs: "idIconTabBar";
};
export declare const OrderFunction: {
    readonly Cancel: ".CANCE";
    readonly Reschedule: ".RESCH";
    readonly Replan: ".REPLN";
};
export type OrderFunctionType = (typeof OrderFunction)[keyof typeof OrderFunction];
/** @deprecated Use OrderFunctionViewMap instead! */
export declare const OrderFunctionView: {
    readonly Replan: "dbme.srs.com.tdo.view.action.Replan";
    readonly Reschedule: "dbme.srs.com.tdo.view.action.Reschedule";
};
export declare const OrderFunctionViewMap: Map<OrderFunctionType, string>;
export declare enum RouteName {
    default = "default",
    Create = "Create",
    CreateQuery = "CreateQuery",
    CreateApt = "CreateApt",
    Details = "Details",
    Index = "Index",
    IndexQuery = "IndexQuery",
    NestedRoutePrefix = "NESTED"
}
export declare enum BatchGroupId {
    Allocation = "Allocation",
    Attachment = "Attachment",
    Helper = "Helper",
    Replan = "Replan",
    Order = "Order",
    OrderAction = "OrderAction",
    Test = "Test"
}
export declare enum OrderFields {
    PlannedFrom = "PLANNED_FROM_TS",
    PickupAt = "PICKUP_AT_TS",
    RequestedMaxDuration = "REQ_MAX_DUR"
}
export declare const MeasuringCountersProps: {
    readonly MILEAGE: "MILEAGE";
    readonly MILEAGE_UOM: "MILEAGE_UOM";
    readonly CNT_ENGH: "CNT_ENGH";
    readonly CNT_ENGHU: "CNT_ENGHU";
};
export type MeasuringCountersPropsType = (typeof MeasuringCountersProps)[keyof typeof MeasuringCountersProps];
export declare const DemandField: {
    readonly RESOURCE_NAME_PREF: "RESOURCE_NAME_PREF";
    readonly RESOURCE_ID_PREF: "RESOURCE_ID_PREF";
    readonly REMARKS_TEXT: "REMARKS_TEXT";
    readonly REQAL_DATE_FROM: "REQAL_DATE_FROM";
    readonly REQAL_DATE_TO: "REQAL_DATE_TO";
};
export declare const ListUpdateFinishedReason: {
    Filter: string;
    Refresh: string;
};
export declare const CustomerClearMode: {
    /** Default mode: clear only Customer and Partner number */
    Default: string;
    All: string;
    ExceptEmailAndUserId: string;
    ExceptUserId: string;
};
export type CustomerClearModeType = (typeof CustomerClearMode)[keyof typeof CustomerClearMode];
