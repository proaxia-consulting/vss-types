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
export declare enum TabKey {
    ActionHistory = "ActionHistory",
    Agreements = "Agreements",
    Attachments = "Attachments",
    CommunicationConsents = "CommunicationConsents",
    Date = "Date",
    Demands = "Demands",
    Location = "Location",
    Parameters = "Parameters",
    MeasuringPoints = "MeasuringPoints",
    Notes = "Notes"
}
export declare const TabKeyOffset: {
    /** TDOServiceScreenSet.SEQNUM is a NUMC(4) in the backend @see dbme.srs.com.tdo.types.IScreen */
    readonly Tab: 9999;
    readonly PredefinedTabCreateMode: 99999;
    /** TDOServiceSectionSet.SECTION_NO is a NUMC(3) in the backend @see dbme.srs.com.tdo.types.IScreenSection */
    readonly Section: 999;
};
export declare enum SectionType {
    Component = "C",
    DecisionTree = "T",
    /** @deprecated Use SectionType.ManualDemandCreate instead! */
    Manual = "M",
    ManualDemandCreate = "M",//Doesn't exists in Backend
    Predefined = "P",
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
    PreferredComm = "PreferredComm",
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
export declare const OrderFunctionViewMap: Map<OrderFunctionType, string>;
export declare enum RouteName {
    default = "default",
    Create = "Create",
    CreateQuery = "CreateQuery",
    CreateApt = "CreateApt",
    Details = "Details",
    Index = "Index",
    /** @deprecated Use RouteName.Query instead! */
    IndexQuery = "IndexQuery",
    Query = "Query",
    /** @deprecated Do not use! */
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
