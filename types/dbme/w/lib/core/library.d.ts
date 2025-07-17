/**
 * @deprecated Use dbme.w.lib.core.Enums.libraryNamespace instead!
 */
export declare const libraryNamespace: "dbme.w.lib.core";
declare const thisLib: {
    [key: string]: unknown;
};
/**
 * @deprecated Use enum from dbme.w.lib.core.ui.Enums instead!
 */
export declare enum Route {
    _default = "default",
    nestedComponentDefault = "Nested"
}
/**
 * @deprecated Use enum from dbme.w.lib.core.ui.Enums instead!
 */
export declare enum FioriSemanticObject {
    defaultPrefix = "dbme_srs_",
    defaultAction = "display"
}
/**
 * DBM|E SRS components - back-end indicators; Uppercase chars only.
 *
 * @deprecated Use enum from dbme.w.lib.core.ui.Enums instead!
 */
export declare enum DBMEComponent {
    HierarchyAssignment = "HAS",
    ResourcePlanner = "RPL",
    Settings = "STS",
    TodoBasket = "TDO",
    DecisionTree = "TDT",
    WorkshopPlanner = "WPL",
    Launchpad = ""
}
/**
 * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
 */
export declare enum Uxfc {
    Hidden = 0,
    Readonly = 1,
    Optional = 3,
    Mandatory = 7
}
/**
 * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
 */
export declare enum Action {
    Create = "",
    Read = "R",
    Update = "U",
    Delete = "D"
}
/**
 * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
 */
export declare enum UnitOfMeasure {
    Hours = "H",
    Seconds = "SEC",
    Mile = "mile",
    Km = "km"
}
/**
 * @deprecated Use enum from the dbme.w.lib.core.calendar.Enums instead!
 */
export declare enum CalendarIntervalType {
    OneDay = "OneDay"
}
/**
 * @deprecated Use enum from the dbme.w.lib.core.calendar.Enums instead!
 */
export declare enum IntervalType {
    Absence = "A",
    Break = "B",
    Demands = "D",
    Holidays = "H",
    Reservation = "R",
    Availability = "V",
    TimeClocking = "T"
}
/**
 * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
 */
export declare enum ModelName {
    Avatar = "avatar",
    Calendar = "cal",
    Device = "device",
    HierarchyAssignment = "HAS",
    Local = "local",
    i18n = "i18n",
    TestMode = "TestMode",
    Translate = "i18n",
    ui = "ui",
    internal = "internal",
    /** @deprecated Use unnamed model instead! */
    SAPOData = "SAPOData"
}
/**
 * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
 */
export declare enum HttpHeaderName {
    timezoneOffset = "dbme-timezone_offset_minutes",
    timezoneName = "dbme-timezone_name",
    DBMEComponent = "dbme-component",
    DBMEMessage = "dbme-message",
    HierarchyId = "dbme-hierarchy-id",
    Data = "dbme-data"
}
/**
 * @deprecated Use dbme.w.lib.core.model.Enums.EntitySet enum instead!
 */
