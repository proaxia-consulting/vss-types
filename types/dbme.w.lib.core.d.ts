declare module "dbme/w/lib/core/library" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";

    enum EntitySet {
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
        WorkingModel = "CMNWorkingModelSet",
        WorkingHours = "CMNWorkingHoursSet"
    }

    enum ModelName {
        SAPOData = "SAPOData",
        HierarchyAssignment = "HAS"
    }

    enum DBMEComponent {
        HierarchyAssignment = "HAS",
        ResourcePlanner = "RPL",
        Settings = "STS",
        TodoBasket = "TDO",
        DecisionTree = "TDT",
        WorkshopPlanner = "WPL"
    }

    export default class library {
        public static Entityset: EntitySet;
        public static ModelName: ModelName;
        public static DBMEComponent: DBMEComponent;
        public static getResourceBundle(): ResourceBundle;
    }
}

declare module "dbme/w/lib/core/ui/UIComponent" {
    import { default as UICom } from "sap/ui/core/UIComponent";

    export default class UIComponent extends UICom {
        public static getDBMEComponent(): string;
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
        protected _getJSONModel(oData?: any, sModelName?: string): JSONModel;
        protected _getDialogFormData(oDialog: Dialog, bEnabled: boolean, bVisible: boolean): any;
        protected _validateDialogForm(oDialog: Dialog): boolean;
        protected _loadFiltersFromOData(sPath?: string): Array<Promise<any>>;
        protected _ODataToJSON(sRemotePath: string, bForce?: boolean, aFilters?: Array<any>, oTargetModel?: JSONModel): Promise<any>;
        protected _getJSONDataPromises(): Array<Promise<any>>;
        protected _jsonDataLoaded(): Promise<JSONModel>;
        protected _getConfirmDialog(confirm: CallableFunction, aArguments?: Array<any>): Dialog;
        protected _loadUISettings(): Array<any> | Promise<any>;
        protected _getKnownFields(sEntityset: string): Array<string>;        
    }
}