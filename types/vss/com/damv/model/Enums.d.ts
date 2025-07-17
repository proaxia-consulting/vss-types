export declare enum EventId {
    ticStarted = "ticStarted",
    identityContainerInitialized = "identityContainerInitialized"
}
export declare enum eventChannel {
    mechApp = "mechApp"
}
export declare enum ModelName {
    action = "action",
    device = "device",
    i18n = "i18n",
    local = "local",
    Ui = "ui",
    pageInternal = "pageInternal",
    internal = "internal",
    TicAction = "TicAction",
    MechanicApp = "",
    timeClocking = "timeClocking",
    cvAttachmentSrv = "cvAttachmentSrv",
    activeOrder = "activeOrder",
    personStatus = "personStatus",
    ticButtons = "ticButtons",
    OrderDetails = "OrderDetails",
    NewItem = "NewItem",
    PartItem = "PartItem",
    TeamList = "TeamList",
    AttachmentList = "AttachmentList",
    Data = "data",
    ListReportMap = "ListReportMap",
    Vhc = "Vhc"
}
export declare enum RouteName {
    OrderHeaderObjectPage = "OrderHeaderObjectPage",
    OrderHeaderList = "OrderHeaderList",
    Order = "Order",
    VssOrder = "VssOrder"
}
export declare enum ControlId {
    mainTable = "vss.com.dama::OrderHeaderList--fe::table::OrderSPV::LineItem",
    jobTable = "fe::table::_OrderJob::LineItem",
    itemTable = "vss.com.dama::Order--itemsTable-vss.com.dama::Order--DetailsPage-0",
    filterBar = "fe::FilterBar::OrderHeader",
    mainPage = "fe::ListReport",
    orderPage = "container-vss.com.dama---Order--DetailsPage",
    DetailsPage = "DetailsPage",
    /**
     * @link https://sapui5.hana.ondemand.com/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
     */
    cancelButton = "fe::FooterBar::StandardAction::Cancel",
    saveButton = "fe::FooterBar::StandardAction::Save",
    TicLineAction = "fe::table::OrderHeader::LineItem::C::CustomColumn::TicLineAction-innerColumn"
}
export declare enum EntitySet {
    Logins = "Logins",
    Personals = "Personals",
    UserPersonals = "UserPersonals",
    AvailableEvents = "AvailableEvents",
    Subordinates = "Subordinates",
    TicPerson = "TicPerson",
    toServiceHistory = "_ServiceHistory",
    toServiceInterval = "_ServiceInterval",
    VehicleRecall = "VehicleRecall",
    toVGMDocument = "_VGMDocument",
    toOrderJob = "_OrderJob",
    toWarranty = "_Warranty",
    toRecall = "_Recall",
    GetAllOriginals = "GetAllOriginals",
    MainConfig = "MainConfig"
}
export declare enum RemoteAppId {
    MechanicApp = "/DBE/DAMA"
}
export declare enum RemoteMessageId {
    UpdateOrder = "UPDATE_ORDER",
    UpdateMech2Order = "UPDATE_MECH2ORDER",
    Attachments = "ATTACHMENTS",
    Counters = "COUNTERS",
    MaterialCheck = "MATERIAL_AVAILABILITY_CHECK",
    CheckList = "CHECK_LIST",
    UpdateCheckList = "UPDATE_CHECK_LIST",
    AttachmentsCount = "ATTACHMENTS_COUNT",
    MeasurePoints = "MEASURE_POINTS"
}
export declare enum HTTPMethod {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
}
export declare enum EditMode {
    Editable = "Editable"
}
export declare enum fieldGroupId {
    TicActionContainer = "TicActionContainer",
    ItemCategory = "ItemCategory"
}
export declare enum DialogMode {
    create = "CREATE",
    change = "CHANGE",
    display = "DISPLAY"
}
export declare enum OrderLevel {
    Header = "H",
    Job = "J"
}
export declare enum TimeClockingLevel {
    Order = "1",
    Job = "2",
    Item = "3",
    undefined = ""
}
export declare enum FragmentId {
    ServiceHistory = "header.ServiceHistoryListDialog",
    ServiceInterval = "header.ServiceIntervalListDialog",
    VGMDocumentList = "header.VGMDocumentList",
    Warranty = "header.WarrantyListDialog",
    Recall = "header.RecallListDialog",
    JobNotification = "job.JobNotification",
    Mileage = "header.MileageEditDialog",
    Vhc = "header.VhcDialog",
    JobAttachment = "job.JobAttachment",
    LaborList = "LaborList",
    Labor = "Labor",
    Part = "Part",
    JobDetails = "job.JobDetails",
    AssignTeam = "header.AssignTeam",
    Package = "job.JobPackage",
    CustomerContact = "header.CustomerContact",
    MultiJobsApproval = "header.MultiJobsApproval",
    MeasurePoints = "header.MeasurePoints",
    AssignSRSTeam = "header.AssignSRSTeam"
}
export declare enum JobApprovalStatus {
    Reject = "REJECTED",
    Approved = "APPROVED",
    Requested = "REQUESTED",
    New = ""
}
export declare enum ItemPartsStatus {
    Available = "AVAILABLE",
    Unavailable = "UNAVAILABLE",
    Procured = "PROCURED",
    Issued = "ISSUED"
}
export declare enum DbMode {
    create = "C",
    read = "R",
    update = "U",
    delete = "D"
}
export declare enum CustomDataName {
    EventDetails = "eventDetails",
    UserPersonal = "userPersonal",
    CostCenter = "CostCenter",
    Order = "order"
}
export declare enum EventTypeMark {
    WorkOrder = "WO",
    Break = "BR",
    EndWork = "EW"
}
export declare enum EventCode {
    EndWork = "50"
}
export declare enum VssOrderEvent {
    TimebookConfirmation = "TIMEBOOK_CONFIRM",
    CustomerApprovalRequest = "CUST_APPROVAL_RQ"
}
export declare enum OrderType {
    VSS = "VSS",// VSS Order
    IO = "IO"
}
export declare enum ItemType {
    Labor = "LBR",
    ManualLabor = "MLBR",
    Package = "PCKG",
    Part = "PRT"
}
export declare enum CounterType {
    Forward = "F",
    Backward = "B",
    NotACounter = ""
}
export declare enum InputType {
    Mileage = 0,
    EngineHours = 1
}
export declare enum IconName {
    Cancel = "sap-icon://cancel",
    Pause = "sap-icon://pause",
    Play = "sap-icon://play",
    LockedPerson = "sap-icon://private",
    Employee = "sap-icon://employee",
    Refresh = "sap-icon://refresh",
    Text = "sap-icon://text-align-left",
    BarCode = "sap-icon://bar-code",
    Error = "sap-icon://error",
    Warning = "sap-icon://alert",
    Success = "sap-icon://sys-enter-2",
    Information = "sap-icon://information",
    Inspection = "sap-icon://inspection",
    MessageSuccess = "sap-icon://message-success",
    MessageWarning = "sap-icon://message-warning",
    MessageError = "sap-icon://message-error",
    MessageInfo = "sap-icon://message-information",
    DropDownList = "sap-icon://drop-down-list",
    Cart3 = "sap-icon://cart-3",
    StatusCompleted = "sap-icon://status-completed",
    ShippingStatus = "sap-icon://shipping-status"
}
export declare enum UiValueState {
    Error = "Error",
    Information = "Information",
    None = "None",
    Success = "Success",
    Warning = "Warning"
}
export declare enum CallingApplication {
    Defaut = "MECH_APP"
}
export declare enum TargetUrl {
    VGM = "/sap/bc/ui5_ui5/dbme/sfe_vgm/index.html#"
}
export declare enum StatusSeverity {
    None = 0,
    Success = 1,
    Info = 2,
    Warning = 3,
    Error = 4
}
export declare enum VhcCalcType {
    Ascending = "ASC",
    Descending = "DSC"
}
export declare enum BorType {
    Job = "/DBE/JOB",
    CheckItem = "/DBE/VHC"
}
