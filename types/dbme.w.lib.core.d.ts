declare module "dbme/w/lib/core/library" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";

    export const LogComponent = "DBME";
    export const CreateEntityGroup = "DBME";

    export enum Route {
        _default = "default",
        nestedComponentDefault = "Nested"
    }

    export enum FioriSemanticObject {
        defaultPrefix = "ZDBMESRS_",
        defaultAction = "display"
    }

    export enum DBMEComponent {
        HierarchyAssignment = "HAS",
        ResourcePlanner = "RPL",
        Settings = "STS",
        TodoBasket = "TDO",
        DecisionTree = "TDT",
        WorkshopPlanner = "WPL"
    }

    export enum Uxfc {
        Hidden = 0,
        Readonly = 1,
        Optional = 3,
        Mandatory = 7
    }

    export enum Action {
        Create = "",
        Read = "R",
        Update = "U",
        Delete = "D"
    }

    export enum UnitOfMeasure {
        Hours = "H",
        Seconds = "SEC",
        Mile = "mile",
        Km = "km"
    }

    export enum CalendarIntervalType {
        OneDay = "OneDay"
    }

    export enum IntervalType {
        Absence = "A",
        Demands = "D",
        Holidays = "H",
        Reservation = "R",
        Availability = "V"
    }

    export enum ModelName {
        SAPOData = "SAPOData",
        HierarchyAssignment = "HAS"
    }

    export enum HttpHeaderName {
        timezoneOffset = "dbme-timezone_offset_minutes",
        timezoneName = "dbme-timezone_name",
        DBMEComponent = "dbme-component",
        DBMEMessage = "dbme-message",
        HierarchyId = "dbme-hierarchy-id",
        Data = "dbme-data"
    }

    export enum Entityset {
        App = "CMNAppSet",
        AbsenceType = "CMNAbsenceTypeSet",
        AddressTitle = "CMNAddrTitleSet",
        AllocationInterval = "WPLIntervalSet",
        AllocationIntervalCreate = "WPLIntervalCreateSet",
        AllocationIntervalText = "WPLIntervalTextSet",
        CalendarViews = "CMNCalendarViewSet",
        Country = "CMNCountrySet",
        Demand = "WPLDemandSet",
        DemandCreate = "WPLDemandCreateSet",
        DemandRoles = "WPLDemandDDRolesSet",
        DemandType = "WPLDemandTypeSet",
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
        Region = "CMNCountryRegionSet",
        Resource = "CMNResourceSet",
        ResourceAssignment = "HASAssignmentSet",
        ResourceAvatar = "CMNResourceAvatarSet",
        ResourceStatus = "CMNResourceStatusSet",
        ResourceRole = "CMNResourceRoleSet",
        ResourceType = "CMNResourceTypeSet",
        ReservationType = "CMNReservationTypeSet",
        TimeStep = "CMNTimeStepSet",
        TreeNode = "HASTreeNodeSet",
        TreeNodeCreate = "HASTreeNodeCreateSet",
        TodoAllocationProposal = "TDOAllocationProposalSet",
        TodoDecTreeItem = "TDODecisionTreeItemSet",
        TodoLocation = "TDOLocationSet",
        TodoLocationGroup = "TDOLocationGroupSet",
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
        TodoStatusAction = "TDOStatusActionSet", //readonly
        TodoScreens = "TDOServiceScreenSet",
        TodoServiceSection = "TDOServiceSectionSet",
        TodoServiceItem = "TDOServiceItemSet",
        TodoTimeSlot = "TDOTimeSlotsSet",
        TodoUser = "TDOUserSet",
        TodoWorkItem = "TDOWorkItemSet",
        TodoWorkshop = "TDOWorkshopSet",
        UIAppSettings = "CMNUISettingsSet", //LC based, app. backend configuration synchronousely read in Component.init()
        UserHierarchyAsgn = "CMNHierarchyAsgnSet", //user hierarchy assignment
        VehicleContract = "TDOVehicleContractSet",
        VehicleDeferredJob = "TDOVehicleDeferredJobSet",
        VehicleRecall = "TDOVehicleRecallSet",
        VehicleWarranty = "TDOVehicleWarrantySet",
        WorkingModel = "CMNWorkingModelSet",
        WorkingHours = "CMNWorkingHoursSet"
    }

    export enum EventChannel {
        dbme = "dbme"
    }    

    export enum Event {
        //TDT
        ReloadFilter = "ReloadFilter",
        SetFormData = "SetFormData",
        ListItemSelect = "ListItemSelect",
        ListUpdateFinished = "ListUpdateFinished",
        //HAS
        ResourceAtHierarchyDrop = "ResourceAtHierarchyDrop",
        //RPL/WPL
        AppointmentAtIntervalDrop = "AppointmentAtIntervalDrop",
        //WPL
        DemandAtIntervalDrop = "DemandAtIntervalDrop",
        //Core
        FilterLoaded = "DBMEFilterLoaded"
    }

    export enum Flag {
        yes = "yes",
        no = "no"
    }

    export function getResourceBundle(): ResourceBundle;
    export function getDBMEComponents(): Array<DBMEComponent>;
}

declare module "dbme/w/lib/core/ui/UIComponent" {
    import { default as UICom } from "sap/ui/core/UIComponent";

    export default abstract class UIComponent extends UICom {
        public abstract getDBMEComponent(): string;
        public getCurrentRouteName(): string;
        public setCurrentRouteName(name: string): void;
    }
}

declare module "dbme/w/lib/core/controller/Base" {
    import AbstractBase from "dbme/c/controller/Base";
    import ODataModel from "sap/ui/model/odata/v2/ODataModel";
    import JSONModel from "sap/ui/model/json/JSONModel";
    import Dialog from "sap/m/Dialog";
    import Event from "sap/ui/base/Event";

    export default abstract class Base extends AbstractBase {
        public abstract ODataToJSON(): void;
        public onDialogCancel(oDialog: Dialog, bAllPaths?: boolean): boolean;
        public onPageNavBack(oEvent: Event): void;
        public onPageNavForward(oEvent: Event): void;
        public onFacetFilterReset(oEvent: Event): void;
        public onShowUserSettings(oEvent: Event);
        public getHASModel(): JSONModel;
        public onRootHierarchyAssignmentChange(oEvent: Event): void;
        public _getModel(): ODataModel;
        public _getJSONModel(oData?: any, sModelName?: string): JSONModel;
        public _getKnownFields(sEntityset: string): string[];
        public _ODataToJSON(sRemotePath: string, bForce?: boolean, aFilters?: any[], oTargetModel?: JSONModel): Promise<any>;
        protected _getDialogFormData(oDialog: Dialog, bEnabled: boolean, bVisible: boolean): any;
        protected _validateDialogForm(oDialog: Dialog): boolean;
        protected _loadFiltersFromOData(sPath?: string): Promise<any>[];
        protected _getJSONDataPromises(): Array<Promise<any>>;
        protected _jsonDataLoaded(): Promise<JSONModel>;
        protected _getConfirmDialog(confirm: CallableFunction, aArguments?: any[]): Dialog;
        protected _loadUISettings(): any[] | Promise<any>;        
    }
}