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
        /**
         * @deprecated in views - use core:require with single formatter
         */
        public static readonly formatter: any;       
        public static readonly type: any;
        public UISettings: Record<string, any>;

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
        public _getConfirmDialog(confirm: CallableFunction, aArguments?: any[]): Dialog;
        protected _getDialogFormData(oDialog: Dialog, bEnabled: boolean, bVisible: boolean): any;
        protected _validateDialogForm(oDialog: Dialog): boolean;
        protected _loadFiltersFromOData(sPath?: string): Promise<any>[];
        protected _getJSONDataPromises(): Array<Promise<any>>;
        protected _jsonDataLoaded(): Promise<JSONModel>;
        protected _loadUISettings(): any[] | Promise<any>;        
    }
}

declare module "dbme/w/lib/core/util/Form" {
    import Control from "sap/ui/core/Control";
    import SmartField from "sap/ui/comp/smartfield/SmartField";

    export type IElementsContainer = Control | Control[];

    export default class Form {
        static getElements(oContainer: IElementsContainer, aElementName?: string | string[], bEnabled?: boolean, bVisible?: boolean): Control[];
        static serializeObject(oContainer: IElementsContainer, bEnabled?: boolean, bVisible?: boolean): Record<string, Control>;
        /**
         * @deprecated get data via bound contexts instead
         */
        static getData(oContainer: IElementsContainer, bEnabled?: boolean, bVisible?: boolean): object;
        static clearValueState(oContainer: IElementsContainer, bText?: boolean): void;
        /**
         * returns invalid fields
         */
        static validate(oContainer: IElementsContainer): Control[];
        static setSmartFieldValue(oField: SmartField, vValue: any): void;
        static smartFieldLoaded(oField: SmartField): Promise<SmartField>;
        /**
         * @deprecated replace with sap.ui.core.Control.getControlsByFieldGroupId() && dbme.w.lib.core.util.Form.smartFieldLoaded()
         */
        static smartFormLoaded(oContainer: IElementsContainer): Promise<SmartField[]>;
    }
}

declare module "dbme/w/lib/core/format/FormatUtils" {
    import { ValueState } from "sap/ui/core/library";

    export function matchingStatusToValueState(sValue: string): ValueState;
    export function parseBoolean(sValue: any): boolean;
    export function SplitCommaToInt(sValue: string): int[];
}

declare module "dbme/w/lib/core/util/DependentFragment" {
    import Controller from "sap/ui/core/mvc/Controller";
    import Control from "sap/ui/core/Control";

    export default class DependentFragment {
        protected _oCtrl: Controller;

        constructor(sViewFragment: string, oCtrl: Controller);
        clear(oSourceControl?: Control): this;
        loadFragment(bReload?: boolean): Promise<Control>;
        load(oSourceControl?: Control): Promise<Control>;
        loaded(oSourceControl?: Control): Promise<Control>;
        _key(oSourceControl?: Control): string;
    }
}

declare module "dbme/w/lib/core/util/RouteQueryFilter" {
    import Event from "sap/ui/base/Event";

    export default class RouteQueryFilter {
        /**
         * side-effects:
         * - fill this._oQueryArgs: Record<string, sap.ui.model.Filter>
         * - fill this._aRouteQueryFilters: sap.ui.model.Filter[]
         * - if this._getFilter(): sap.ui.comp.smartfilterbar.SmartFilterBar|sap.m.FacetFilter exists - propagate query args into filter control
         * 
         * returns query args. that wasn't added into this._oQueryArgs
         */
        public static onRouteMatched(oEvent: Event, sEntitySet: string, aIgnoredQueryArgs?: string[]): Promise<Record<string, any>>;
    }
}

declare module "dbme/w/lib/core/util/Url" {
    import UrlUtils from "dbme/c/UrlUtils";
    import { DBMEComponent } from "dbme/w/lib/core/library";

    export type TAppEntity = {
        UI5_APP: string
    }

    export type TWorkshopPlannerOrder = {
        DISPLAY_WPO_DOCNR: string,
        DISPLAY_CHARDT_FROM: string,
        DISPLAY_CHARDT_TO: string
    };

    export const DBMEComponentUrl: {
        LAUNCHPAD: "/sap/bc/ui5_ui5/dbme/wmf_webui",
        [DBMEComponent.HierarchyAssignment]: "/sap/bc/ui5_ui5/dbme/wmf_has",
        [DBMEComponent.ResourcePlanner]: "/sap/bc/ui5_ui5/dbme/wmf_rpl",
        [DBMEComponent.Settings]: "/sap/bc/ui5_ui5/dbme/wmf_set",
        [DBMEComponent.TodoBasket]: "/sap/bc/ui5_ui5/dbme/wmf_tdo",
        [DBMEComponent.DecisionTree]: "/sap/bc/ui5_ui5/dbme/wmf_tdt",
        [DBMEComponent.WorkshopPlanner]: "/sap/bc/ui5_ui5/dbme/wmf_wpl"
    };

    export default class Url extends UrlUtils {
        public static Url: typeof DBMEComponentUrl;

		/**
		 * @param {?String} [sUrl=window.location.href]
		 */        
        public static isLocal(sUrl?:string);

        public static navToWorkshopPlanner(oArgs: TWorkshopPlannerOrder, aApps: TAppEntity[]);
        public static navToTodoBasketDetails(sOrderNumber: string, aApps: TAppEntity[]);
        public static navBack(bBackCreateBrowerHistory?: boolean);
    }
}