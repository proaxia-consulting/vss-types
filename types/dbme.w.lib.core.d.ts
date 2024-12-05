declare module "dbme/w/lib/core/ui/Enums" {
    export const libraryNamespace: {
        readonly common: "dbme.c";
        readonly srs: "dbme.w.lib.core";
    };
    /**
     * DBM|E SRS component ID's used in backend
     */
    export const DBMEComponent: {
        readonly HierarchyAssignment: "HAS";
        readonly ResourcePlanner: "RPL";
        readonly Settings: "STS";
        readonly TodoBasket: "TDO";
        readonly DecisionTree: "TDT";
        readonly WorkshopPlanner: "WPL";
        readonly Launchpad: "";
    };
    export type DBMEComponentType = (typeof DBMEComponent)[keyof typeof DBMEComponent];
    export const EventChannel: {
        readonly dbme: "dbme";
    };
    export const LogComponent: {
        readonly dbme: "DBME";
    };
    export const Event: {
        readonly ReloadFilter: "ReloadFilter";
        readonly SetFormData: "SetFormData";
        readonly ListItemSelect: "ListItemSelect";
        readonly ListUpdateFinished: "ListUpdateFinished";
        readonly ResourceAtHierarchyDrop: "ResourceAtHierarchyDrop";
        readonly AppointmentAtIntervalDrop: "AppointmentAtIntervalDrop";
        readonly DemandAtIntervalDrop: "DemandAtIntervalDrop";
        readonly FilterLoaded: "DBMEFilterLoaded";
    };
    export const Route: {
        readonly _default: "default";
        readonly nestedComponentDefault: "Nested";
    };
    export const FioriSemanticObject: {
        readonly defaultPrefix: "dbme_srs_";
        readonly defaultAction: "display";
    };
}
declare module "dbme/w/lib/core/i18n/Translate" {
    import type ResourceBundle from "sap/base/i18n/ResourceBundle";
    export function getBundle(): ResourceBundle | undefined;
    export function setBundle(b: ResourceBundle): void;
    export function __(key: string, args?: unknown[]): string;
    const Translate: typeof __;
    /**
     * @namespace dbme.w.lib.core.i18n
     * @global
     */
    export default Translate;
}
declare module "dbme/w/lib/core/library" {
    /**
     * @deprecated Use dbme.w.lib.core.Enums.libraryNamespace instead!
     */
    export const libraryNamespace: "dbme.w.lib.core";
    const thisLib: {
        [key: string]: unknown;
    };
    /**
     * @deprecated Use enum from dbme.w.lib.core.ui.Enums instead!
     */
    export enum Route {
        _default = "default",
        nestedComponentDefault = "Nested"
    }
    /**
     * @deprecated Use enum from dbme.w.lib.core.ui.Enums instead!
     */
    export enum FioriSemanticObject {
        defaultPrefix = "dbme_srs_",
        defaultAction = "display"
    }
    /**
     * DBM|E SRS components - back-end indicators; Uppercase chars only.
     *
     * @deprecated Use enum from dbme.w.lib.core.ui.Enums instead!
     */
    export enum DBMEComponent {
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
    export enum Uxfc {
        Hidden = 0,
        Readonly = 1,
        Optional = 3,
        Mandatory = 7
    }
    /**
     * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
     */
    export enum Action {
        Create = "",
        Read = "R",
        Update = "U",
        Delete = "D"
    }
    /**
     * @deprecated Use enum from the dbme.w.lib.core.Enums instead!
     */
    export enum UnitOfMeasure {
        Hours = "H",
        Seconds = "SEC",
        Mile = "mile",
        Km = "km"
    }
    /**
     * @deprecated Use enum from the dbme.w.lib.core.calendar.Enums instead!
     */
    export enum CalendarIntervalType {
        OneDay = "OneDay"
    }
    /**
     * @deprecated Use enum from the dbme.w.lib.core.calendar.Enums instead!
     */
    export enum IntervalType {
        Absence = "A",
        RecurringAbsence = "F",
        Break = "B",
        Demands = "D",
        Holidays = "H",
        Reservation = "R",
        RecurringReservation = "E",
        Availability = "V",
        TimeClocking = "T"
    }
    /**
     * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
     */
    export enum ModelName {
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
        /**
         * @deprecated Use unnamed model instead!
         */
        SAPOData = "SAPOData"
    }
    /**
     * @deprecated Use enum from dbme.w.lib.core.model.Enums instead!
     */
    export enum HttpHeaderName {
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
    export enum Entityset {
        App = "CMNAppSet",
        AbsenceType = "CMNAbsenceTypeSet",
        AddressTitle = "CMNAddrTitleSet",
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
        PlannerSortVariant = "WPLSortVariantSet",
        RecurringType = "CMNRecurringTypeSet",
        Region = "CMNCountryRegionSet",
        Resource = "CMNResourceSet",
        ResourceAssignment = "HASAssignmentSet",
        ResourceAvatar = "CMNResourceAvatarSet",
        ResourceStatus = "CMNResourceStatusSet",
        ResourceRole = "CMNResourceRoleSet",
        ResourceType = "CMNResourceTypeSet",
        ReservationType = "CMNReservationTypeSet",
        TeamMembers = "HASTeamMembersSet",
        TimeStep = "CMNTimeStepSet",
        TreeNode = "HASTreeNodeSet",
        TreeNodeCreate = "HASTreeNodeCreateSet",
        TodoAllocationProposal = "TDOAllocationProposalSet",
        TodoBusinessOrderUserStatus = "TDOBusinessOrderUserStatusSet",
        TodoDecTreeItem = "TDODecisionTreeItemSet",
        TodoLocation = "TDOLocationSet",
        TodoLocationGroup = "TDOLocationGroupSet",
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
        UIAppSettings = "CMNUISettingsSet",//LC based, app. backend configuration synchronousely read in Component.init()
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
    export enum EventChannel {
        dbme = "dbme"
    }
    /**
     * Component events
     * @deprecated Use enum from the dbme.w.lib.core.ui.Enums instead!
     */
    export enum Event {
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
    export enum Flag {
        yes = "yes",
        no = "no"
    }
    /**
     * @deprecated Use enum from the dbme.w.lib.core.calendar.Enums instead!
     */
    export enum PlanningMode {
        Manual = "M",
        Rescheduling = "R"
    }
    /**
     * @name dbme.w.lib.core.library
     * @global
     */
    export default thisLib;
}
declare module "dbme/w/lib/core/model/Enums" {
    export const ModelName: {
        readonly Avatar: "avatar";
        readonly Calendar: "cal";
        readonly Device: "device";
        readonly HierarchyAssignment: "HAS";
        readonly Local: "local";
        readonly i18n: "i18n";
        readonly TestMode: "TestMode";
        readonly Translate: "i18n";
        readonly ui: "ui";
        readonly internal: "internal";
        /** @deprecated Use unnamed model instead! */
        readonly SAPOData: "SAPOData";
    };
    export const HttpHeaderName: {
        readonly timezoneOffset: "dbme-timezone_offset_minutes";
        readonly timezoneName: "dbme-timezone_name";
        readonly DBMEComponent: "dbme-component";
        readonly DBMEMessage: "dbme-message";
        readonly HierarchyId: "dbme-hierarchy-id";
        readonly Data: "dbme-data";
    };
    export const EntityGroup: {
        readonly Create: "DBME";
    };
    export const EntitySet: {
        readonly App: "CMNAppSet";
        readonly AbsenceType: "CMNAbsenceTypeSet";
        readonly AddressTitle: "CMNAddrTitleSet";
        readonly AllocationFieldFilter: "WPLAllocationFieldFilterSet";
        readonly AllocationInterval: "WPLIntervalSet";
        readonly AllocationIntervalCreate: "WPLIntervalCreateSet";
        readonly AllocationIntervalText: "WPLIntervalTextSet";
        readonly CalendarViews: "CMNCalendarViewSet";
        readonly Country: "CMNCountrySet";
        readonly Demand: "WPLDemandSet";
        readonly DemandCreate: "WPLDemandCreateSet";
        readonly DemandRoles: "WPLDemandDDRolesSet";
        readonly DemandType: "WPLDemandTypeSet";
        readonly DemandTypeCommon: "CMNDemandTypeSet";
        readonly UIFilters: "CMNFiltersSet";
        readonly HierarchyPath: "HASNodePathSet";
        readonly Interval: "RPLIntervalSet";
        readonly IntervalCreate: "RPLIntervalCreateSet";
        readonly IntervalType: "CMNIntervalTypeSet";
        readonly MakeCode: "CMNMakeSet";
        readonly MileageUom: "CMNMileageUomSet";
        readonly MimeTypes: "CMNMimeTypeSet";
        readonly ModelCode: "CMNModelSet";
        readonly OrderType: "CMNOrderTypeSet";
        readonly PlanningMode: "WPLPlanningModeSet";
        readonly PlannerSortVariant: "WPLSortVariantSet";
        readonly Region: "CMNCountryRegionSet";
        readonly Resource: "CMNResourceSet";
        readonly ResourceAssignment: "HASAssignmentSet";
        readonly ResourceAvatar: "CMNResourceAvatarSet";
        readonly ResourceStatus: "CMNResourceStatusSet";
        readonly ResourceRole: "CMNResourceRoleSet";
        readonly ResourceType: "CMNResourceTypeSet";
        readonly ReservationType: "CMNReservationTypeSet";
        readonly TeamMembers: "HASTeamMembersSet";
        readonly TimeStep: "CMNTimeStepSet";
        readonly TreeNode: "HASTreeNodeSet";
        readonly TreeNodeCreate: "HASTreeNodeCreateSet";
        readonly TodoAllocationProposal: "TDOAllocationProposalSet";
        readonly TodoBusinessOrderUserStatus: "TDOBusinessOrderUserStatusSet";
        readonly TodoDecTreeItem: "TDODecisionTreeItemSet";
        readonly TodoLocation: "TDOLocationSet";
        readonly TodoLocationGroup: "TDOLocationGroupSet";
        readonly TodoMeasuringPoint: "TDOMeasuringPointSet";
        readonly TodoOrder: "TDOOrderSet";
        readonly TodoOrderList: "TDOOrderListSet";
        readonly TodoOrderAction: "TDOActionSet";
        readonly TodoOrderAgreement: "TDOOrderAgreementSet";
        readonly TodoOrderAttachment: "TDOOrderAttachmentSet";
        readonly TodoOrderCommChannel: "TDOCommChannel";
        readonly TodoOrderDemand: "TDODemandSet";
        readonly TodoOrderFields: "TDOScreenFieldSet";
        readonly TodoOrderHistory: "TDOOrderHistorySet";
        readonly TodoOrderNote: "TDOOrderNoteSet";
        readonly TodoOrderParameter: "TDOOrderParameterSet";
        readonly TodoVehiCust: "TDOVehicleCustomerSet";
        readonly TodoVehiCustSH: "TDOVehicleCustomerMDSet";
        readonly TodoResource: "TDOResourceSet";
        readonly TodoRole: "TDORoleSet";
        readonly TodoStatus: "TDOStatusSet";
        readonly TodoStatusAction: "TDOStatusActionSet";
        readonly TodoScreens: "TDOServiceScreenSet";
        readonly TodoServiceSection: "TDOServiceSectionSet";
        readonly TodoServiceSectionField: "TDOServiceSectionFieldSet";
        readonly TodoServiceItem: "TDOServiceItemSet";
        readonly TodoTimeSlot: "TDOTimeSlotsSet";
        readonly TodoUser: "TDOUserSet";
        readonly TodoWorkItem: "TDOWorkItemSet";
        readonly TodoWorkshop: "TDOWorkshopSet";
        readonly UIAppSettings: "CMNUISettingsSet";
        readonly UserHierarchyAsgn: "CMNHierarchyAsgnSet";
        readonly VehicleContract: "TDOVehicleContractSet";
        readonly VehicleDeferredJob: "TDOVehicleDeferredJobSet";
        readonly VehicleRecall: "TDOVehicleRecallSet";
        readonly VehicleServiceHistory: "TDOVehicleServiceHistorySet";
        readonly VehicleWarranty: "TDOVehicleWarrantySet";
        readonly WorkingModel: "CMNWorkingModelSet";
        readonly WorkingHours: "CMNWorkingHoursSet";
    };
    export type EntitySetType = (typeof EntitySet)[keyof typeof EntitySet];
    export const Uxfc: {
        readonly Hidden: 0;
        readonly Readonly: 1;
        readonly Optional: 3;
        readonly Mandatory: 7;
    };
    export type UxfcType = (typeof Uxfc)[keyof typeof Uxfc];
    export const AnnotationFieldControlType: {
        readonly Hidden: "com.sap.vocabularies.Common.v1.FieldControlType/Hidden";
        readonly Inapplicable: "com.sap.vocabularies.Common.v1.FieldControlType/Inapplicable";
        readonly ReadOnly: "com.sap.vocabularies.Common.v1.FieldControlType/ReadOnly";
        readonly Mandatory: "com.sap.vocabularies.Common.v1.FieldControlType/Mandatory";
    };
    export type AnnotationFieldControlTypeType = (typeof AnnotationFieldControlType)[keyof typeof AnnotationFieldControlType];
    export const Action: {
        readonly Create: "";
        readonly Read: "R";
        readonly Update: "U";
        readonly Delete: "D";
    };
    export type ActionType = (typeof Action)[keyof typeof Action];
    export const Flag: {
        readonly yes: "yes";
        readonly no: "no";
    };
    export const UnitOfMeasure: {
        readonly Hours: "H";
        readonly Seconds: "SEC";
        readonly Mile: "mile";
        readonly Km: "km";
    };
}
declare module "dbme/w/lib/core/calendar/Enums" {
    export { EntitySet, type EntitySetType, ModelName, Uxfc, type UxfcType } from "dbme/w/lib/core/model/Enums";
    export const PlanningMode: {
        readonly Manual: "M";
        readonly Rescheduling: "R";
    };
    export type PlanningModeType = (typeof PlanningMode)[keyof typeof PlanningMode];
    export const CalendarIntervalType: {
        readonly OneDay: "OneDay";
    };
    export const IntervalType: {
        readonly Absence: "A";
        readonly RecurringAbsence: "F";
        readonly Break: "B";
        readonly Demands: "D";
        readonly Holidays: "H";
        readonly Reservation: "R";
        readonly RecurringReservation: "E";
        readonly Availability: "V";
        readonly TimeClocking: "T";
    };
    export type IntervalTypeType = (typeof IntervalType)[keyof typeof IntervalType];
}
declare module "dbme/w/lib/core/types/IEntity" {
    import type { ActionType, UxfcType } from "dbme/w/lib/core/model/Enums";
    import type { IntervalTypeType, PlanningModeType } from "dbme/w/lib/core/calendar/Enums";
    import type { CSSSize } from "sap/ui/core/library";
    import type UI5Date from "sap/ui/core/date/UI5Date";
    export type TUnknownEntity = {
        [key: string]: unknown;
    };
    export type HierarchyAssignmentEntity = {
        UNAME: string;
        SEQNO: number;
        HIERARCHY_ID: string;
        HIERARCHY_NAME: string;
        HIERARCHY_DEFAULT: boolean;
        WEEK_FIRST_DAY: number;
        DEF_MILEAGE_UOM: string;
    };
    /**
     * @deprecated Use HierarchyAssignmentEntity instead!
     */
    export type UserHierarchyAsgnEntity = HierarchyAssignmentEntity;
    export type UIAppSettingsEntity = {
        SETTING_IS_GROUP: boolean;
        SETTING_TYPE: string;
        SETTING_TECH_NAME: string;
        SETTING_VALUE: string;
        SETTING_FLAG: boolean;
    };
    export type ResourceEntity = {
        RESOURCE_ID: string;
        RESOURCE_TYPE: string;
        DISPLAY_WPO_DOCNR?: string;
        DISPLAY_CHARDT_FROM?: string;
        DISPLAY_CHARDT_TO?: string;
        DESCR1?: string;
        AvatarNav?: ResourceAvatarEntity;
    };
    export type ResourceAvatarEntity = {
        RESOURCE_ID: string;
        AVATAR_URL: string;
        FILENAME: string;
        MIMETYPE: string;
        CONTENT_BASE64?: string;
    };
    export type AppEntity = {
        ID: string;
        UI5_APP: string;
        URL: string;
        ICON: string;
        TITLE: string;
        DESCR: string;
        ACTIVE: boolean;
        MENU: boolean;
        NEW_TAB: boolean;
    };
    export type AbsenceTypeEntity = {
        ABSENCE_TYPE: string;
        DESCR1: string;
        ALL_DAY: boolean;
    };
    export type IntervalTypeEntity = {
        UI_APPLICATION: string;
        INTERVAL_TYPE: string;
        EDITABLE: boolean;
        DESCR1: string;
    };
    export type ReservationTypeEntity = {
        RESERVATION_TYPE: string;
        DESCR1: string;
        ALL_DAY: boolean;
        AC_PROC: number;
    };
    export type ResourceRoleEntity = {
        RESOURCE_ROLE: string;
        RESOURCE_TYPE: string;
        DESCR1: string;
        ICON: string;
        UI5_ICON: string;
        DEF_VALUE: boolean;
        UXFC_AC_PROC: UxfcType;
    };
    export type ResourceStatusEntity = {
        RESOURCE_ID: string;
        AVB_DATA_OUTDATED: boolean;
    };
    export type IntervalEntity = {
        INTERVAL_ID?: string;
        INTERVAL_TYPE: IntervalTypeType;
        MODEL_ID?: string;
        AC_PROC?: number;
        ABSENCE_TYPE: string;
        RESERVATION_TYPE: string;
        ACTION: ActionType;
        PLANNING_MODE: PlanningModeType;
        REQAL_CHARDT_FROM?: string;
        REQAL_CHARDT_TO?: string;
        VALID_FROM_TS: UI5Date | Date;
        VALID_TO_TS: UI5Date | Date;
        VALID_FROM_DATE?: UI5Date | Date;
        VALID_TO_DATE?: UI5Date | Date;
        CHARDT_FROM?: string;
        CHARDT_TO?: string;
        DEMAND_ID?: string;
        DEMAND_TYPE?: string;
        RESOURCE_ID: string;
        NEW_RESOURCE_ID?: string;
        RESOURCE_TYPE?: string;
        RESOURCE_ROLE?: string;
        RESOURCE_GROUP?: boolean;
        ORDER_TYPE?: string;
        WPO_DOCNR?: string;
        TITLE?: string;
        TEXT: string;
        TEXT_HEADER: string;
        TEXT_SHORT: string;
        DESCR_LTEXT?: string;
        TOOLTIP: string;
        UI5_EDITABLE: boolean;
        TIME_START?: unknown;
        TIME_END?: unknown;
        RECURRING_START?: UI5Date | Date;
        RECURRING_END?: UI5Date | Date;
        RECURRING_TYPE?: string;
        RECURRING_INTERVAL?: number;
        RECURRING_DAYS_X: string;
        RECURRING_MONTHS_X: string;
        RECURRING_DAY_OF?: number;
        RECURRING_UXFC?: number;
        RECURRING_SINGLE?: boolean;
    };
    export type CalendarViewEntity = {
        CAL_VIEW: string;
        DEFAULT_VIEW: boolean;
    };
    export type DemandEntity = {
        DEMAND_ID: string;
        WPO_DOCNR: string;
        ALLOC_DATE_FROM: Date;
        ALLOC_DATE_TO: Date;
        DURATION_WORKV?: number;
        DURATION_WORKU?: string;
        RESOURCE_ID_PREF?: string;
        CANCELLED?: boolean;
        LBRVAL_ID?: string;
        LBRVAL_OR?: string;
        PARAM_ID?: string;
        REQAL_DATE_FROM?: Date;
        REQAL_DATE_TO?: Date;
        REQAL_CHARDT_FROM?: string;
        REQAL_CHARDT_TO?: string;
        UXFC_DEMAND_DESC?: number;
        UXFC_DEMAND_TYPE?: number;
        UXFC?: number;
        UXFC_REQAL_DATE?: number;
        UXFC_DURATION?: number;
        REMARKS_TEXT?: string;
    };
    export type ScreenEntity = {
        SCRNUM: string;
        SCRNUM_DESC: string;
        UI_ICON: string;
        UI_COLOR: string;
        COUNTABLE: boolean;
        COUNT_VALUE: number;
        ORDER_TYPE: string;
        FOR_EDIT?: boolean;
        ENABLED: boolean;
        SectionNav?: ScreenSectionEntity[];
    };
    export type ScreenSectionEntity = {
        SECTION_NO?: string;
        SECTION_TYPE?: string;
        SCRNUM?: string;
        SECTION_HEIGHT?: CSSSize;
        SECTION_URL?: string;
        SECTION_NAME?: string;
        FieldsNav?: ScreenFieldEntity[];
    };
    export type ScreenFieldEntity = {
        SCREEN_AREA: string;
        FIELD_NAME: string;
        FIELD_NAME_DESC: string;
        FIELD_STATUS: string;
        CAPPL: string;
        ORDER_TYPE: string;
    };
    export type TimeStepEntity = {
        HIERARCHY_ID: string;
        VISIT_TIME_RES: number;
    };
    export type WorkingHoursEntity = {
        HIERARCHY_ID: string;
        VISIT_START: Date;
    };
    export type AllocationFieldFilterEntity = {
        DEMAND_TYPE: string;
        RESOURCE_ROLE: string;
        TO_DEMAND_TYPE: string;
        TO_RESOURCE_ROLE: string;
    };
}
declare module "dbme/w/lib/core/SmartReport/model/Enums" {
    export enum ModelName {
        owner = "owner",
        ui = "ui"
    }
    export enum ControlId {
        table = "idSmartReportTable",
        filter = "idSmartReportFilter"
    }
}
declare module "dbme/w/lib/core/SmartReport/SmartReportComponent" {
    import UIComponent, { $UIComponentSettings } from "sap/ui/core/UIComponent";
    import { EntityPropertiesService, IEntitySetProvider } from "dbme/c/service/EntityPropertiesServiceFactory";
    import type { ScreenSectionEntity } from "dbme/w/lib/core/types/IEntity";
    import type Context from "sap/ui/model/Context";
    export type TComponentData = {
        section?: ScreenSectionEntity;
        orderContext?: Context;
    };
    export type TPropagatedProperties = {
        oBindingContexts: Record<string, Context>;
    };
    /**
     * @namespace dbme.w.lib.core.SmartReport
     */
    export default abstract class SmartReportComponent extends UIComponent implements IEntitySetProvider {
        static metadata: Record<string, unknown>;
        oPropagatedProperties: TPropagatedProperties;
        getComponentData: () => TComponentData;
        /**
         * part of IEntitySetProvider interface; required for EntityPropertiesService
         */
        abstract getEntitySet(): string[];
        constructor(sId: string, mSettings: $UIComponentSettings);
        init(): void;
        getEntityPropertiesService(): Promise<EntityPropertiesService>;
    }
}
declare module "dbme/w/lib/core/util/ConsoleLogger" {
    export function debug(message: string, details?: unknown): void;
    export function error(message: string, exception?: Error): void;
    export function info(message: string, details?: unknown): void;
    export function warning(message: string, exception?: Error): void;
}
declare module "dbme/w/lib/core/SmartReport/controller/SmartReportController" {
    import type Page from "sap/m/Page";
    import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
    import Controller from "sap/ui/core/mvc/Controller";
    import type Filter from "sap/ui/model/Filter";
    import JSONModel from "sap/ui/model/json/JSONModel";
    import type Context from "sap/ui/model/Context";
    import type AppComponent from "dbme/w/lib/core/SmartReport/SmartReportComponent";
    import type { TComponentData } from "dbme/w/lib/core/SmartReport/SmartReportComponent";
    import type View from "sap/ui/core/mvc/View";
    /**
     * @namespace dbme.w.lib.core.SmartReport.controller
     * @controller
     */
    export default abstract class SmartReportController extends Controller {
        getView: () => View;
        aKnownProps: string[];
        protected oOwnerData?: TComponentData;
        protected sOrderPath?: string;
        protected uiModel: JSONModel;
        getOwnerComponent: () => AppComponent;
        onInit(): void;
        table(): SmartTable;
        getOwnerFilters(): Filter[];
        protected getSectionContext(sModel?: string): Context;
        protected page(): Page;
        protected loadFilterBar(): void;
    }
}
declare module "dbme/w/lib/core/SmartReport/eh/SmartReportTableHandler" {
    import type Event from "sap/ui/base/Event";
    import type { Table$RowSelectionChangeEvent } from "sap/ui/table/Table";
    import type IController from "dbme/w/lib/core/SmartReport/controller/SmartReportController";
    const SmartReportTableHandler: {
        onBeforeRebind(this: IController, event: Event): void;
        onRefresh(this: IController, event: Event): void;
        onSelectionChange(this: IController, event: Table$RowSelectionChangeEvent): void;
    };
    /**
     * @namespace dbme.w.lib.core.SmartReport.eh
     * @global
     */
    export default SmartReportTableHandler;
}
declare module "dbme/w/lib/core/types/ICalendar" {
    import type PlanningCalendar from "sap/m/PlanningCalendar";
    import type PlanningCalendarRow from "sap/m/PlanningCalendarRow";
    import type Event from "sap/ui/base/Event";
    import type CalendarAppointment from "dbme/w/lib/core/control/CalendarAppointment";
    export type DateBoundariesType = {
        startDate: Date;
        endDate: Date;
    };
    export type DateBoundariesObjType = {
        oStartDate: Date;
        oEndDate: Date;
    };
    export type DateBoundariesStringType = {
        sStartDate: string;
        sEndDate: string;
    };
    /**
     * @deprecated use DateBoundariesType
     */
    export type TDateBoundariesSimple = {
        startDate?: Date;
        endDate?: Date;
    };
    export type TDateBoundaries = DateBoundariesObjType & DateBoundariesStringType;
    export interface IPlanningCalendar extends PlanningCalendar {
        getAppointments(): CalendarAppointment[];
        getDateBoundaries(): TDateBoundaries;
        getIntervalPeriod(): number;
        getSelectedAppointments(): CalendarAppointment[];
        getStartDate(): Date;
        getStartDateBySelectedView(): Date;
        getMaxDate(): Date;
        setStartDate(date: Date): this;
        onAppointmentContextMenu(appointment: CalendarAppointment, event: Event): void;
        onAppointmentDblClick(appointment: CalendarAppointment, event: Event): void;
        rowsLoaded(): Promise<PlanningCalendarRow[]>;
    }
}
declare module "dbme/w/lib/core/control/CalendarAppointment" {
    import Event from "sap/ui/base/Event";
    import BaseControl from "sap/ui/unified/CalendarAppointment";
    /**
     * @namespace dbme.w.lib.core.control
     */
    export default class CalendarAppointment extends BaseControl {
        oncontextmenu(oEvent: Event): void;
        ondblclick(oEvent: Event): void;
    }
}
declare module "dbme/w/lib/core/control/PlanningCalendarRow" {
    import BaseControl from "sap/m/PlanningCalendarRow";
    /**
     * @namespace dbme.w.lib.core.control
     */
    export default class PlanningCalendarRow extends BaseControl {
        static metadata: {
            events: {
                controlDrop: {
                    parameters: {
                        /**
                         * The dragged control
                         */
                        dragControl: {
                            type: string;
                        };
                        /**
                         * The drop target
                         */
                        calendarRow: {
                            type: string;
                        };
                        /**
                         * Start date of the drop target, as a JavaScript date object.
                         */
                        startDate: {
                            type: string;
                        };
                        /**
                         * End date of the drop target, as a JavaScript date object.
                         */
                        endDate: {
                            type: string;
                        };
                    };
                };
                controlDragEnter: {
                    parameters: {
                        /**
                         * The dragged control
                         */
                        dragControl: {
                            type: string;
                        };
                        /**
                         * The drop target
                         */
                        calendarRow: {
                            type: string;
                        };
                        /**
                         * Start date of the drop target, as a JavaScript date object.
                         */
                        startDate: {
                            type: string;
                        };
                        /**
                         * End date of the drop target, as a JavaScript date object.
                         */
                        endDate: {
                            type: string;
                        };
                    };
                };
            };
            aggregations: {
                appointments: {
                    type: string;
                    multiple: boolean;
                    singularName: string;
                    dnd: {
                        draggable: boolean;
                    };
                };
            };
        };
        fireControlDrop: (params: object) => void;
        fireControlDragEnter: (params: object) => void;
    }
}
declare module "dbme/w/lib/core/calendar/CalendarUtils" {
    import type { DateBoundariesObjType, DateBoundariesType } from "dbme/w/lib/core/types/ICalendar";
    /**
     * @namespace dbme.w.lib.core.calendar
     */
    const CalendarUtils: {
        getLocalTimezoneName(): string | undefined;
        getLocalTimezoneOffset(): number;
        setFirstDayOfWeek(sValue: string): void;
        getFirstDayOfWeek(): number;
        getWeekDays(): string[];
        getMonths(): string[];
        adjustDateYmd(oDate: Date, oBaseDate?: Date): Date;
        adjustYmd(oDate: DateBoundariesType, oBaseDate: DateBoundariesObjType): DateBoundariesType;
        getMaxDate(): Date;
    };
    /**
     * @global
     */
    export default CalendarUtils;
}
declare module "dbme/w/lib/core/control/PlanningCalendar" {
    import type CalendarAppointment from "dbme/w/lib/core/control/CalendarAppointment";
    import type PlanningCalendarRow from "dbme/w/lib/core/control/PlanningCalendarRow";
    import BaseControl from "sap/m/PlanningCalendar";
    import type { IContextMenu } from "sap/ui/core/library";
    import type Event from "sap/ui/base/Event";
    import { CalendarIntervalType as UCalendarIntervalType } from "sap/ui/unified/library";
    import type Table from "sap/m/Table";
    import type Toolbar from "sap/m/Toolbar";
    import type UI5Element from "sap/ui/core/Element";
    import type PlanningCalendarView from "sap/m/PlanningCalendarView";
    import type StandardListItem from "sap/m/StandardListItem";
    import type { IPlanningCalendar, TDateBoundaries } from "dbme/w/lib/core/types/ICalendar";
    import PlanningCalendarRenderer from "sap/m/PlanningCalendarRenderer";
    import jQuery from "sap/ui/thirdparty/jquery";
    import type Menu from "sap/ui/unified/Menu";
    enum CalIntervalType {
        OneMonth = "OneMonth",
        Week = "Week"
    }
    type CalendarIntervalType = UCalendarIntervalType | CalIntervalType;
    interface ITimeline extends UI5Element {
        getCells(): UI5Element[];
        getIntervalType(): CalendarIntervalType;
        getStartDate(): Date;
        getAggregation(aggregation: string): UI5Element[];
    }
    interface IPlanningCalendarRowHeader extends StandardListItem {
        _convertViewSwitchToSelect(): void;
    }
    type TRowListItemCells = [IPlanningCalendarRowHeader, ITimeline];
    interface IPlanningCalendarRowListItem extends StandardListItem {
        getCells(): TRowListItemCells;
        getTimeline(): ITimeline;
        getHeader(): IPlanningCalendarRowHeader;
    }
    export type PlanningCalendar$HeaderDblClickEventParams = {
        date: Date;
    };
    export type PlanningCalendar$HeaderDblClickEvent = Event<PlanningCalendar$HeaderDblClickEventParams, IPlanningCalendarRowHeader>;
    export type PlanningCalendar$AppointmentDblClickEventParams = {
        appointment: CalendarAppointment;
    };
    export type PlanningCalendar$AppointmentDblClickEvent = Event<PlanningCalendar$AppointmentDblClickEventParams, PlanningCalendar>;
    export type PlanningCalendar$BeforeOpenContextMenuParams = {
        menu: Menu;
        appointment: CalendarAppointment;
    };
    export type PlanningCalendar$BeforeOpenContextMenuEvent = Event<PlanningCalendar$BeforeOpenContextMenuParams, PlanningCalendar>;
    /**
     * @namespace dbme.w.lib.core.control
     */
    export default class PlanningCalendar extends BaseControl implements IPlanningCalendar {
        protected _oInfoToolbar: Toolbar;
        static readonly renderer: typeof PlanningCalendarRenderer;
        static readonly metadata: {
            properties: {
                /**
                 * Override sap.m.PlanningCalendar's defaultValue
                 */
                maxDate: {
                    type: string;
                    group: string;
                    defaultValue: Date;
                };
            };
            aggregations: {
                /**
                 * Rows of the <code>PlanningCalendar</code>.
                 */
                rows: {
                    type: string;
                    multiple: boolean;
                    singularName: string;
                };
                appointmentContextMenu: {
                    type: string;
                    multiple: boolean;
                };
            };
            events: {
                headerDblClick: {
                    parameters: {
                        date: {
                            type: string;
                        };
                    };
                };
                beforeOpenAppointmentContextMenu: {
                    parameters: {
                        appointment: {
                            type: string;
                        };
                        menu: {
                            type: string;
                        };
                    };
                };
                appointmentDblClick: {
                    parameters: {
                        appointment: {
                            type: string;
                        };
                    };
                };
            };
        };
        getAppointmentContextMenu: () => IContextMenu;
        getMaxDate: () => Date;
        fireBeforeOpenAppointmentContextMenu: (params: object) => void;
        fireAppointmentDblClick: (params: object) => void;
        fireHeaderDblClick: (params: PlanningCalendar$HeaderDblClickEventParams) => void;
        protected _getView: (key: string) => PlanningCalendarView;
        protected _getHeader: () => IPlanningCalendarRowHeader;
        protected _getIntervals: (view: PlanningCalendarView) => number;
        setAppointmentContextMenu(oContextMenu: IContextMenu): this;
        destroyAppointmentContextMenu(): this;
        /**
         * Called by CalendarAppointment
         */
        onAppointmentContextMenu(oAppointment: CalendarAppointment, oEvent: Event): void;
        onAppointmentDblClick(oAppointment: CalendarAppointment, oEvent: Event): void;
        onBeforeRendering(event: jQuery.Event): void;
        init(): void;
        /**
         * Override standard method
         */
        protected _createPlanningCalendarListItem(oRow: PlanningCalendarRow): IPlanningCalendarRowListItem;
        protected _enableControlDrop(oRow: PlanningCalendarRow, oListItem: IPlanningCalendarRowListItem): void;
        protected _getIntervalPlaceholderDateBoundaries(oIntervalPlaceholder: CalendarAppointment): {
            startDate: Date;
            endDate: Date;
        };
        protected _addControlDropInfo(oTargetRow: PlanningCalendarRow, oTargetTimeline: ITimeline, sGroupName: string): void;
        getInternalTable(): Table;
        rowsLoaded(): Promise<PlanningCalendarRow[]>;
        getSelectedView(): PlanningCalendarView;
        getShowSubIntervals(): boolean;
        getIntervalPeriod(): number;
        getDateBoundaries(): TDateBoundaries;
        getStartDateBySelectedView(): Date;
        getSelectedAppointments(): CalendarAppointment[];
        getAppointments(): CalendarAppointment[];
        getStartDate(): Date;
    }
}
declare module "dbme/w/lib/core/service/GlobalSettingsServiceFactory" {
    import ServiceFactory from "sap/ui/core/service/ServiceFactory";
    import Service from "sap/ui/core/service/Service";
    import ServiceContext from "sap/ui/core/service/ServiceContext";
    import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
    import JSONModel from "sap/ui/model/json/JSONModel";
    type TServiceSettings = void;
    export class GlobalSettingsService extends Service<TServiceSettings> {
        private _component;
        private _hierarchyAssignmentModel;
        private static mComponentSettings;
        init(): void;
        getInterface(): unknown;
        getHierarchyAssignmentModel(): JSONModel;
        getHierarchyAssignment(): HierarchyAssignmentEntity | undefined;
        setHierarchyAssignment(assignmentData: HierarchyAssignmentEntity, refreshData?: boolean): void;
        private _initComponentContext;
        private _loadFromBackend;
        private _defaultModel;
        private _loadHierarchyAssignment;
    }
    /**
     * @namespace dbme.w.lib.core.service
     */
    export default class GlobalSettingsServiceFactory extends ServiceFactory<TServiceSettings> {
        createInstance(context: ServiceContext<TServiceSettings>): Promise<GlobalSettingsService>;
    }
}
declare module "dbme/w/lib/core/types/IComponent" {
    import type UIComponent from "sap/ui/core/UIComponent";
    import type { DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
    import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
    import type JSONModel from "sap/ui/model/json/JSONModel";
    import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
    import type { GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
    export type $UISettingsKey = {
        [key: string]: string | undefined;
        PlanningMode?: string;
    };
    export interface IDBMEComponentBase extends UIComponent {
        getDBMEComponent(): DBMEComponentType;
        getDefaultModel(): ODataModel;
        getGlobalSettingsService(): Promise<GlobalSettingsService>;
    }
    export interface IDBMEComponent extends IDBMEComponentBase {
        UISettingsKey: $UISettingsKey;
        /**
         * @deprecated Use (await this.getGlobalSettingsService()).getHierarchyAssignmentModel() instead!
         */
        getHASModel(): JSONModel;
        /**
         * @deprecated Use (await this.getGlobalSettingsService()).setRootHierarchyAssignment(...) instead!
         */
        setRootHierarchyAssignment(oAssignmentData: HierarchyAssignmentEntity, bRefreshData?: boolean): void;
    }
}
declare module "dbme/w/lib/core/calendar/IntervalHelper" {
    import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
    import { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
    /**
     * @namespace dbme.w.lib.core.calendar
     * @nonui5
     * @global
     */
    export default class IntervalHelper {
        oCtrl: IModelAwareController;
        private static _instance;
        private oData;
        constructor(oCtrl: IModelAwareController);
        isAllDay(oIntervalData: IntervalEntity): boolean;
        setData(): Promise<this>;
    }
}
declare module "dbme/w/lib/core/calendar/model/SaveDataCommand" {
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
    import type { TResponseSuccess } from "dbme/c/util/handleReturn";
    import type { TMessage } from "dbme/c/Log";
    export type TResult = {
        entity: object;
        response: TResponseSuccess;
        message: TMessage;
    };
    /**
     * @namespace dbme.w.lib.core.calendar.model
     * @nonui5
     */
    export default class SaveDataCommand {
        oCtrl: ICalendarController;
        private oModel;
        private oIntervalHelper;
        private sEntitySetCreate;
        constructor(oCtrl: ICalendarController);
        private _getEntitySet;
        private mapIntervals;
        onSaveData(aApt: IntervalEntity[]): Promise<TResult>;
        getValidProperties(): Promise<{
            entitySet: string;
            properties: string[];
        }>;
        private _getMessageTemplate;
    }
}
declare module "dbme/w/lib/core/util/DependentFragment" {
    import UI5Element from "sap/ui/core/Element";
    import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
    /**
     * @namespace dbme.w.lib.core.util
     */
    export default class DependentFragment<ControlType> {
        protected _sView: string;
        protected _oCtrl: IModelAwareController;
        protected _mControl: Map<string, ControlType>;
        protected _bBindControl: boolean;
        constructor(_sView: string, _oCtrl: IModelAwareController);
        loadFragment(): Promise<ControlType>;
        loaded(oSourceControl: UI5Element): Promise<ControlType>;
        clear(oSourceControl?: UI5Element): this;
        protected load(oSourceControl: UI5Element): Promise<ControlType>;
        protected _key(oSourceControl: UI5Element): string;
    }
}
declare module "dbme/w/lib/core/calendar/model/ResourceRolesQuery" {
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { IPlanningCalendar } from "dbme/w/lib/core/types/ICalendar";
    import type { IntervalEntity, ResourceRoleEntity } from "dbme/w/lib/core/types/IEntity";
    /**
     * @namespace dbme.w.lib.core.calendar.model
     * @nonui5
     */
    export default class ResourceRolesQuery {
        protected oCtrl: ICalendarController;
        protected bDisplayErrors: boolean;
        protected oCalendar: IPlanningCalendar;
        constructor(oCtrl: ICalendarController, bDisplayErrors?: boolean);
        getResourceRoles(oSourceData: IntervalEntity): Promise<ResourceRoleEntity[]>;
    }
}
declare module "dbme/w/lib/core/util/ErrorHandler" {
    export type TReasonableReject = {
        reason: string;
    };
    const ErrorHandler: {
        toString(err: unknown, defaultError?: string): string;
    };
    /**
     * @namespace dbme.w.lib.core.util
     * @global
     */
    export default ErrorHandler;
}
declare module "dbme/w/lib/core/calendar/model/Enums" {
    export enum BatchRequestGroupId {
        Apt = "Apt"
    }
    export enum FieldGroupId {
        Apt = "Apt",
        Date = "Date",
        DateTimeSwitch = "DateTimeSwitch",
        Months = "monthSelectionGroup",
        Weekdays = "weekdaySelectionGroup"
    }
    export enum DialogTabKey {
        DemandData = "DemandData",
        MainData = "MainData",
        RelatedAllocations = "RelatedAllocations",
        RecurringData = "RecurringData"
    }
    /**
     * Time picker constants in miliseconds
     */
    export const MsTimeConst: {
        readonly StartMin: 0;
        readonly StartMax: 86398000;
        readonly EndMin: 1000;
        readonly EndMax: 86399000;
        readonly Hour: 3600000;
    };
}
declare module "dbme/w/lib/core/types/ITabs" {
    import type IconTabBar from "sap/m/IconTabBar";
    import type IconTabFilter from "sap/m/IconTabFilter";
    export interface IconTabFilterBar extends IconTabBar {
        getItems(): IconTabFilter[];
    }
}
declare module "dbme/w/lib/core/calendar/model/AptFormFieldFiltersQuery" {
    import Filter from "sap/ui/model/Filter";
    import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
    import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
    type $AppointmentFiltersQuerySettings = {
        DemandType: string;
        ResourceRole: string;
    };
    /**
     * @namespace dbme.w.lib.core.calendar.model
     */
    export function fetchAppointmentFilters(model: ODataModel, aptData: IntervalEntity, settings?: $AppointmentFiltersQuerySettings): Promise<Filter[]>;
}
declare module "dbme/w/lib/core/calendar/AptForm" {
    import { ICalendarController } from "dbme/w/lib/core/types/IController";
    import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
    import Dialog from "sap/m/Dialog";
    import { IntervalEntity, TUnknownEntity } from "dbme/w/lib/core/types/IEntity";
    import UI5Element from "sap/ui/core/Element";
    import JSONModel from "sap/ui/model/json/JSONModel";
    import type Event from "sap/ui/base/Event";
    import type { SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
    export type TAppointmentFormData = IntervalEntity & {
        DESCR1: string;
    };
    export type TWeekdayCheckbox = {
        text: string;
        selected: boolean;
        num: number;
    };
    export type TMonthCheckbox = {
        text: string;
        selected: boolean;
        num: number;
    };
    /**
     * @nonui5
     * @namespace dbme.w.lib.core.calendar
     */
    export default class AptForm extends DependentFragment<Dialog> {
        oData: TAppointmentFormData;
        private oCal;
        private oModel;
        private oInternalModel?;
        private oIntervalHelper;
        private bCreate;
        private mFieldGroupId;
        private sEntitySet?;
        private oSourceControl?;
        private oFormDialog?;
        private oFormFields?;
        private oCreateCtx;
        constructor(oCtrl: ICalendarController, sFragment?: string);
        setData(oData: TAppointmentFormData, bCreate: boolean): Promise<this>;
        private _setDataDateTime;
        private _setDataDate;
        private _getCreateDate;
        getMultiAptEnabled(): boolean;
        validateSelectedItems(): void;
        getCreate(): boolean;
        private createContext;
        private _getFormFieldsVisibility;
        getFormFieldEditable(): Promise<TUnknownEntity>;
        /**
         * Returns number that corresponds to hexadecimal value of selected days of week where recurrent appointment should happen.
         * For example 01010001 corresponds to Monday, Friday, and Sunday, and the method will return 51 as string
         */
        getDaysAsHexValue(): string;
        /**
         * Sets selected weekdays value into entity's property
         */
        setWeekdays(): void;
        getMonthsAsHexValue(): string;
        hexToWeekdays(hexString: string): TWeekdayCheckbox[];
        hexToMonths(hexString: string): TMonthCheckbox[];
        /**
         * Sets selected months value into entity's property
         */
        setMonths(): void;
        private createModel;
        /**
         * - !NOTICE: Primary key of bound object is not stable, it changes every time when appointment data has been changed.
         * - In EDIT mode - use PK as unique buffer ID
         */
        protected _key(oSourceControl: UI5Element): string;
        protected load(oSourceControl: UI5Element): Promise<Dialog>;
        loaded(oSourceControl: UI5Element): Promise<Dialog>;
        private _isRecurring;
        private _isAbsence;
        onValidate(event?: Event): void;
        onFieldValueChange(event: SmartField$ChangeEvent): void;
        onFieldChange(this: ICalendarController, event: Event): void;
        private setDuration;
        private _onRecurringTimeStartChange;
        private _onRecurringTimeEndChange;
        private onTimeFromChange;
        /**
         * Relevant for WPL/Demand Allocation EDIT
         */
        private loadRelatedAllocations;
        /**
         * Relevant for WPL/Demand Allocation
         */
        getSelectedAllocationsByDialog(oDialog: Dialog): IntervalEntity[];
        /**
         * Relevant for WPL/Demand Allocation EDIT
         */
        private selectRelatedAllocations;
        /**
         * Adjust UXFC for AC_PROC field; Determine by selected RESOURCE_ROLE
         */
        private setAvailabilityConsumptionPercentUxfc;
        /**
         * Set last loaded dialog
         */
        private _setDialog;
        private _tabs;
        private _tab;
        private _mainForm;
        private _demandForm;
        private _recurringForm;
        private _relatedAllocations;
        internalModel(): JSONModel;
        private _isDemandInterval;
        private _formBindingContext;
        private _aptData;
        private _applyFormFieldFilters;
    }
}
declare module "dbme/w/lib/core/calendar/CalApt" {
    import Control from "sap/ui/core/Control";
    import CalendarAppointment from "sap/ui/unified/CalendarAppointment";
    import { ICalendarController } from "dbme/w/lib/core/types/IController";
    import Dialog from "sap/m/Dialog";
    import { type Button$PressEvent } from "sap/m/Button";
    import type MenuItem from "sap/ui/unified/MenuItem";
    type TFormSourceData = {
        DESCR1?: string;
        CHARDT_FROM?: string;
        CHARDT_TO?: string;
    };
    const CalApt: {
        /**
         * Possible call context:
         * - WPL demand drop (@see CalDragDrop)
         * - WPL/RPL appointment copy/cut&paste (@see CalClipboard)
         * - WPL/RPL calendar header create menu (@see CalCreateMenu)
         * - WPL/RPL appointment context menu: Edit (@see AptContextMenu)
         */
        showForm(this: ICalendarController, oSourceControl: CalendarAppointment | MenuItem | Control, oSourceData?: TFormSourceData): Promise<Dialog>;
        submit(this: ICalendarController, oEvent: Button$PressEvent): void;
        cancel(this: ICalendarController, oEvent: Button$PressEvent): void;
        showDetails(this: ICalendarController, oApt: CalendarAppointment): Promise<Dialog>;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default CalApt;
}
declare module "dbme/w/lib/core/util/Keyboard" {
    import ManagedObject from "sap/ui/base/ManagedObject";
    /**
     * @namespace dbme.w.lib.core.util
     * @global
     */
    export default class Keyboard extends ManagedObject {
        static metadata: {
            publicMethods: string[];
            properties: {
                ctrlKeyDown: {
                    type: string;
                    default: boolean;
                };
            };
            events: {
                ctrlKey: {
                    isDown: {
                        type: string;
                    };
                    ui: {
                        type: string;
                    };
                };
            };
        };
        private _keyDownHandler;
        private _keyUpHandler;
        private _ctrlTimeout?;
        attachCtrlKey: (fnHandler: CallableFunction, listener?: object) => void;
        detachCtrlKey: (fnHandler: CallableFunction, listener?: object) => void;
        fireCtrlKey: (params: object) => void;
        setCtrlKeyDown: (isDown: boolean) => void;
        isCtrlKeyDown: () => boolean;
        init(): void;
        private _setCtrlKeyDown;
        destroy(): void;
    }
}
declare module "dbme/w/lib/core/util/RouteQueryFilter" {
    import type Event from "sap/ui/base/Event";
    import type { ISrsController } from "dbme/w/lib/core/types/IController";
    import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
    import type FacetFilter from "sap/m/FacetFilter";
    type TSelectedFilterValues = Record<string, string>;
    export type $RouteMatchedParams = {
        arguments: {
            [key: string]: string | object | undefined;
            "?query"?: object;
        };
    };
    const RouteQueryFilter: {
        /**
         * side-effects:
         * - fill this._oQueryArgs: Record<string, string>
         * - fill this._aRouteQueryFilters: sap.ui.model.Filter[]
         * - if this._getFilter(): sap.ui.comp.smartfilterbar.SmartFilterBar|sap.m.FacetFilter exists - propagate query args into filter control
         *
         * returns query args. that wasn't added into this._oQueryArgs
         */
        onRouteMatched(this: ISrsController, oEvent: Event, sEntitySet: string, aIgnoredQueryArgs?: string[], oFilterControl?: SmartFilterBar | FacetFilter, oQueryArgsMap?: Map<string, string | undefined>): Promise<TSelectedFilterValues>;
    };
    /**
     * @namespace dbme.w.lib.core.util
     * @global
     */
    export default RouteQueryFilter;
}
declare module "dbme/w/lib/core/controllerextensions/HierarchyAssignment" {
    import ManagedObject from "sap/ui/base/ManagedObject";
    import type { IBaseController } from "dbme/w/lib/core/types/IController";
    import type { Select$ChangeEvent } from "sap/m/Select";
    import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
    import type { GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
    import type Event from "sap/ui/base/Event";
    export type HierarchyAssignment$AfterChangeEventParameters = {
        settings: HierarchyAssignmentEntity;
    };
    export type HierarchyAssignment$AfterChangeEvent = Event<HierarchyAssignment$AfterChangeEventParameters, HierarchyAssignment>;
    /**
     * @global
     * @namespace dbme.w.lib.core.controllerextensions
     */
    export default class HierarchyAssignment extends ManagedObject {
        protected _controller: IBaseController;
        fireAfterChange: (params: HierarchyAssignment$AfterChangeEventParameters) => void;
        attachAfterChange: (handler: (event: HierarchyAssignment$AfterChangeEvent) => void, listener?: object) => this;
        detachAfterChange: (handler: (event: HierarchyAssignment$AfterChangeEvent) => void, listener?: object) => this;
        protected _settingsService: GlobalSettingsService;
        static metadata: {
            events: {
                afterChange: {
                    parameters: {
                        settings: string;
                    };
                };
            };
        };
        constructor(_controller: IBaseController);
        protected _init(): Promise<void>;
        onChange(event: Select$ChangeEvent): void;
        getModel(): import("sap/ui/model/json/JSONModel").default;
        getHierarchyAssignment(): HierarchyAssignmentEntity;
        getHierarchyAssignmentAsync(): Promise<HierarchyAssignmentEntity>;
    }
}
declare module "dbme/w/lib/core/types/IController" {
    import type Controller from "sap/ui/core/mvc/Controller";
    import type BaseController from "dbme/c/controller/Base";
    import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
    import type { IDBMEComponent, IDBMEComponentBase } from "dbme/w/lib/core/types/IComponent";
    import type JSONModel from "sap/ui/model/json/JSONModel";
    import type Filter from "sap/ui/model/Filter";
    import type { PlanningModeType } from "dbme/w/lib/core/calendar/Enums";
    import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
    import type Dialog from "sap/m/Dialog";
    import type UI5Element from "sap/ui/core/Element";
    import type { IPlanningCalendar } from "dbme/w/lib/core/types/ICalendar";
    import type SaveDataCommand from "dbme/w/lib/core/calendar/model/SaveDataCommand";
    import type AptForm from "dbme/w/lib/core/calendar/AptForm";
    import type DependentFragment from "dbme/w/lib/core/util/DependentFragment";
    import type CalApt from "dbme/w/lib/core/calendar/CalApt";
    import type Keyboard from "dbme/w/lib/core/util/Keyboard";
    import type FacetFilter from "sap/m/FacetFilter";
    import type RouteQueryFilter from "dbme/w/lib/core/util/RouteQueryFilter";
    import type Menu from "sap/ui/unified/Menu";
    import type View from "sap/ui/core/mvc/View";
    import type HierarchyAssignment from "dbme/w/lib/core/controllerextensions/HierarchyAssignment";
    export type $UXFCSettings = {
        Label: Record<string, boolean>;
        Hidden: Record<string, boolean>;
        Mandatory: Record<string, boolean>;
        Readonly: Record<string, boolean>;
    };
    export type $UISettings = {
        [key: string]: string | boolean | number | Date | Record<string, unknown> | undefined;
        Visibility?: Record<string, boolean>;
        C_X_CAL_AVB_REQUEST_COUNT?: number;
        C_X_CAL_AVB_WAIT_INTERVAL?: number;
    };
    export interface IBaseController extends Controller {
        hierarchyAssignment: HierarchyAssignment;
        getOwnerComponent(): IDBMEComponentBase;
    }
    export interface UISettingsHelperInterface {
        open(ctrl: BaseController, opener: UI5Element): Promise<Dialog>;
    }
    export interface IModelAwareController extends BaseController {
        getView: () => View;
        getOwnerComponent(): IDBMEComponent;
        _getModel(): ODataModel;
        _getJSONModel(oData?: object, modelName?: string, async?: boolean): JSONModel;
        _getKnownFields(entityset: string): string[];
        _jsonDataLoaded(): Promise<JSONModel | undefined>;
        _ODataToJSON<TResult>(sRemotePath: string, bForce?: boolean, aFilters?: Filter[], oTargetModel?: JSONModel): Promise<TResult[]>;
        UISettings: $UISettings;
    }
    export type $CalendarQueryArgs = {
        [key: string]: string | undefined;
        DISPLAY_CHARDT_FROM?: string;
    };
    export type TCalendarHelper = {
        [key: string]: object | undefined;
        aptDetailsDialogHandler?: DependentFragment<Dialog>;
        aptForm?: AptForm;
        createMenuHandler?: DependentFragment<Menu>;
        form: typeof CalApt;
        saveDataModel?: SaveDataCommand;
        keyboard?: Keyboard;
    };
    export interface ISrsController extends IModelAwareController {
        routeQueryFilter?: typeof RouteQueryFilter;
        _oQueryArgs: {
            [key: string]: string | undefined;
        };
        _aRouteQueryFilters: Filter[];
        _getFilter?: (entitySet?: string) => SmartFilterBar | FacetFilter;
    }
    export interface ICalendarController extends ISrsController {
        helper: TCalendarHelper;
        _view: {
            [key: string]: string;
            details: string;
            rplcreate: string;
            rpledit: string;
            wplcreate: string;
            wpledit: string;
        };
        _batchGroupId: {
            [key: string]: string;
            Apt: string;
        };
        _oQueryArgs: $CalendarQueryArgs;
        _getFilter(): SmartFilterBar;
        _applyFilters(bForce?: boolean): Promise<void>;
        _getCalendar(): IPlanningCalendar;
        _getPlanningMode(): PlanningModeType;
        _invalidateHelpers(): void;
        _setHasSelectedIntervals(bFlag?: boolean): void;
    }
}
declare module "dbme/w/lib/core/control/ConfirmDialogFactory" {
    import Dialog from "sap/m/Dialog";
    import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
    export type ConfirmDialogFunction = (this: IModelAwareController, ...args: unknown[]) => void;
    const ConfirmDialogFactory: {
        create(this: IModelAwareController, fnOnConfirmButtonPress: ConfirmDialogFunction, aArguments?: unknown[]): Dialog;
    };
    /**
     * @namespace dbme.w.lib.core.control
     */
    export default ConfirmDialogFactory;
}
declare module "dbme/w/lib/core/calendar/AptContextMenu" {
    import type Event from "sap/ui/base/Event";
    import type { PlanningCalendar$BeforeOpenContextMenuEvent } from "dbme/w/lib/core/control/PlanningCalendar";
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { Button$PressEvent } from "sap/m/Button";
    const AptContextMenu: {
        /**
         * Handle calendar event
         */
        onBeforeOpenContextMenu(this: ICalendarController, oEvent: PlanningCalendar$BeforeOpenContextMenuEvent): void;
        onShowDetailsDialog(this: ICalendarController, oEvent: Button$PressEvent): Promise<import("sap/m/Dialog").default>;
        onShowEditForm(this: ICalendarController, oEvent: Button$PressEvent): Promise<import("sap/m/Dialog").default>;
        /**
         * Delete selected Appointments
         */
        onBtnAppointmentRemove(this: ICalendarController, oEvent: Event, settings?: {
            RECURRING_SINGLE?: boolean;
        }): void;
        /**
         * Delete selected Appointments of type Recurring Absence/Reservation
         */
        onBtnRecurringEventRemove(this: ICalendarController, oEvent: Event): void;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default AptContextMenu;
}
declare module "dbme/w/lib/core/util/Clipboard" {
    const Clipboard: {
        data: {
            copy: unknown[];
            cut: unknown[];
        };
        clear(): void;
        copy(data?: unknown[]): unknown[];
        cut(data?: unknown[]): unknown[];
    };
    /**
     * @namespace dbme.w.lib.core.util
     * @global
     */
    export default Clipboard;
}
declare module "dbme/w/lib/core/calendar/CalClipboard" {
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { Button$PressEvent } from "sap/m/Button";
    const CalClipboard: {
        onBtnAppointmentCopy(this: ICalendarController, oEvent: Button$PressEvent): void;
        onBtnAppointmentCut(this: ICalendarController, oEvent: Button$PressEvent): void;
        onBtnAppointmentPaste(this: ICalendarController, oEvent: Button$PressEvent): void;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default CalClipboard;
}
declare module "dbme/w/lib/core/calendar/model/CalCreateMenuQuery" {
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { AbsenceTypeEntity, IntervalTypeEntity, ReservationTypeEntity } from "dbme/w/lib/core/types/IEntity";
    type TMenuItem = {
        [key: string]: boolean | string | number | TMenuItem[] | undefined;
        items?: TMenuItem[];
    };
    type TMenuData = {
        items: TMenuItem[];
    };
    type TRawData = {
        absence: AbsenceTypeEntity[];
        reservation: ReservationTypeEntity[];
        interval: IntervalTypeEntity[];
    };
    /**
     * @namespace dbme.w.lib.core.calendar.model
     * @nonui5
     */
    export default class CalCreateMenuQuery {
        protected oCtrl: ICalendarController;
        protected oData: TMenuData;
        constructor(oCtrl: ICalendarController);
        getData(): Promise<TMenuData>;
        protected map(oSource: TRawData): TMenuData;
    }
}
declare module "dbme/w/lib/core/calendar/CalCreateMenu" {
    import { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type Menu from "sap/ui/unified/Menu";
    import type { Button$PressEvent } from "sap/m/Button";
    import type { MenuItemBase$SelectEvent } from "sap/ui/unified/MenuItemBase";
    const CalCreateMenu: {
        onShowMenu(this: ICalendarController, oEvent: Button$PressEvent): Promise<Menu>;
        onMenuItemSelect(this: ICalendarController, oEvent: MenuItemBase$SelectEvent): Promise<import("sap/m/Dialog").default> | undefined;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default CalCreateMenu;
}
declare module "dbme/w/lib/core/calendar/CalDblClick" {
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { PlanningCalendar$AppointmentDblClickEvent, PlanningCalendar$HeaderDblClickEvent } from "dbme/w/lib/core/control/PlanningCalendar";
    const CalDblClick: {
        /**
         * Custom "headerDblClick" event
         */
        onCalendarHeaderDblClick(this: ICalendarController, oEvent: PlanningCalendar$HeaderDblClickEvent): void;
        /**
         * Custom calendar event "appointmentDblClick" handler
         */
        onAppointmentDblClick(this: ICalendarController, oEvent: PlanningCalendar$AppointmentDblClickEvent): Promise<import("sap/m/Dialog").default>;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default CalDblClick;
}
declare module "dbme/w/lib/core/calendar/CalDragDrop" {
    import type Event from "sap/ui/base/Event";
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import type { PlanningCalendarRow$AppointmentDragEnterEvent } from "sap/m/PlanningCalendarRow";
    const CalDragDrop: {
        onAppointmentDrop(this: ICalendarController, oEvent: Event): void;
        onAppointmentResize(this: ICalendarController, oEvent: Event): void;
        onAppointmentCreate(this: ICalendarController, oEvent: Event): void;
        onAppointmentDragEnter(this: ICalendarController, oEvent: PlanningCalendarRow$AppointmentDragEnterEvent): void;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default CalDragDrop;
}
declare module "dbme/w/lib/core/calendar/CalLegend" {
    import Popover from "sap/m/Popover";
    import type { ICalendarController } from "dbme/w/lib/core/types/IController";
    import Event from "sap/ui/base/Event";
    const CalLegend: {
        showLegend(this: ICalendarController, oEvent: Event): Promise<Popover>;
    };
    /**
     * @namespace dbme.w.lib.core.calendar
     * @global
     */
    export default CalLegend;
}
declare module "dbme/w/lib/core/util/Form" {
    import type UI5Element from "sap/ui/core/Element";
    import type InputBase from "sap/m/InputBase";
    import type SmartField from "sap/ui/comp/smartfield/SmartField";
    import type DatePicker from "sap/m/DatePicker";
    import type SmartForm from "sap/ui/comp/smartform/SmartForm";
    type TFormField = SmartField | InputBase | DatePicker;
    type TFieldValue = string | Date | number | boolean;
    export type TSerializedForm = {
        [key: string]: TFormField;
    };
    export type TFormData = {
        [key: string]: TFieldValue;
    };
    const FormUtil: {
        /**
         * Get form elements
         */
        getElements(oForm: UI5Element, aElementName?: string | string[], bCheckEnabled?: boolean, bCheckVisible?: boolean): TFormField[];
        /**
         * @deprecated use dbme.c.form.FormSerializer for SmartForm
         *
         * Returns form fields as an object. Adjust attributes to filter visible/enabled elements.
         */
        serializeObject(oForm: UI5Element, bCheckEnabled?: boolean, bCheckVisible?: boolean): TSerializedForm;
        getData(oForm: UI5Element, bCheckEnabled?: boolean, bCheckVisible?: boolean): TFormData;
        /**
         * @deprecated Replace with view.fireValidateFieldGroup
         */
        clearValueState(aElements: UI5Element | TFormField[], bClearText?: boolean): void;
        /**
         * @deprecated Determine invalid fields by checking field.getValueState() === ValueState.Error
         */
        validate(aElements: UI5Element | TFormField[], clearValueState?: boolean): TFormField[];
        setSmartFieldValue(field: SmartField, value: unknown, asyncUpdate?: boolean): void;
        /**
         * @deprecated Use dbme.c.util.fieldLoaded instead!
         */
        smartFieldLoaded(oSmartField: SmartField, bWaitForItems?: boolean, timeout?: number): Promise<SmartField>;
        smartFormLoaded(oSmartForm: SmartForm): Promise<SmartField[]>;
    };
    /**
     * @name dbme.w.lib.core.util.Form
     * @global
     */
    export default FormUtil;
}
declare module "dbme/w/lib/core/util/Url" {
    import { baseUrl } from "dbme/c/UrlUtils";
    import type { AppEntity } from "dbme/w/lib/core/types/IEntity";
    export const SRSComponentUrlsMap: {
        LAUNCHPAD: string;
        HAS: string;
        RPL: string;
        STS: string;
        TDO: string;
        TDT: string;
        WPL: string;
    };
    type TWorkshopPlannerQueryArgs = {
        DISPLAY_WPO_DOCNR?: string;
        DISPLAY_CHARDT_FROM?: string;
        DISPLAY_CHARDT_TO?: string;
    };
    const Url: {
        /**
         * @deprecated Only for internal use
         */
        isLocal(sUrl?: string): boolean;
        navToWorkshopPlanner(oArgs: TWorkshopPlannerQueryArgs, aApps: AppEntity[]): void;
        navToTodoBasketDetails(sOrderNumber: string, aApps: AppEntity[]): void;
        navBack(bBackCreateBrowerHistory?: boolean): void;
        baseUrl: typeof baseUrl;
        getUrlParams: typeof import("dbme/c/UrlUtils").getUrlParams;
        isUrl: typeof import("dbme/c/UrlUtils").isUrl;
        Url: {
            LAUNCHPAD: string;
            HAS: string;
            RPL: string;
            STS: string;
            TDO: string;
            TDT: string;
            WPL: string;
        };
    };
    /**
     * @namespace dbme.w.lib.core.util
     */
    export default Url;
}
declare module "dbme/w/lib/core/control/NavigationMenuFactory" {
    import Menu from "sap/ui/unified/Menu";
    import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
    const NavigationMenuFactory: {
        createForward(this: IModelAwareController): Menu;
    };
    /**
     * @namespace dbme.w.lib.core.control
     */
    export default NavigationMenuFactory;
}
declare module "dbme/w/lib/core/model/ODataToJSON" {
    import type Filter from "sap/ui/model/Filter";
    import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
    import JSONModel from "sap/ui/model/json/JSONModel";
    import { FacetFilterListDataType, ListMode } from "sap/m/library";
    export type $ODataToJSONValues = {
        key: string;
        text: string;
    };
    export type $ODataToJSONMap = {
        key: string;
        text: string;
    };
    type $ODataToJSONBaseSettings = {
        map?: $ODataToJSONMap;
        values?: $ODataToJSONValues[];
    };
    export type $ODataToJSONFilterSettings = $ODataToJSONBaseSettings & {
        source?: string;
        filters?: Filter[];
        text?: string;
        key?: string;
        type?: FacetFilterListDataType;
        mode?: ListMode;
        seq?: number;
        reload?: boolean;
    };
    export type $ODataToJSONSettings = $ODataToJSONBaseSettings & {
        source: ODataModel;
        target?: JSONModel;
        path?: string;
        filters?: Filter[];
        targetPath?: string;
        async?: boolean;
        reload?: boolean;
    };
    /**
     * Returns JSONModel target path KEY for given entity set.
     */
    export function _getEntityKey(sEntitySet: string): string;
    /**
     * @namespace dbme.w.lib.core.model
     * @nonui5
     */
    export default class ODataToJSON<TEntityData> {
        private oConfig;
        private oReader;
        constructor(oConfig: $ODataToJSONSettings);
        load(): Promise<($ODataToJSONValues | TEntityData)[]>;
        private _mapResult;
    }
}
declare module "dbme/w/lib/core/types/IModel" {
    import type { AnnotationFieldControlTypeType } from "dbme/w/lib/core/model/Enums";
    /** @deprecated Use dbme.w.lib.core.model.Enums.AnnotationFieldControlTypeType instead! */
    export enum $FieldControlType {
        Hidden = "com.sap.vocabularies.Common.v1.FieldControlType/Hidden",
        Inapplicable = "com.sap.vocabularies.Common.v1.FieldControlType/Inapplicable",
        ReadOnly = "com.sap.vocabularies.Common.v1.FieldControlType/ReadOnly",
        Mandatory = "com.sap.vocabularies.Common.v1.FieldControlType/Mandatory"
    }
    export type $ServiceAnnotations = {
        propertyAnnotations: {
            [key: string]: {
                [key: string]: {
                    "com.sap.vocabularies.Common.v1.FieldControl": {
                        EnumMember: AnnotationFieldControlTypeType;
                    };
                };
            };
        };
    };
}
declare module "dbme/w/lib/core/controller/Base" {
    import Controller from "dbme/c/controller/Base";
    import JSONModel from "sap/ui/model/json/JSONModel";
    import type Filter from "sap/ui/model/Filter";
    import type Dialog from "sap/m/Dialog";
    import Button, { type Button$PressEvent } from "sap/m/Button";
    import { ConfirmDialogFunction } from "dbme/w/lib/core/control/ConfirmDialogFactory";
    import type { $UISettings, IBaseController, IModelAwareController } from "dbme/w/lib/core/types/IController";
    import type { IDBMEComponent } from "dbme/w/lib/core/types/IComponent";
    import type Menu from "sap/ui/unified/Menu";
    import { type $ODataToJSONValues } from "dbme/w/lib/core/model/ODataToJSON";
    import type { FacetFilter$ResetEvent } from "sap/m/FacetFilter";
    import type { Select$ChangeEvent } from "sap/m/Select";
    import type FioriLaunchpadContainer from "sap/ushell/Container";
    import type View from "sap/ui/core/mvc/View";
    import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
    import HierarchyAssignment from "dbme/w/lib/core/controllerextensions/HierarchyAssignment";
    /**
     * @namespace dbme.w.lib.core.controller
     * @controller
     */
    export default abstract class Base extends Controller implements IBaseController, IModelAwareController {
        getView: () => View;
        getOwnerComponent: () => IDBMEComponent;
        static metadata: {
            abstract: boolean;
        };
        UISettings: $UISettings;
        /**
         * Indicator: Is nested route?
         */
        protected _bIsNested: boolean;
        protected _oRouteParams: Record<string, unknown>;
        protected _oJSONModel: JSONModel;
        protected _oFioriContainer?: FioriLaunchpadContainer;
        protected _mKnownFields: Map<string, string[]>;
        protected _navForwardMenu: Menu;
        protected _aJSONDataPromise: Promise<unknown>[];
        hierarchyAssignment: HierarchyAssignment;
        abstract ODataToJSON(): void;
        constructor(name: string);
        onInit(): void;
        _getModel(): ODataModel;
        _getJSONModel(initialData?: {}, modelName?: "local"): JSONModel;
        /**
         * @deprecated Use oDialog.getBindingContext().getObject() instead
         */
        protected _getDialogFormData(oDialog: Dialog, bEnabled: boolean, bVisible: boolean): unknown;
        /**
         * @deprecated Determine invalid dialog fields by checking field.getValueState() === ValueState.Error
         */
        protected _validateDialogForm(oDialog: Dialog): boolean;
        /**
         * Initialize facet filters data
         */
        protected _loadFiltersFromOData(sPath?: string): Promise<$ODataToJSONValues[]>[];
        /**
         * @deprecated Use dbme.c.odata.ODataQuery or new JSONModel(url) instead! Set JSONModel properties directly!
         *
         * Copy received data from ODataModel to JSONModel
         */
        _ODataToJSON<TResult>(sRemotePath: string, bForce?: boolean, aFilters?: Filter[], oTargetModel?: JSONModel): Promise<TResult[]>;
        protected _getJSONDataPromises(): Promise<unknown>[];
        _jsonDataLoaded(): Promise<JSONModel | undefined>;
        /**
         * @deprecated Use dbme.w.lib.core.control.ConfirmDialogFactory.create instead
         */
        protected _getConfirmDialog(fnOnConfirmButtonPress: ConfirmDialogFunction, aArguments?: unknown[]): Dialog;
        onDialogCancel(oDialog: Dialog | Button$PressEvent | Button, bAllPaths?: boolean): void;
        onPageNavBack(oEvent: Button$PressEvent): void;
        onPageNavForward(oEvent: Button$PressEvent): void;
        onFacetFilterReset(oEvent: FacetFilter$ResetEvent): void;
        protected _loadUISettings(): Promise<void>;
        onShowUserSettings(oEvent: Button$PressEvent): void;
        _getKnownFields(entitySet: string): string[];
        /**
         * @deprecated Use this.hierarchyAssignment.getModel() instead!
         */
        getHASModel(): JSONModel;
        /**
         * @deprecated Use this.hierarchyAssignment.onChange instead!
         */
        onRootHierarchyAssignmentChange(event: Select$ChangeEvent): void;
    }
}
declare module "dbme/w/lib/core/model/FilterVersionCompatibility" {
    import type Filter from "sap/ui/model/Filter";
    export function filterPath(f: Filter): string | undefined;
    export function filterFilters(f: Filter): Filter[];
}
declare module "dbme/w/lib/core/calendar/reloadResourceAvailability" {
    import type CalendarController from "dbme/w/lib/core/calendar/CalendarController";
    /**
     * @namespace dbme.w.lib.core.calendar
     */
    export default function reloadResourceAvailability(this: CalendarController): Promise<void>;
}
declare module "dbme/w/lib/core/calendar/CalendarController" {
    import BaseController from "dbme/w/lib/core/controller/Base";
    import { type PlanningModeType } from "dbme/w/lib/core/calendar/Enums";
    import Filter from "sap/ui/model/Filter";
    import type { $CalendarQueryArgs, ICalendarController, TCalendarHelper } from "dbme/w/lib/core/types/IController";
    import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
    import type SearchField from "sap/m/SearchField";
    import type { IPlanningCalendar } from "dbme/w/lib/core/types/ICalendar";
    import type Event from "sap/ui/base/Event";
    import type { PlanningCalendar$RowSelectionChangeEvent } from "sap/m/PlanningCalendar";
    import { BatchRequestGroupId } from "dbme/w/lib/core/calendar/model/Enums";
    /**
     * @namespace dbme.w.lib.core.calendar
     * @controller
     */
    export default abstract class CalendarController extends BaseController implements ICalendarController {
        routeQueryFilter: {
            onRouteMatched(this: import("dbme/w/lib/core/types/IController").ISrsController, oEvent: Event, sEntitySet: string, aIgnoredQueryArgs?: string[], oFilterControl?: SmartFilterBar | import("sap/m/FacetFilter").default, oQueryArgsMap?: Map<string, string | undefined>): Promise<{
                [x: string]: string;
            }>;
        };
        helper: TCalendarHelper;
        _view: {
            details: string;
            rplcreate: string;
            rpledit: string;
            wplcreate: string;
            wpledit: string;
        };
        _aRouteQueryFilters: Filter[];
        _oQueryArgs: $CalendarQueryArgs;
        _batchGroupId: {
            Apt: BatchRequestGroupId;
        };
        protected reloadResourceAvailabilityTimeout?: NodeJS.Timeout;
        protected _oCalendar?: IPlanningCalendar;
        protected _sLastFilter?: string;
        onInit(): void;
        protected _setBusy(bFlag: boolean): void;
        protected _getModelChangeGroups(): {
            "*": {
                groupId: BatchRequestGroupId;
                single: boolean;
            };
        };
        onRequestFailed(oEvt: Event): void;
        onRouteMatched(oEvent: Event): Promise<{
            [key: string]: string | string[] | undefined;
            DISPLAY_CHARDT_FROM?: string;
            DISPLAY_CHARDT_TO?: string;
        }>;
        _getCalendar(): IPlanningCalendar;
        protected _getDefaultStartDate(): Date;
        _getFilter(entitySet?: string): SmartFilterBar;
        protected _getSearchField(): SearchField;
        protected _getSearchFilter(): Filter | undefined;
        onSearch(oEvent: Event): void;
        onAppointmentSelect(oEvent: Event): void;
        _setHasSelectedIntervals(bFlag?: boolean): void;
        onRowSelectionChange(oEvent: PlanningCalendar$RowSelectionChangeEvent): void;
        onAfterRendering(): void;
        onStartDateChange(oEvent: Event): void;
        onViewChange(oEvent: Event): void;
        /**
         * Abstract method implementation; Called by this._getJSONModel
         * @see BaseController._getJSONModel()
         */
        ODataToJSON(): void;
        /**
         * Returns filters that will be applied to calendar "rows" list binding
         */
        protected _getCalendarFilters(): Promise<Filter[]>;
        _applyFilters(bForce?: boolean): Promise<void>;
        protected _applySpecialDatesFilters(): void;
        _getPlanningMode(): PlanningModeType;
        onBtnReload(oEvent: Event): void;
        onFacetFilterConfirm(oEvent: Event): void;
        _invalidateHelpers(): void;
        reloadResourceAvailability(): void;
    }
}
declare module "dbme/w/lib/core/controller/AbstractBase" {
    import Controller from "sap/ui/core/mvc/Controller";
    import type View from "sap/ui/core/mvc/View";
    import type { IDBMEComponentBase } from "dbme/w/lib/core/types/IComponent";
    import HierarchyAssignment from "dbme/w/lib/core/controllerextensions/HierarchyAssignment";
    import type { IBaseController } from "dbme/w/lib/core/types/IController";
    /**
     * @namespace dbme.w.lib.core.controller
     * @controller
     */
    export default abstract class AbstractBase extends Controller implements IBaseController {
        getView: () => View;
        getOwnerComponent: () => IDBMEComponentBase;
        static metadata: {
            abstract: boolean;
        };
        hierarchyAssignment: HierarchyAssignment;
        constructor(name: string);
        onInit(): void;
    }
}
declare module "dbme/w/lib/core/controller/NotFound" {
    import type Event from "sap/ui/base/Event";
    import Controller from "sap/ui/core/mvc/Controller";
    /**
     * @name dbme.w.lib.core.controller.NotFound
     * @controller
     */
    class NotFound extends Controller {
        onLinkPressed(event: Event): void;
    }
    /**
     * @global
     */
    export default NotFound;
}
declare module "dbme/w/lib/core/format/FormatUtils" {
    import { ValueState } from "sap/ui/core/library";
    const FormatUtils: {
        SplitCommaToInt(sValue: string): number[];
        parseBoolean(sValue: string): boolean;
        matchingStatusToValueState(sValue: string): ValueState;
        durationString(ms: number): string;
        dateLocal: typeof import("dbme/c/format/DateFormat").dateLocal;
        dateString: typeof import("dbme/c/format/DateFormat").dateString;
        dateTimeString: typeof import("dbme/c/format/DateFormat").dateTimeString;
        duration: typeof import("dbme/c/format/DateFormat").duration;
        getLocalByUTCDate: typeof import("dbme/c/format/DateFormat").getLocalByUTCDate;
        getUTCDate: typeof import("dbme/c/format/DateFormat").getUTCDate;
        jsDate: typeof import("dbme/c/format/DateFormat").jsDate;
        jsDateTime: typeof import("dbme/c/format/DateFormat").jsDateTime;
    };
    /**
     * @global
     * @namespace dbme.w.lib.core.format
     */
    export default FormatUtils;
}
declare module "dbme/w/lib/core/service/Enums" {
    export const ServiceName: {
        readonly GlobalSettings: "GlobalSettingsService";
        readonly SharedTranslations: "SharedTranslationsService";
    };
}
declare module "dbme/w/lib/core/service/SharedTranslationsServiceFactory" {
    import ServiceFactory from "sap/ui/core/service/ServiceFactory";
    import Service from "sap/ui/core/service/Service";
    import type ServiceContext from "sap/ui/core/service/ServiceContext";
    import type ResourceBundle from "sap/base/i18n/ResourceBundle";
    type TServiceSettings = void;
    export class SharedTranslationsService extends Service<TServiceSettings> {
        private _component;
        private _resourceBundle;
        init(): void;
        private ehnanceResourceModel;
        getInterface(): unknown;
        getResourceBundle(): ResourceBundle;
    }
    /**
     * @namespace dbme.w.lib.core.service
     */
    export default class SharedTranslationsServiceFactory extends ServiceFactory<TServiceSettings> {
        createInstance(context: ServiceContext<TServiceSettings>): Promise<SharedTranslationsService>;
    }
}
declare module "dbme/w/lib/core/sorter/GroupUtils" {
    import Context from "sap/ui/model/Context";
    const GroupUtils: {
        escapeGroup(oContext: Context): string;
    };
    /**
     * @global
     * @namespace dbme.w.lib.core.sorter
     */
    export default GroupUtils;
}
declare module "dbme/w/lib/core/ui/UIComponentBase" {
    import UIComponent from "sap/ui/core/UIComponent";
    import type { IDBMEComponentBase } from "dbme/w/lib/core/types/IComponent";
    import { type GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
    import { type DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
    /**
     * @namespace dbme.w.lib.core.ui
     */
    export default abstract class UIComponentBase extends UIComponent implements IDBMEComponentBase {
        protected _modelSizeLimit: boolean;
        static metadata: Record<string, unknown>;
        abstract getDBMEComponent(): DBMEComponentType;
        init(): void;
        getGlobalSettingsService(): Promise<GlobalSettingsService>;
        getDefaultModel(): import("sap/ui/model/odata/v2/ODataModel").default;
        createContent(): Promise<any>;
    }
}
declare module "dbme/w/lib/core/ui/UIComponent" {
    import UIComponentBase from "dbme/w/lib/core/ui/UIComponentBase";
    import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
    import type { $UISettingsKey, IDBMEComponent } from "dbme/w/lib/core/types/IComponent";
    import { type GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
    import { type SharedTranslationsService } from "dbme/w/lib/core/service/SharedTranslationsServiceFactory";
    import type { DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
    import type Service from "sap/ui/core/service/Service";
    /**
     * @deprecated Use dbme.w.lib.core.service.Enums.ServiceName instead!
     */
    export enum ServiceName {
        GlobalSettings = "GlobalSettingsService",
        SharedTranslations = "SharedTranslationsService"
    }
    /**
     * @namespace dbme.w.lib.core.ui
     */
    export default abstract class UIComponent extends UIComponentBase implements IDBMEComponent {
        protected _serviceMap: Map<string, Service<unknown>>;
        static metadata: Record<string, unknown>;
        UISettingsKey: $UISettingsKey;
        init(): void;
        /**
         * @deprecated Use (await this.getGlobalSettingsService()).getHierarchyAssignmentModel() instead!
         */
        getHASModel(): import("sap/ui/model/json/JSONModel").default;
        /**
         * @deprecated Use (await this.getGlobalSettingsService()).setHierarchyAssignment(...) instead!
         */
        setRootHierarchyAssignment(assignmentData: HierarchyAssignmentEntity, refreshData?: boolean): void;
        setCustomHeaders(component?: DBMEComponentType): void;
        getGlobalSettingsService(): Promise<GlobalSettingsService>;
        getSharedTranslationsService(): Promise<SharedTranslationsService>;
    }
}
declare module "dbme/w/lib/core/util/FacetFilterUtils" {
    import FacetFilter from "sap/m/FacetFilter";
    import Filter from "sap/ui/model/Filter";
    const FacetFilterUtils: {
        getFilter(oFacetFilter: FacetFilter): Filter | undefined;
    };
    /**
     * @namespace dbme.w.lib.core.util
     * @global
     */
    export default FacetFilterUtils;
}