export declare enum Entityset {
    App = "CMNAppSet",
    AbsenceType = "CMNAbsenceTypeSet",
    AddressTitle = "CMNAddrTitleSet",
    /** @since VSS5 */
    AllocationFieldFilter = "WPLAllocationFieldFilterSet",
    AllocationInterval = "WPLIntervalSet",
    AllocationIntervalCreate = "WPLIntervalCreateSet",
    AllocationIntervalText = "WPLIntervalTextSet",
    CalendarViews = "CMNCalendarViewSet",
    Country = "CMNCountrySet",
    Demand = "WPLDemandSet",
    DemandCreate = "WPLDemandCreateSet",
    DemandRoles = "WPLDemandDDRolesSet",
    DemandType = "WPLDemandTypeSet",
    DemandTypeCommon = "CMNDemandTypeSet",
    UIFilters = "CMNFiltersSet",
    HierarchyPath = "HASNodePathSet",
    Interval = "RPLIntervalSet",
    IntervalCreate = "RPLIntervalCreateSet",
    IntervalType = "CMNIntervalTypeSet",
    MakeCode = "CMNMakeSet",
    MileageUom = "CMNMileageUomSet",
    MimeTypes = "CMNMimeTypeSet",
    ModelCode = "CMNModelSet",
    OrderType = "CMNOrderTypeSet",
    PlanningMode = "WPLPlanningModeSet",
    /** @since VSS5 */
    PlannerSortVariant = "WPLSortVariantSet",
    Region = "CMNCountryRegionSet",
    Resource = "CMNResourceSet",
    ResourceAssignment = "HASAssignmentSet",
    ResourceAvatar = "CMNResourceAvatarSet",
    ResourceStatus = "CMNResourceStatusSet",
    ResourceRole = "CMNResourceRoleSet",
    ResourceType = "CMNResourceTypeSet",
    ReservationType = "CMNReservationTypeSet",
    /** @since VSS5 */
    TeamMembers = "HASTeamMembersSet",
    TimeStep = "CMNTimeStepSet",
    TreeNode = "HASTreeNodeSet",
    TreeNodeCreate = "HASTreeNodeCreateSet",
    TodoAllocationProposal = "TDOAllocationProposalSet",
    TodoBusinessOrderUserStatus = "TDOBusinessOrderUserStatusSet",
    TodoDecTreeItem = "TDODecisionTreeItemSet",
    TodoLocation = "TDOLocationSet",
    TodoLocationGroup = "TDOLocationGroupSet",
    /** @since VSS5 - VSS only! */
    TodoMeasuringPoint = "TDOMeasuringPointSet",
    TodoOrder = "TDOOrderSet",
    TodoOrderList = "TDOOrderListSet",
    TodoOrderAction = "TDOActionSet",
    TodoOrderAgreement = "TDOOrderAgreementSet",
    TodoOrderAttachment = "TDOOrderAttachmentSet",
    TodoOrderCommChannel = "TDOCommChannel",
    TodoOrderDemand = "TDODemandSet",
    TodoOrderFields = "TDOScreenFieldSet",
    TodoOrderHistory = "TDOOrderHistorySet",
    TodoOrderNote = "TDOOrderNoteSet",
    TodoOrderParameter = "TDOOrderParameterSet",
    TodoVehiCust = "TDOVehicleCustomerSet",
    TodoVehiCustSH = "TDOVehicleCustomerMDSet",
    TodoResource = "TDOResourceSet",
    TodoRole = "TDORoleSet",
    TodoStatus = "TDOStatusSet",
    TodoStatusAction = "TDOStatusActionSet",//readonly
    TodoScreens = "TDOServiceScreenSet",
    TodoServiceSection = "TDOServiceSectionSet",
    TodoServiceSectionField = "TDOServiceSectionFieldSet",
    TodoServiceItem = "TDOServiceItemSet",
    TodoTimeSlot = "TDOTimeSlotsSet",
    TodoUser = "TDOUserSet",
    TodoWorkItem = "TDOWorkItemSet",
    TodoWorkshop = "TDOWorkshopSet",
    UIAppSettings = "CMNUISettingsSet",//LC based, app. backend configuration read in Component.init()
    UserHierarchyAsgn = "CMNHierarchyAsgnSet",//user hierarchy assignment
    VehicleContract = "TDOVehicleContractSet",
    VehicleDeferredJob = "TDOVehicleDeferredJobSet",
    VehicleRecall = "TDOVehicleRecallSet",
    VehicleServiceHistory = "TDOVehicleServiceHistorySet",
    VehicleWarranty = "TDOVehicleWarrantySet",
    WorkingModel = "CMNWorkingModelSet",
    WorkingHours = "CMNWorkingHoursSet"
}
/**
 * @deprecated Use enum from the dbme.w.lib.core.ui.Enums instead!
 */
export declare enum EventChannel {
    dbme = "dbme"
}
/**
 * Component events
 * @deprecated Use enum from the dbme.w.lib.core.ui.Enums instead!
 */
export declare enum Event {
    ReloadFilter = "ReloadFilter",
    SetFormData = "SetFormData",
    ListItemSelect = "ListItemSelect",
    ListUpdateFinished = "ListUpdateFinished",
    ResourceAtHierarchyDrop = "ResourceAtHierarchyDrop",
    AppointmentAtIntervalDrop = "AppointmentAtIntervalDrop",
    DemandAtIntervalDrop = "DemandAtIntervalDrop",
    FilterLoaded = "DBMEFilterLoaded"
}
/**
 * @deprecated Use enum from the dbme.w.lib.core.model.Enums instead!
 */
export declare enum Flag {
    yes = "yes",
    no = "no"
}
/**
 * @deprecated Use enum from the dbme.w.lib.core.calendar.Enums instead!
 */
export declare enum PlanningMode {
    Manual = "M",
    Rescheduling = "R"
}
/**
 * @name dbme.w.lib.core.library
 * @global
 */
export default thisLib;
