declare module "i18n/Translate" {
	/**
	 * @name dbme.srs.com.tdo.i18n.Translate
	 */
	export default function (key: string, args?: any[]): string;
}
declare module "model/Enums" {
	export enum PlanningMode {
		Automatic = "0",
		Manual = "1",
		NoAllocation = "2"
	}
	export enum OrderParameter {
		SrvAdvPickup = "SAD2"
	}
	export enum OrderSelectionMode {
		None = "",
		Single = "S",
		Multiple = "M"
	}
	export enum UISettingsKey {
		DemandDefaultUoM = "TDO_DEF_DEM_UOM",
		DefaultOrderType = "TDO_DEF_ORD_TYPE",
		PlannedFromInPast = "C_X_TDO_PLAN_FROM_PAST"
	}
	export enum ScreenArea {
		Customer = "C",
		Vehicle = "V",
		Order = "O"
	}
	export enum ComponentEvent {
		ScreenSectionTableItemsLoaded = "ScreenSectionTableItemsLoaded",
		ScreenSectionTableSelectionChange = "ScreenSectionTableSelectionChange"
	}
	export enum ModelName {
		Calendar = "cal",
		Device = "device",
		Local = "local",
		TestMode = "TestMode"
	}
	export enum TabKey {
		Demands = "Demands",
		ActionHistory = "ActionHistory",
		Location = "Location",
		Date = "Date",
		Parameters = "Parameters",
		Agreements = "Agreements",
		Notes = "Notes",
		Attachments = "Attachments"
	}
	export enum SectionType {
		Component = "C",
		DecissionTree = "T",
		Manual = "M",
		Service = "E",
		Work = ""
	}
	export enum DemandOrigin {
		Automatic = "",
		Catalog = "C",
		WorkItem = "I",
		Manual = "M"
	}
	export enum FieldGroupId {
		Address = "Addr",
		Allocation = "Allocation",
		Customer = "Cust",
		Default = "defaultGroupId",
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
	export enum OrderFunction {
		Reschedule = ".RESCH",
		Replan = ".REPLN"
	}
	export enum OrderFunctionView {
		Reschedule = "dbme.srs.com.tdo.view.action.Reschedule",
		Replan = "dbme.srs.com.tdo.view.action.Replan"
	}
	export enum RouteName {
		default = "default",
		Create = "Create",
		CreateQuery = "CreateQuery",
		CreateApt = "CreateApt",
		Details = "Details",
		Index = "Index",
		IndexQuery = "IndexQuery"
	}
	export enum BatchGroupId {
		Allocation = "Allocation",
		Attachment = "Attachment",
		Helper = "Helper",
		Replan = "Replan",
		Order = "Order",
		Test = "Test"
	}
	export enum OrderExpandDefault {
		CommChannel = "CommChannelNav",
		Demands = "DemandsNav",
		History = "HistoryNav",
		Parameter = "ParameterNav",
		Agreement = "AgreementNav",
		Note = "NoteNav",
		Attachment = "AttachmentNav"
	}
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	const enums: {};
	export default enums;
}
declare module "types/IEntity" {
	export type TUISettings = {
		C_X_ATT_MAX_SIZE: string;
	};
	export type TCommonError = {
		reason?: string;
		message?: string;
		title?: string;
	};
	export type TRouteData = {
		name: string;
		pattern: string;
		target: string;
		prefix?: string;
	};
	export type TObject = Record<string, unknown>;
	export interface IEntity {
		__metadata?: {
			uri?: string;
			created?: {
				groupId?: string;
			};
		};
	}
	export interface IEntityNavigation {
		results: IEntity[];
	}
	export interface IOrderEntity {
		WPO_DOCNR: string;
		ORDER_TYPE: string;
		WLOHID: string;
		MAKE_CODE: string;
		MODEL_CODE: string;
		MILEAGE: string;
		PREFERRED_COMM: string;
		PARTNER: string;
		CUSTOMER: string;
		USERID: string;
		ALLOCATED_FROM: string;
		ALLOCATED_TO: string;
		PLANNED_FROM_TS?: Date;
		PICKUP_AT_TS?: Date;
		APLAN_MODE?: string;
		REQ_MAX_DUR?: number;
		REQ_MAX_DUR_UOM?: string;
		CommChannelNav?: IEntity[];
		DemandsNav?: IDemandEntity[];
		HistoryNav?: IEntity[];
		ParameterNav?: IOrderParameterEntity[];
		AgreementNav?: IEntity[];
		NoteNav?: IEntity[];
		AttachmentNav?: TOrderAttachment[];
	}
	export type TOrderAttachment = IEntity & {
		FILENAME: string;
		ATT_URL?: string;
	};
	export interface ITimeSlotEntity {
		WPO_DOCNR: string;
		TMSLTNO: string;
		START_TIME: string;
		END_TIME: string;
		APARAM_ID: string;
	}
	export interface IOrderParameterEntity {
		APARAM_ID: string;
		APARAM_DESC: string;
		STATE: boolean;
		PICKUP?: boolean;
		DEFAULT_CHECKED: boolean;
		OBLIGATORY: boolean;
		PLANRL: boolean;
		TimeSlotsNav?: ITimeSlotEntity[];
	}
	export interface IDemandEntity {
		DEMAND_ID: string;
		WPO_DOCNR: string;
		ALLOC_DATE_FROM: Date;
		ALLOC_DATE_TO: Date;
		DURATION_WORKV?: float;
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
	}
	export interface IAllocationProposalData extends IEntity {
		ParametersNav?: IOrderParameterEntity[];
		DemandsNav?: IDemandEntity[];
		IntervalsNav?: IEntityNavigation;
		LocationNav?: ILocationEntity[];
		HIERARCHY_ID?: string;
		IGNORE_PLANNING?: boolean;
		VISIT_START_TS?: Date;
		VISIT_END_TS?: Date;
		UI_TEXT?: string;
		UI_TEXT_SHORT?: string;
		UI_TITLE?: string;
		VISIT_DURATION?: number;
		DATA?: string;
		WPO_DOCNR?: string;
	}
	export interface ILocationEntity {
		HIERARCHY_ID: string;
		SELECTED: boolean;
		APLAN_MODE: string;
		UI_TITLE: string;
	}
	export interface ITimeStepEntity {
		HIERARCHY_ID: string;
		VISIT_TIME_RES: number;
	}
	export type TActionEntity = {
		FUNCTION: string;
		PARAMSTR: string;
		URL: string;
	};
	export type TStatusEntity = {
		WPSTAT: string;
		DESCR1: string;
		UI5_ICON?: string;
		UI5_COLOR?: string;
		COUNT_ROWS: number;
		HIERARCHY_ID: string;
		ActionsNav: TStatusActionEntity[];
	};
	export type TStatusActionEntity = {
		WPSTAT: string;
		FUNCTION: string;
		UI5_ICON?: string;
		DESCR1: string;
		WPACTION: string;
		WPO_DOCNR: string;
		SELECTION_MODE: string;
	};
	export type TMimeTypeEntity = {
		MIMETYPE: string;
	};
	export type TScreenEntity = {
		SCRNUM: string;
		SCRNUM_DESC: string;
		UI_ICON: string;
		UI_COLOR: string;
		COUNTABLE: boolean;
		COUNT_VALUE: number;
		ORDER_TYPE: string;
		FOR_EDIT: boolean;
	};
	export type TScreenFieldEntity = {
		SCREEN_AREA: string;
		FIELD_NAME: string;
		FIELD_NAME_DESC: string;
		FIELD_STATUS: string;
		CAPPL: string;
		ORDER_TYPE: string;
	};
	export type TAgreementEntity = {
		WPO_DOCNR: string;
		HIERARCHY_ID: string;
		AGRMNT_ID: string;
		AGTYP: string;
		AGRMNT_DESC: string;
		OBLIG: boolean;
		SEQUENCE: number;
		STATE: boolean;
		UI5_ICON: string;
		UI5_STATUS: string;
	};
	export type TUserHierarchyAssignmentEntity = {
		UNAME: string;
		SEQNO: number;
		HIERARCHY_ID: string;
		HIERARCHY_NAME: string;
		HIERARCHY_DEFAULT: boolean;
		WEEK_FIRST_DAY: number;
		DEF_MILEAGE_UOM: string;
	};
	export type TVehicleCustomerEntity = {
		VH_OBJ_NUMBER: string;
		PARTNER: string;
		CUSTOMER: string;
		MILEAGE?: number;
		MILEAGE_UOM?: string;
		REG_DATE_D?: Date;
		ORDER_TYPE?: string;
	};
	export type TOrderListEntity = {
		WPO_DOCNR: string;
		REF_DOCNR: string;
	};
	export type TUserEntity = {
		USERID: string;
		EMAIL_ADDR: string;
	};
	export type TResourceRoleEntity = {
		RESOURCE_ROLE: string;
		RESOURCE_TYPE: string;
	};
	export type TOrderNoteEntity = {
		CONTENT?: string;
		EDITABLE?: boolean;
	};
}
declare module "helper/AllocPropCalBridge" {
	import HBox from "sap/m/HBox";
	import PlanningCalendar from "sap/m/PlanningCalendar";
	import CalendarAppointment from "sap/ui/unified/CalendarAppointment";
	/**
	 * @since 1.6.21    Bridge for sap.m.PlanningCalendar to support sap.m.ListBase interface methods
	 *
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class AllocPropCalBridge {
		private oBox;
		private oTb;
		private oCal;
		constructor(oBox: HBox);
		getId(): string;
		getCalendar(): PlanningCalendar;
		getItems(): Array<CalendarAppointment>;
		getSelectedItems(): Array<CalendarAppointment>;
		getSelectedItem(): CalendarAppointment | undefined;
		removeSelections(): this;
		fireSelectionChange(vData: any): this;
		destroy(): void;
		destroyItems(): this;
	}
}
declare module "helper/TimeSlotsContainer" {
	import IconTabBar from "sap/m/IconTabBar";
	import List from "sap/m/List";
	import VerticalLayout from "sap/ui/layout/VerticalLayout";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class TimeSlotsContainer {
		private container;
		constructor(container: IconTabBar | VerticalLayout);
		addContent(child: List): void;
		removeContent(child: List): void;
	}
}
declare module "types/ITabsAware" {
	import IconTabFilter from "sap/m/IconTabFilter";
	import Control from "sap/ui/core/Control";
	import { CSSSize, IconColor } from "sap/ui/core/library";
	import { SectionType, TabKey } from "model/Enums";
	import { IEntity } from "types/IEntity";
	type TSectionFactory = (oSectionData?: any) => Promise<Control> | Control;
	export interface IScreenSection extends IEntity {
		sectionFactory?: TSectionFactory;
		SECTION_NO?: string;
		SECTION_TYPE?: SectionType;
		SCRNUM?: string;
		FieldsNav?: any[];
		SECTION_HEIGHT?: CSSSize;
		SECTION_URL?: string;
		SECTION_NAME?: string;
	}
	export interface IScreen {
		SCRNUM: TabKey;
		SCRNUM_DESC: string;
		UI_ICON: string;
		UI_COLOR: IconColor;
		COUNTABLE: boolean;
		COUNT_VALUE: string | number;
		ORDER_TYPE: string;
		ENABLED: boolean;
		Items: IScreenSection[];
	}
	export type SerializedTabsType = {
		[key in TabKey | string]: IconTabFilter;
	};
	export default interface ITabsAware {
		serializeTabs(): SerializedTabsType;
	}
}
declare module "types/IController" {
	import Base from "dbme/w/lib/core/controller/Base";
	import { IOrderEntity, TObject } from "types/IEntity";
	import List from "sap/m/List";
	import Table from "sap/m/Table";
	import Event from "sap/ui/base/Event";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import AllocPropCalBridge from "helper/AllocPropCalBridge";
	import TimeSlotsContainer from "helper/TimeSlotsContainer";
	import ColumnListItem from "sap/m/ColumnListItem";
	import Control from "sap/ui/core/Control";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import Context from "sap/ui/model/odata/v2/Context";
	import ITabsAware from "types/ITabsAware";
	export interface IFormAware {
		_getForm(): SmartForm;
		onFieldChange(event: Event): void;
	}
	export interface IAfterAction {
		onAfterSuccessfulAction(): void;
	}
	export interface IOrderAwareController extends Base {
		isCreateOrder(): boolean;
		getSelectedOrder(): IOrderEntity[];
	}
	export interface IReschedulingController extends IOrderAwareController {
		oTimeSlotsContainer?: TimeSlotsContainer;
		_oAllocationProposalList?: List | AllocPropCalBridge;
		calendarModel(): JSONModel;
		setPickupAtVisibility(bVisibility: boolean): void;
		getSelectedAllocationProposalModelName(): string | undefined;
		onAllocationProposalSelect(oEvent: Event): void;
		destroyAllocationProposal(): void;
		getDemandsTable(): Table;
	}
	export interface ISelectableControl extends Control {
		getSelected(): boolean;
		setSelected(selected: boolean): this;
	}
	export type TDemandOrigin = ISelectableControl | Control | Context | TObject;
	export interface ICreatedDemandData {
		origin: TDemandOrigin;
		target: ColumnListItem;
		manually: boolean;
		copy: boolean;
	}
	export interface IDemandsAwareController extends IOrderAwareController, ITabsAware, IFormAware {
		_mDemands?: Record<string, ICreatedDemandData>;
		_oDemandsTable?: Table;
		_oDemandTemplate?: ColumnListItem;
		helper: {
			demandTemplate: unknown;
		};
		/**
		 * @see dbme.srs.com.tdo.helper.Demand._addDemand
		 */
		_setLocationEnabled(): void;
		/**
		 * @see dbme.srs.com.tdo.helper.Demand._addDemand
		 */
		_setSaveEnabled(): void;
	}
}
declare module "helper/bindingData" {
	import ManagedObject from "sap/ui/base/ManagedObject";
	import Controller from "sap/ui/core/mvc/Controller";
	import { IEntity } from "types/IEntity";
	/**
	 * Get order data replacing all undefined properties with empty string
	 * @name dbme.srs.com.tdo.helper.bindingData
	 */
	export default function bindingData(this: Controller | ManagedObject): IEntity;
}
declare module "helper/bindingFilters" {
	import Controller from "dbme/w/lib/core/controller/Base";
	import Filter from "sap/ui/model/Filter";
	type TFilters = Filter[] | Record<string, Filter>;
	/**
	 * Create an array of filters based on current binding
	 *
	 * @name dbme.srs.com.tdo.helper.bindingFilters
	 */
	export default function bindingFilters(this: Controller, oDefault?: object, aKeys?: string | string[], asObject?: boolean): TFilters;
}
declare module "helper/Logger" {
	export function debug(message: string): void;
	export function info(message: string): void;
	export function warning(message: string): void;
	export function error(message: string): void;
}
declare module "helper/orderTabs" {
	import IconTabBar from "sap/m/IconTabBar";
	import Controller from "sap/ui/core/mvc/Controller";
	/**
	 * @name dbme.srs.com.tdo.helper.orderTabs
	 */
	export default function orderTabs(this: Controller): IconTabBar;
}
declare module "helper/ScreenSectionTableFilter" {
	import Base from "dbme/w/lib/core/controller/Base";
	import Filter from "sap/ui/model/Filter";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class ScreenSectionTableFilter {
		static filter(this: Base, oFilter: Filter): void;
	}
}
declare module "helper/Form" {
	import SmartField from "sap/ui/comp/smartfield/SmartField";
	import Select from "sap/m/Select";
	import ComboBox from "sap/ui/comp/smartfield/ComboBox";
	import Filter from "sap/ui/model/Filter";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import Event from "sap/ui/base/Event";
	import ListBinding from "sap/ui/model/ListBinding";
	import { IOrderAwareController } from "types/IController";
	import { IOrderEntity } from "types/IEntity";
	import Controller from "dbme/w/lib/core/controller/Base";
	type TFieldWithItems = Select | ComboBox;
	type TFilterKeys = Record<string, unknown | Filter>;
	interface IController extends IOrderAwareController {
		_reloadTabs?: CallableFunction;
		_getForm(): SmartForm;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class Form {
		static applyFieldItemsFilter(oField: SmartField | TFieldWithItems, aFilters: Filter | Filter[]): Promise<ListBinding>;
		/**
		 * @param {sap.ui.comp.smartform.SmartForm} oSmartForm
		 * @param {String[]|Object} aFilterKeys
		 * @param {String} sTarget
		 * @return {Promise}
		 */
		static setFieldItemsFilter(oSmartForm: SmartForm, vFilterKeys: string[] | TFilterKeys, sTarget: string): Promise<ListBinding>;
		/**
		 * Reload filters for Service/Work items on Vehicle Field change
		 */
		static onVehicleFieldChange(this: IController, oField: SmartField): void;
		static onFormFieldChange(this: IController, oEvent: Event): void;
		static reloadRegion(oSmartForm: SmartForm): Promise<ListBinding | void>;
		/**
		 * Set Country field value by selected Region
		 */
		static reloadCountry(oSmartForm: SmartForm): boolean;
		static reloadModel(this: Controller, oSmartForm: SmartForm): Promise<ListBinding | void>;
		static reloadBrand(this: Controller, oSmartForm: SmartForm): Promise<ListBinding | void>;
		static reloadLocation(oSmartForm: SmartForm, oOrderData: IOrderEntity): Promise<ListBinding | void>;
	}
}
declare module "eh/SectionListEventHandler" {
	import Event from "sap/ui/base/Event";
	import ITabsAware from "types/ITabsAware";
	export default class SectionListEventHandler {
		/**
		 * Hide tab if no list items been found.
		 * Relevant only for the following tabs:
		 * - Parameters
		 * - Agrrements
		 */
		static onUpdateFinished(this: ITabsAware, oEvent: Event, sTabKey: string): void;
	}
}
declare module "helper/Template" {
	import List from "sap/m/List";
	import { IOrderAwareController } from "types/IController";
	import { TScreenFieldEntity } from "types/IEntity";
	interface IController extends IOrderAwareController {
		_oParametersList?: List;
		_oAgreementsList?: List;
		_reloadParameters(): void;
		_reloadAgreements(): void;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class Template {
		/**
		 * @param {?Boolean} bRecalc	Flag: re-create control if already exists
		 * @returns {Promise}			Resolves to sap.m.List
		 */
		static _getParametersList(this: IController, bRecalc?: boolean): Promise<List>;
		/**
		 * @param {?Boolean} bRecalc	Flag: re-create control if already exists
		 * @returns {Promise}			Resolves to sap.m.List
		 */
		static _getAgreementsList(this: IController, bRecalc?: boolean): Promise<List>;
		/**
		 * Set form fields attributes by Entityset.TodoOrderFields
		 */
		static setOrderFields(this: IController): Promise<TScreenFieldEntity[]>;
		static _getListActionHistory(this: IController, oSectionData?: {}): Promise<List>;
	}
}
declare module "model/OrderCreateCommand" {
	import { TODataCommandResult } from "dbme/c/odata/ODataCommand";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { IOrderEntity } from "types/IEntity";
	export type TCreateOrderResult = TODataCommandResult & {
		order: IOrderEntity;
	};
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	export default class OrderCreateCommand {
		private _model;
		constructor(_model: ODataModel);
		submit(sBatchGroupId: string): Promise<TCreateOrderResult>;
	}
}
declare module "model/TimeStepReadModel" {
	import Base from "dbme/w/lib/core/controller/Base";
	export interface IStepData {
		step: number;
	}
	export const DEFAULT_MIN_STEP = 30;
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	export default class TimeStepReadModel {
		static read(this: Base, hierarchyId?: string[]): Promise<IStepData>;
	}
}
declare module "helper/DateFormTemplate" {
	import SmartField from "sap/ui/comp/smartfield/SmartField";
	import List from "sap/m/List";
	import VerticalLayout from "sap/ui/layout/VerticalLayout";
	import CreateApt from "controller/CreateApt.controller";
	import { IOrderAwareController } from "types/IController";
	interface IController extends IOrderAwareController {
		_oLocationList?: List;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class DateFormTemplate {
		static setMinutesStep(oField: SmartField, iStep?: number): Promise<SmartField>;
		static setWorkingHoursStepForPicker(this: IController, oField: SmartField, aWorkshop?: string[]): Promise<SmartField>;
		static getDateForm(this: CreateApt, bRecalc?: boolean): Promise<VerticalLayout>;
	}
}
declare module "helper/Filter" {
	import Controller from "dbme/w/lib/core/controller/Base";
	import Event from "sap/ui/base/Event";
	import Context from "sap/ui/model/Context";
	import ModelFilter from "sap/ui/model/Filter";
	import { IOrderEntity } from "types/IEntity";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class Filter {
		static _getOrderData(this: Controller): any;
		/**
		 * @deprecated use bindingFilters instead
		 */
		static _createFilters(this: Controller, oDefault?: any, aKeys?: string | string[]): ModelFilter[];
		static createFiltersPromise(this: Controller, oDefault?: {}, aKeys?: string | string[]): Promise<ModelFilter[]>;
		static onBtnSmartTableFilter(oEvent: Event): void;
		static mapOrderListToOrder(oOrderListCtx: Context): IOrderEntity;
	}
}
declare module "helper/DemandDialog" {
	import Dialog from "sap/m/Dialog";
	import Event from "sap/ui/base/Event";
	import Context from "sap/ui/model/Context";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class DemandDialog {
		static load(oSectionCtx: Context): Promise<Dialog>;
		static onDemandDialogCancel(oEvent: Event): void;
	}
}
declare module "types/EventParams" {
	import ListItemBase from "sap/m/ListItemBase";
	import Filter from "sap/ui/model/Filter";
	import Sorter from "sap/ui/model/Sorter";
	import { TObject } from "types/IEntity";
	import UploadCollectionParameter from "sap/m/UploadCollectionParameter";
	export type $TListSelectionChangeParams = {
		listItem: ListItemBase;
		listItems: ListItemBase[];
		selected: boolean;
		selectAll: boolean;
	};
	export type $SmartTableBindingParams = {
		filters: Filter[];
		sorter: Sorter[];
		events: Record<string, CallableFunction>;
		parameters: TObject;
	};
	export type $TRequestFailedParams = {
		url: string;
		method: string;
		response: unknown;
	};
	export type $TRouteParams = {
		arguments: TObject;
	};
	/**
	 * @link https://sapui5.hana.ondemand.com/1.71.48/#/api/sap.m.UploadCollection
	 */
	export type $TBeforeUploadStarts = {
		fileName: string;
		addHeaderParameter(parameter: UploadCollectionParameter): void;
	};
	type $TTypeMissmatchFile = {
		name: string;
		mimeType: string;
	};
	export type $TTypeMissmatch = {
		fileType: string;
		mimeType: string;
		files: $TTypeMissmatchFile[];
	};
}
declare module "helper/ScreenSectionBindingRefresh" {
	import ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
	import { IScreenSection } from "types/ITabsAware";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class ScreenSectionBindingRefresh {
		_listBinding: Record<string, ODataListBinding>;
		registerListBinging(section: IScreenSection, binding: ODataListBinding): void;
		refresh(): void;
	}
}
declare module "helper/ScreenSectionTableTemplate" {
	import { Entityset } from "dbme/w/lib/core/library";
	import Event from "sap/ui/base/Event";
	import SmartTable from "sap/ui/comp/smarttable/SmartTable";
	import Context from "sap/ui/model/Context";
	import { IScreenSection } from "types/ITabsAware";
	import { IOrderAwareController } from "types/IController";
	import Dialog from "sap/m/Dialog";
	import ScreenSectionBindingRefresh from "helper/ScreenSectionBindingRefresh";
	interface IController extends IOrderAwareController {
		helper: {
			demandTemplate?: any;
			sectionBindingRefresh: ScreenSectionBindingRefresh;
		};
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class ScreenSectionTableTemplate {
		static readonly fieldGroupId: {
			WorkItemTable: Entityset.TodoWorkItem;
			ServiceItemTable: Entityset.TodoServiceItem;
		};
		private static _getSectionTable;
		static getServiceItemTable(this: IController, oSectionData: IScreenSection): Promise<SmartTable>;
		static getWorkItemTable(this: IController, oSectionData: IScreenSection): Promise<SmartTable>;
		static getServiceCreateDemandDialog(this: IController, oSectionCtx: Context): Promise<Dialog>;
		static getWorkCreateDemandDialog(this: IController, oSectionCtx: Context): Promise<Dialog>;
		/**
		 * Handler attached in a view fragment
		 */
		static onInit(oEvent: Event): void;
		static onBtnClearSelection(oEvent: Event): void;
		/**
		 * Handler attached in a view fragment
		 */
		static onBeforeRebind(this: IController, oEvent: Event): void;
		static onScreenSectionTableSelectionChange(this: IController, oEvent: Event): void;
	}
}
declare module "helper/DecissionTreeTemplate" {
	import Dialog from "sap/m/Dialog";
	import Event from "sap/ui/base/Event";
	import ComponentContainer from "sap/ui/core/ComponentContainer";
	import Context from "sap/ui/model/Context";
	import { IDemandsAwareController } from "types/IController";
	import { IScreenSection } from "types/ITabsAware";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class DecissionTreeTemplate {
		static getComponentContainer(this: IDemandsAwareController, oSectionData?: IScreenSection): Promise<ComponentContainer>;
		static onDecissionTreeSelectionChange(this: IDemandsAwareController, oEvent: Event): void;
		/**
		 * - Restore items selection by this._mDemands
		 * - Update this._mDemands[<sBindingPath>].origin
		 *
		 * @param {sap.ui.base.Event} oEvent
		 */
		static onDecissionTreeUpdateFinished(this: IDemandsAwareController, oEvent: Event): void;
		static getCreateDemandDialog(this: IDemandsAwareController, oSectionCtx: Context): Promise<Dialog>;
	}
}
declare module "helper/TabComponent" {
	import ComponentContainer from "sap/ui/core/ComponentContainer";
	import Controller from "dbme/w/lib/core/controller/Base";
	import Context from "sap/ui/model/Context";
	import Dialog from "sap/m/Dialog";
	import { IScreenSection } from "types/ITabsAware";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class TabComponent {
		static getComponentContainer(this: Controller, oSectionData: IScreenSection): Promise<ComponentContainer>;
		static getCreateDemandDialog(this: Controller, oSectionCtx: Context): Promise<Dialog>;
	}
}
declare module "helper/DemandMenu" {
	import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
	import Event from "sap/ui/base/Event";
	import Controller from "sap/ui/core/mvc/Controller";
	import Menu from "sap/ui/unified/Menu";
	import Control from "sap/ui/core/Control";
	import { IDemandsAwareController } from "types/IController";
	/**
	 * @nonui5
	 */
	class DemandMenuFragment extends DependentFragment {
		constructor(oCtrl: Controller);
		load(oControl?: Control): Promise<Control>;
		dataReceived(oEvt: Event, oMenu: Menu): void;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class DemandMenu {
		protected static view?: DemandMenuFragment;
		static show(this: IDemandsAwareController, oEvent: Event): Promise<Menu>;
		/**
		 * @param {sap.ui.base.Event} oEvent Event
		 */
		static onMenuItemSelect(this: IDemandsAwareController, oEvent: Event): void;
	}
}
declare module "helper/OASUser" {
	import Base from "dbme/w/lib/core/controller/Base";
	import SelectDialog from "sap/m/SelectDialog";
	import Context from "sap/ui/model/Context";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	const _default: {
		createDialog(this: Base, oOrderContext: Context, fnClose: CallableFunction): SelectDialog;
	};
	export default _default;
}
declare module "helper/SearchHelp" {
	import SmartField from "sap/ui/comp/smartfield/SmartField";
	import Event from "sap/ui/base/Event";
	import { IOrderAwareController } from "types/IController";
	import Input from "sap/m/Input";
	import ValueHelpDialog from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
	import Table from "sap/ui/table/Table";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import InputBase from "sap/m/InputBase";
	import { TObject, TUserEntity } from "types/IEntity";
	type THandlers = Record<string, any>;
	interface IController extends IOrderAwareController {
		_getForm(): SmartForm;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class SearchHelp {
		static onBtnVehicleNumberClear(oEvent: Event): void;
		static onBtnCustomerNumberClear(oEvent: Event): void;
		static getDefaultHandlers(this: IController): THandlers;
		/**
		 * @param {sap.ui.base.Event} oEvent	Event
		 * @param {Object} mHandlers			Map of event handlers
		 */
		static onInnerControlsCreated(this: IController, oEvent: Event, mHandlers?: THandlers): void;
		/**
		 * @param {sap.ui.base.Event} oEvent	Event
		 * @param {Object} mHandlers			Map of event handlers
		 * @returns {Promise}					Resolves to SH related dialog of type: sap.ui.comp.valuehelpdialog.ValueHelpDialog
		 */
		static onFieldValueHelpRequest(this: IController, oEvent: Event, mHandlers?: THandlers): Promise<ValueHelpDialog>;
		static onSearchHelpInit(this: IController, oInput: Input, oDialog: ValueHelpDialog, mHandlers?: THandlers): void;
		static _shBeforeDialogClose(this: IController, oEvent: Event, oTable: Table): string[] | false;
		static _shSearchCriteria(oDialog: ValueHelpDialog, oSourceData: Record<string, string>, aAllowed?: string[]): Promise<Record<string, InputBase> | void>;
		static _shMoveCorresponding(aFields: SmartField[], oShData: TObject): void;
		static _getFields(this: IController, sFieldGroupId: string): SmartField[];
		static onBtnOASUser(this: IController, oEvent: Event): void;
		static _setOASUser(this: IController, oUserData: TUserEntity): void;
	}
}
declare module "helper/DemandLongText" {
	import Dialog from "sap/m/Dialog";
	import Event from "sap/ui/base/Event";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class DemandLongText {
		private static showDialog?;
		private static editDialog?;
		static edit(oEvent: Event): Promise<Dialog>;
		static show(oEvent: Event): Promise<Dialog>;
		static submit(oEvent: Event): void;
		static cancel(oEvent: Event): void;
	}
}
declare module "helper/DemandTemplate" {
	import SmartField from "sap/ui/comp/smartfield/SmartField";
	import Input from "sap/m/Input";
	import ValueHelpDialog from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
	import HBox from "sap/m/HBox";
	import ColumnListItem from "sap/m/ColumnListItem";
	import Table from "sap/m/Table";
	import { IDemandsAwareController } from "types/IController";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class DemandTemplate {
		protected static getDemandCell(this: IDemandsAwareController, sPath: string, oBindingInfo: object): Promise<SmartField | HBox>;
		static getDemandTemplate(this: IDemandsAwareController, bRecalc?: boolean): Promise<ColumnListItem>;
		static getDemandsTable(this: IDemandsAwareController, bRecalc?: boolean): Table;
		/**
		 * @return {Promise[]}	Array of Promises
		 */
		static getDemandTablePromises(this: IDemandsAwareController): Promise<SmartField>[];
		/**
		 * @see SearchHelp.onFieldValueHelpRequest
		 *
		 * @param {sap.m.Input} oInput										Input with valueHelpRequest
		 * @param {sap.ui.comp.valuehelpdialog.ValueHelpDialog} oDialog		Dialog control
		 * @param {Object} mHandlers										Map of event handlers
		 * @returns {Promise}                                               Resolves to given dialog
		 */
		static initPrefResourceSearchHelp(
			this: IDemandsAwareController,
			oInput: Input,
			oDialog: ValueHelpDialog,
			mHandlers?: Record<string, CallableFunction>
		): Promise<void | ValueHelpDialog>;
	}
}
declare module "helper/ScreenSectionTable" {
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class ScreenSectionTable {
		oObserver: MutationObserver;
		constructor();
		private handleMutation;
		destroy(): void;
	}
}
declare module "helper/NotesList" {
	import List from "sap/m/List";
	import Event from "sap/ui/base/Event";
	import { IOrderAwareController } from "types/IController";
	import { TOrderNoteEntity } from "types/IEntity";
	import ITabsAware from "types/ITabsAware";
	interface IController extends IOrderAwareController, ITabsAware {
		_oNotesList?: List;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class NotesList {
		/**
		 * @param {?Boolean} bRecalc	Flag: re-create control if already exists
		 * @return {Promise}			Resolves to sap.m.List
		 */
		static getNotesList(this: IController, bRecalc?: boolean): Promise<List>;
		static reloadFilters(this: IController, oDefaults?: TOrderNoteEntity): void;
		static onOrderNoteActionPressed(this: IController, oEvent: Event): void;
		static onBtnFormNoteCancel(this: IController, oEvent: Event): void;
		static onBtnFormNoteOK(oEvent: Event): void;
	}
}
declare module "model/Base64" {
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	export default class Base64 {
		static encode(input: string): string;
	}
}
declare module "helper/Attachment" {
	import Event from "sap/ui/base/Event";
	import { IAfterAction, IOrderAwareController } from "types/IController";
	import UploadCollection from "sap/m/UploadCollection";
	import ITabsAware from "types/ITabsAware";
	interface IController extends IOrderAwareController, ITabsAware, IAfterAction {
		_uploadComplete?: NodeJS.Timeout;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class Attachment {
		static onBeforeUploadStarts(this: IController, oEvent: Event): void;
		static onUploadComplete(this: IController, oEvent: Event): void;
		static onUploadTypeMissmatch(this: IController, oEvent: Event): void;
		static onUploadFileSizeExceed(this: IController, oEvent: Event): void;
		static onUploadTerminated(oEvent: Event): void;
		static onAttachmentDelete(this: IController, oEvent: Event): void;
		static onAttachmentPress(this: IController, oEvent: Event): void;
		static getAttachmetList(this: IController, oSectionData?: {}): Promise<UploadCollection>;
	}
}
declare module "helper/TabsTemplate" {
	import IconTabFilter from "sap/m/IconTabFilter";
	import ListBase from "sap/m/ListBase";
	import Base from "dbme/w/lib/core/controller/Base";
	import ITabsAware, { IScreen, SerializedTabsType } from "types/ITabsAware";
	import { IOrderEntity } from "types/IEntity";
	interface IController extends Base, ITabsAware {}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class TabsTemplate {
		private static getScreenData;
		/**
		 * Returns data for JSONModel
		 */
		static getModelData(this: IController, oOrderData?: IOrderEntity, bCreate?: boolean): Promise<IScreen[]>;
		/**
		 * - Call section factories
		 * - Bind tab section into order
		 */
		static createTabsContent(this: IController): Promise<IconTabFilter[]>;
		static serializeObject(this: IController): SerializedTabsType;
		static attachListUpdateFinished(this: ITabsAware, oList: ListBase, sTabKey: string): ListBase;
		static destroy(this: IController): void;
		static getTable(tab: IconTabFilter): ListBase[];
	}
}
declare module "model/AllocationProposalsQuery" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { IAllocationProposalData } from "types/IEntity";
	type TProposal = {
		proposals: IAllocationProposalData[];
	};
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	export default class AllocationProposalsQuery {
		private _model;
		constructor(_model: ODataModel);
		submit(sBatchGroupId: string): Promise<TProposal>;
	}
}
declare module "model/AllocationProposalData" {
	import JSONModel from "sap/ui/model/json/JSONModel";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { CalendarDayType } from "sap/ui/unified/library";
	import { IAllocationProposalData } from "types/IEntity";
	export interface IAllocationProposalCalInterval {
		SELECTABLE: boolean;
		VISIT_START_TS: Date;
		VISIT_END_TS: Date;
		UI_TITLE?: string;
		UI_TEXT?: string;
		UI_TEXT_SHORT?: string;
		UI5_COLOR?: string;
		UI5_DAY_TYPE?: CalendarDayType;
	}
	export interface IAllocationProposalCalRow {
		TITLE: string;
		Proposals: IAllocationProposalCalInterval[];
		Headers?: IAllocationProposalCalInterval[];
	}
	export interface IAllocationProposalCal {
		StartDate: Date;
		MinDate: Date;
		MaxDate: Date;
		Rows: IAllocationProposalCalRow[];
		Views: {
			selected?: string;
			values?: any[];
		};
	}
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	export default class AllocationProposalData {
		private static readonly DEFAULT_VIEW_KEY;
		private static _instance;
		private model?;
		private constructor();
		static getInstance(): AllocationProposalData;
		setODataModel(model: ODataModel): this;
		createModel(): JSONModel;
		map(oCalendarData: IAllocationProposalCal, aRowset: IAllocationProposalData[]): void;
		private updateDefaultView;
	}
}
declare module "helper/entitySet" {
	import { Entityset } from "dbme/w/lib/core/library";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	export type TODataEntity = {
		name: string;
		entityType: string;
	};
	export function getEntityName(entitySet: Entityset, model?: ODataModel): string | Promise<string>;
	export function pathToEntitySet(path: string): string;
}
declare module "helper/AllocationProposal" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import Event from "sap/ui/base/Event";
	import Context from "sap/ui/model/Context";
	import List from "sap/m/List";
	import IController from "controller/CreateApt.controller";
	import AllocPropCalBridge from "helper/AllocPropCalBridge";
	import { IReschedulingController } from "types/IController";
	import MessageParser from "sap/ui/core/message/MessageParser";
	interface IODataModel extends ODataModel {
		oMessageParser: MessageParser;
		setMessageParser(oMessageParser: MessageParser): void;
	}
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class AllocationProposal {
		static getTestModel(this: IController): Promise<IODataModel>;
		static _createAllocationProposalRequest(this: IController): Promise<IODataModel>;
		/**
		 * @param {sap.ui.base.Event} oEvent
		 */
		static onBtnActionAllocateSearch(this: IController, oEvent: Event): void;
		/**
		 * Add create allocation proposal request into Create Order batch
		 */
		static _createAllocationProposal(this: IController, oCtx?: Context): Context | boolean;
		static _deselectAllocationProposal(this: IController): void;
		/**
		 * @param {?sap.ui.model.Context} oCtx	Binding context of Allocation proposal
		 */
		static _destroyAllocationProposal(this: IController, oCtx?: Context, bRecalculate?: boolean): void;
		private static _createAllocationProposalList;
		static createAllocationProposalList(this: IController, aRowset: any[]): Promise<List | AllocPropCalBridge>;
		static handleNoProposalFound(this: IReschedulingController, oError?: any, oModel?: IODataModel, bDisplay?: boolean): string;
		static onAllocationProposalSelect(this: IController, oEvent: Event): void;
		private static clearSelectableAllocationProposalModel;
	}
}
declare module "helper/TimeSlotsListFactory" {
	import List from "sap/m/List";
	import { IOrderAwareController as IController } from "types/IController";
	import TimeSlotsContainer from "helper/TimeSlotsContainer";
	import Control from "sap/ui/core/Control";
	import { IOrderParameterEntity } from "types/IEntity";
	export const TIME_SLOTS_LIST_KEY = "list";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class TimeSlotsListFactory {
		static create(this: IController, oData: IOrderParameterEntity): List;
		static destroy(oListContainer: TimeSlotsContainer, oParent: Control): void;
	}
}
declare module "eh/ParametersListEventHandler" {
	import ListItemBase from "sap/m/ListItemBase";
	import Event from "sap/ui/base/Event";
	import { IReschedulingController } from "types/IController";
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class ParametersListEventHandler {
		/**
		 * @since 2021.09.12
		 * @see ListParameters.fragment.xml
		 *
		 * Handle default selected parameters on Parameters tab
		 */
		static onUpdateFinished(this: IReschedulingController, oEvent: Event): void;
		/**
		 * @since 2021.09.10
		 * @see FormOrderDateParameters.fragment.xml
		 *
		 * Handle default selected parameters on Date tab. Relevant for:
		 * - order create
		 * - order action: reschedule
		 */
		static onUpdateFinishedForDate(this: IReschedulingController, oEvent: Event): void;
		/**
		 * Handle order parameter switch change. Relevant for:
		 * - order create
		 * - order action: reschedule
		 */
		static onOrderParameterChange(this: IReschedulingController, oSelectable: ListItemBase): void;
		private static propagateToDemand;
	}
}
declare module "controller/CreateApt.controller" {
	import Base from "dbme/w/lib/core/controller/Base";
	import { IDemandsAwareController, IReschedulingController } from "types/IController";
	import DemandTemplate from "helper/DemandTemplate";
	import ScreenSectionTable from "helper/ScreenSectionTable";
	import VerticalLayout from "sap/ui/layout/VerticalLayout";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import Context from "sap/ui/model/Context";
	import Event from "sap/ui/base/Event";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import Control from "sap/ui/core/Control";
	import List from "sap/m/List";
	import { ChangeGroupDefinition } from "sap/ui/model/odata/v2/ODataModel";
	import SmartField from "sap/ui/comp/smartfield/SmartField";
	import Table from "sap/m/Table";
	import IconTabFilter from "sap/m/IconTabFilter";
	import AllocPropCalBridge from "helper/AllocPropCalBridge";
	import { SerializedTabsType } from "types/ITabsAware";
	import TimeSlotsContainer from "helper/TimeSlotsContainer";
	import { IOrderEntity } from "types/IEntity";
	import ScreenSectionBindingRefresh from "helper/ScreenSectionBindingRefresh";
	interface IContextAware {
		context?: Context;
	}
	interface ICreateOrderHelper {
		data?: any;
		path?: string;
	}
	interface ICreateOrderResult {
		helper?: ICreateOrderHelper;
		order?: IContextAware;
	}
	type TChangeGroups = Record<string, ChangeGroupDefinition>;
	/**
	 * @since 1.6.21	<001> CR: display allocation proposals in planning calendar control
	 *
	 * @namespace dbme.srs.com.tdo.controller
	 */
	export default class CreateApt extends Base implements IDemandsAwareController, IReschedulingController {
		helper: {
			demandTemplate: typeof DemandTemplate;
			sectionTable: ScreenSectionTable;
			sectionBindingRefresh: ScreenSectionBindingRefresh;
		};
		/**
		 * @see DateFormTemplate.getDateForm()
		 * @var {?sap.ui.layout.VerticalLayout}
		 */
		_oDateListContainer?: VerticalLayout;
		/**
		 * In CreateApt - same as this._oDateListContainer
		 * Required for dbme.srs.com.tdo.types.IReschedulingController
		 *
		 * @see ParametersListEventHandler.onOrderParameterChange()
		 * @var {?sap.ui.layout.VerticalLayout}
		 */
		oTimeSlotsContainer?: TimeSlotsContainer;
		oSerializedTabs?: SerializedTabsType;
		_oJSONModel?: JSONModel;
		_oHelper?: ICreateOrderHelper;
		_oCreateCtx?: Context;
		_mAllocationProposalCtx?: Record<string, Context>;
		_oLocationList?: List;
		_oDateParameters?: List;
		_oAgreementsList?: List;
		_oParametersList?: List;
		_oDemandsTable?: Table;
		_oDateForm?: Record<string, SmartField>;
		_oAllocationProposalList?: List | AllocPropCalBridge;
		/**
		 * Allocation proposals from TestMode model
		 */
		_mTest?: Record<string, Context>;
		onInit(): void;
		/**
		 * override abstract method
		 */
		ODataToJSON(): void;
		_getJSONModel(): JSONModel;
		_isValidId(sId?: string): boolean;
		/**
		 * Get path of entity bound to search form at route "Create" (most likely previous route in browser history)
		 * @return {String}
		 */
		_getHelperEntityPath(sId: string): string | null;
		_getModelChangeGroups(): TChangeGroups;
		onRouteMatched(oEvent: Event): Promise<IconTabFilter[]>;
		/**
		 * Create new entity in dbme.w.lib.core.Entityset.TodoOrder
		 * @return {Promise}
		 */
		_createOrder(sHelperPath: string): Promise<ICreateOrderResult>;
		/**
		 * destroy before navigation
		 */
		_destroy(): void;
		_navToPrev(): void;
		/**
		 * @param {sap.ui.base.Event} oEvent
		 */
		onNavBack(oEvent: Event): void;
		/**
		 * @return {sap.ui.comp.smartform.SmartForm}
		 */
		_getForm(): SmartForm;
		/**
		 * Returns invalid controls
		 */
		_validate(): Control[];
		/**
		 * Recalculate tabs according to form selection
		 */
		_reloadTabs(): Promise<IconTabFilter[]>;
		_reloadAgreements(oDefaults?: {}): void;
		/**
		 * @return {Boolean}
		 */
		_checkLocation(): boolean;
		/**
		 * @return {Boolean}
		 */
		_checkAgreements(): boolean;
		/**
		 * @return {Boolean}
		 */
		_checkDateForm(): boolean;
		/**
		 * @return {Boolean}
		 */
		_checkSummary(): boolean;
		_reloadParameters(oDefaults?: {}): void;
		/**
		 * @param {sap.ui.base.Event} oEvent
		 */
		onFieldChange(oEvent: Event): void;
		_setLocationEnabled(): void;
		_setDateEnabled(): void;
		_setSaveEnabled(): void;
		/**
		 * Create appointment
		 * @param {sap.ui.base.Event} oEvent
		 */
		onBtnCreate(oEvent: Event): Promise<void>;
		/**
		 * destroy tabs contents before reloading tabs
		 */
		_destroyTabs(): void;
		onExit(): void;
		onOrderParameterChange(oEvent: Event): void;
		onOrderAllocationParameterChange(oEvent: Event): void;
		onOrderAgreementChange(oEvent: Event): void;
		onTabSelect(oEvent: Event): void;
		_getPlannedFromValue(): string | false;
		/**
		 * IReschedulingController extends the IOrderAwareController interface
		 */
		isCreateOrder(): boolean;
		/**
		 * IReschedulingController extends the IOrderAwareController interface
		 */
		getSelectedOrder(): IOrderEntity[];
		/**
		 * @see {ITabsAware}
		 */
		serializeTabs(): SerializedTabsType;
		onAllocationProposalSelect(oEvent: Event): void;
		createAllocationProposalList(aProposals: any[]): Promise<List | AllocPropCalBridge>;
		/**
		 * @since 2021.10.06
		 * @see ParametersListEventHandler.onOrderParameterChange()
		 * @param {boolean} bVisibility
		 */
		setPickupAtVisibility(bVisibility: boolean): void;
		/**
		 * @since 2021.10.06
		 * @see ParametersListEventHandler.onOrderParameterChange()
		 * @see IReschedulingController
		 */
		destroyAllocationProposal(bRecalculate?: boolean): void;
		/**
		 * <001>
		 */
		getSelectedAllocationProposalModelName(): string | undefined;
		/**
		 * <001>
		 */
		calendarModel(): JSONModel;
		getDemandsTable(): Table;
	}
}
declare module "helper/LocationList" {
	import List from "sap/m/List";
	import Event from "sap/ui/base/Event";
	import Context from "sap/ui/model/Context";
	import Filter from "sap/ui/model/Filter";
	import IController from "controller/CreateApt.controller";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class LocationList {
		static getLocationList(this: IController, bRecalc?: boolean): List;
		/**
		 * reload workshop locations according to selected demands
		 */
		static reloadLocations(this: IController): void;
		static onLocationDataReceived(this: IController, oEvent: Event): void;
		static onLocationListSelectionChange(this: IController, oEvent: Event): Context[];
		static getFilters(this: IController): Filter[];
	}
}
declare module "helper/Demand" {
	import ColumnListItem from "sap/m/ColumnListItem";
	import Event from "sap/ui/base/Event";
	import { IDemandsAwareController, TDemandOrigin } from "types/IController";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class Demand {
		private static _isEditable;
		private static _isRemovable;
		private static _toggleUxfc;
		/**
		 * @param {Control | Context | object} oItemOrigin
		 * @param {?Boolean} bManually true: manually created demand
		 * @param {?Boolean} bCopy true: created via copy of another demand
		 * @param {?Boolean} bReloadLocations true: reload locations list in create mode
		 * @return {Promise}	Resolves to demand table row - sap.m.ColumnListItem
		 */
		static _addDemand(this: IDemandsAwareController, oItemOrigin: TDemandOrigin, bManually?: boolean, bCopy?: boolean, bReloadLocations?: boolean): Promise<ColumnListItem>;
		static _removeDemand(this: IDemandsAwareController, oTargetDemand: ColumnListItem): void;
		/**
		 * @param {sap.ui.base.Event} oEvent
		 * @returns Promise[] Each promise resolves to demand template control
		 */
		static onDemandCopy(this: IDemandsAwareController, oEvent: Event): Promise<ColumnListItem>[];
		/**
		 * @param {sap.ui.base.Event} oEvent
		 */
		static onDemandRestore(this: IDemandsAwareController, oEvent: Event): void;
		/**
		 * @param {sap.ui.base.Event} oEvent
		 */
		static onDemandDelete(this: IDemandsAwareController, oEvent: Event): void;
		/**
		 * @see ScreenSectionEventHandler
		 */
		static _clearDeselectedDemands(this: IDemandsAwareController, aDeselected?: any[]): void;
		static _destroy(this: IDemandsAwareController): void;
	}
}
declare module "eh/ScreenSectionEventHandler" {
	import Control from "sap/ui/core/Control";
	import { IDemandsAwareController } from "types/IController";
	import ITabsAware, { IScreenSection } from "types/ITabsAware";
	export interface ITableSelectionChangeParams {
		controller: IDemandsAwareController;
		items: Control[];
		selected: boolean;
	}
	export interface ITableItemsLoadedParams {
		controller: ITabsAware;
		items: any[];
		section: IScreenSection;
	}
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class ScreenSectionEventHandler {
		/**
		 * @since 2021.09.29
		 * @see Component.initEventBus()
		 */
		static onTableSelectionChange(params: ITableSelectionChangeParams): void;
		/**
		 * @since 2021.12.08
		 * @see Component.initEventBus()
		 */
		static onTableItemsLoaded(params: ITableItemsLoadedParams): void;
	}
}
declare module "Component" {
	import UIComponent from "dbme/w/lib/core/ui/UIComponent";
	import Event from "sap/ui/base/Event";
	import Route from "sap/ui/core/routing/Route";
	import { ComponentEvent } from "model/Enums";
	/**
	 * @namespace dbme.srs.com.tdo
	 */
	export default class Component extends UIComponent {
		/**
		 * nested components relies on this property
		 */
		readonly Event: {
			ScreenSectionTableItemsLoaded: ComponentEvent.ScreenSectionTableItemsLoaded;
			ScreenSectionTableSelectionChange: ComponentEvent.ScreenSectionTableSelectionChange;
		};
		static metadata: {
			manifest: string;
			properties: {
				currentRouteName: {
					type: string;
					defaultValue: string;
				};
				currentController: {
					type: string;
					defaultValue: any;
				};
			};
		};
		readonly NESTED_ROUTE_PREFIX = "NESTED";
		getDBMEComponent(): string;
		init(): void;
		onRouteMatched(oEvent: Event): void;
		getCurrentRoute(): Route;
		protected initEventBus(): void;
	}
}
declare module "index" {
	import ComponentContainer from "sap/ui/core/ComponentContainer";
	const _default_1: ComponentContainer;
	export default _default_1;
}
declare module "control/EnabledCustomListItem" {
	import CustomListItem from "sap/m/CustomListItem";
	import Control from "sap/ui/core/Control";
	/**
	 * @namespace dbme.srs.com.tdo.control
	 */
	class EnabledCustomListItem extends CustomListItem {
		static renderer: any;
		static metadata: {
			properties: {
				selectEnabled: {
					type: string;
					defaultValue: boolean;
				};
			};
		};
		_oSingleSelectControl: Control;
		_oMultiSelectControl: Control;
		/**
		 * Override sap.m.ListItemBase.getSingleSelectControl
		 */
		getSingleSelectControl(bCreateIfNotExist: boolean): Control;
		/**
		 * Override sap.m.ListItemBase.getMultiSelectControl
		 */
		getMultiSelectControl(bCreateIfNotExist: boolean): Control;
	}
	export default EnabledCustomListItem;
}
declare module "control/EnabledListItem" {
	import StandardListItem from "sap/m/StandardListItem";
	import Control from "sap/ui/core/Control";
	/**
	 * @namespace dbme.srs.com.tdo.control
	 */
	class EnabledListItem extends StandardListItem {
		static renderer: any;
		static metadata: {
			properties: {
				selectEnabled: {
					type: string;
					defaultValue: boolean;
				};
			};
		};
		_oSingleSelectControl: Control;
		_oMultiSelectControl: Control;
		/**
		 * Override sap.m.ListItemBase.getSingleSelectControl
		 */
		getSingleSelectControl(bCreateIfNotExist: boolean): Control;
		/**
		 * Override sap.m.ListItemBase.getMultiSelectControl
		 */
		getMultiSelectControl(bCreateIfNotExist: boolean): Control;
	}
	export default EnabledListItem;
}
declare module "controller/App.controller" {
	import Controller from "sap/ui/core/mvc/Controller";
	/**
	 * @namespace dbme.srs.com.tdo.controller
	 */
	export default class App extends Controller {}
}
declare module "controller/Create.controller" {
	import Base from "dbme/w/lib/core/controller/Base";
	import Event from "sap/ui/base/Event";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import SmartTable from "sap/ui/comp/smarttable/SmartTable";
	import Filter from "sap/ui/model/Filter";
	import Context from "sap/ui/model/Context";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import Control from "sap/ui/core/Control";
	import { IOrderEntity, TVehicleCustomerEntity } from "types/IEntity";
	import { IFormAware, IOrderAwareController } from "types/IController";
	/**
	 * @namespace dbme.srs.com.tdo.controller
	 */
	export default class Create extends Base implements IOrderAwareController, IFormAware {
		_oFormCtx: Context;
		_oQueryArgs: any;
		private _oJSONModel?;
		onInit(): void;
		/**
		 * override abstract method
		 */
		ODataToJSON(): void;
		onRouteMatched(oEvent: Event): void;
		_onRouteMatched(): void;
		_initForm(): void;
		_getJSONModel(): JSONModel;
		_getDefaultData(): TVehicleCustomerEntity;
		_getFormCtx(bReload?: boolean): Context;
		onSearch(oEvent?: Event): void;
		_getTable(): SmartTable;
		_getForm(): SmartForm;
		_getSearchFilter(): Filter | null;
		getImmutableFormFields(): string[];
		/**
		 * Copy selected row data into form
		 */
		onSearchResultSelectionChange(oEvent: Event): void;
		onBtnCreate(oEvent: Event): void;
		_createOrder(): void;
		onRefresh(oEvent?: Event): void;
		onBeforeRebindSearchResults(oEvent: Event): void;
		onFieldChange(oEvent: Event): void;
		_validate(): Control[];
		_setSaveEnabled(): void;
		onExit(): void;
		/**
		 * interface IOrderAwareController
		 */
		isCreateOrder(): boolean;
		/**
		 * interface IOrderAwareController
		 */
		getSelectedOrder(): IOrderEntity[];
		onRootHierarchyAssignmentChange(oEvent: Event): void;
	}
}
declare module "model/OrderSaveCommand" {
	import { TODataCommandResult } from "dbme/c/odata/ODataCommand";
	import Base from "dbme/w/lib/core/controller/Base";
	interface IController extends Base {
		_defaultExpand: string[];
		onAfterSuccessfulAction(): void;
	}
	/**
	 * @namespace dbme.srs.com.tdo.model
	 */
	export default class OrderSaveCommand {
		private oCtrl;
		private _ignoredNavigation;
		private _orderData;
		private _model;
		constructor(oCtrl: IController);
		save(): Promise<TODataCommandResult | void>;
		private _getMessageTemplate;
		private _getRequestData;
	}
}
declare module "helper/OrderActionHandler" {
	import Event from "sap/ui/base/Event";
	import { OrderSelectionMode } from "model/Enums";
	import { IOrderEntity } from "types/IEntity";
	import { IOrderAwareController } from "types/IController";
	type TRowData = {
		data: IOrderEntity[];
	};
	type TActionSettings = {
		SELECTION_MODE?: OrderSelectionMode;
		FUNCTION?: string;
	};
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class OrderActionHandler {
		static handleAction(this: IOrderAwareController, oEvent: Event): void;
		protected static executeDialog(this: IOrderAwareController, oActionData: TActionSettings, sViewName: string): void;
		/**
		 * Make this method public to give the possibility for the action execution from dialog action controller
		 */
		static execute(this: IOrderAwareController, oActionData: TActionSettings, oDialogData?: {}): Promise<unknown>;
		protected static _getRows(this: IOrderAwareController, oActionData: TActionSettings): TRowData;
	}
}
declare module "controller/Details.controller" {
	import Base from "dbme/w/lib/core/controller/Base";
	import DemandTemplate from "helper/DemandTemplate";
	import { SerializedTabsType } from "types/ITabsAware";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import ScreenSectionTable from "helper/ScreenSectionTable";
	import Event from "sap/ui/base/Event";
	import { IDemandsAwareController, IOrderAwareController } from "types/IController";
	import { IOrderEntity } from "types/IEntity";
	import IconTabFilter from "sap/m/IconTabFilter";
	import Toolbar from "sap/m/Toolbar";
	import Table from "sap/m/Table";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import ScreenSectionBindingRefresh from "helper/ScreenSectionBindingRefresh";
	/**
	 * @namespace dbme.srs.com.tdo.controller
	 */
	export default class Details extends Base implements IDemandsAwareController, IOrderAwareController {
		helper: {
			demandTemplate: typeof DemandTemplate;
			sectionTable: ScreenSectionTable;
			sectionBindingRefresh: ScreenSectionBindingRefresh;
		};
		_defaultExpand: string[];
		oSerializedTabs?: SerializedTabsType;
		_oDemandsTable?: Table;
		_oJSONModel?: JSONModel;
		private sOrderId?;
		private bTabsContentCreated;
		private _bDemandTableRowsCreated;
		onInit(): void;
		_getModelChangeGroups(): Record<string, any>;
		onRequestFailed(oEvt: Event): void;
		ODataToJSON(): void;
		_getJSONModel(): JSONModel;
		onRouteMatched(oEvent: Event): void;
		private _initBinding;
		onOrderDataReceived(oEvent: Event): Promise<IconTabFilter[]>;
		private _getDemandTableData;
		private _createDemandTableRows;
		onBtnEdit(oEvent: Event): void;
		onBtnSave(oEvent: Event): void;
		private _toggleEdit;
		_getForm(): SmartForm;
		onFieldChange(oEvent: Event): void;
		_getToolbar(bReload?: boolean): Toolbar;
		private _destroyActionButtons;
		private _reloadActionButtons;
		onBtnGoToPlanner(oEvent: Event): void;
		/**
		 * Cancel order edit
		 */
		onBtnCancel(oEvent: Event): void;
		onBtnReload(oEvent?: Event): void;
		onAfterSuccessfulAction(): void;
		/**
		 * - flush OData model changes
		 * - make order non-editable
		 * - remove demands table content
		 */
		_destroy(bUnbind?: boolean, sOrderId?: string): void;
		private _validate;
		/**
		 * IDemandsAwareController
		 */
		_setSaveEnabled(): void;
		onExit(): void;
		onPageNavBack(oEvent: Event): void;
		onOrderParameterChange(oEvent: Event): void;
		onOrderAgreementChange(oEvent: Event): void;
		onTabSelect(oEvent: Event): void;
		/**
		 * interface IOrderAwareController
		 */
		isCreateOrder(): boolean;
		/**
		 * interface IOrderAwareController
		 */
		getSelectedOrder(): IOrderEntity[];
		/**
		 * @see {ITabsAware}
		 */
		serializeTabs(): SerializedTabsType;
		/**
		 * IDemandsAwareController
		 */
		_setLocationEnabled(): void;
	}
}
declare module "controller/Index.controller" {
	import Base from "dbme/w/lib/core/controller/Base";
	import IconTabFilter from "sap/m/IconTabFilter";
	import Event from "sap/ui/base/Event";
	import Filter from "sap/ui/model/Filter";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import Table from "sap/ui/table/Table";
	import { IOrderEntity } from "types/IEntity";
	import { IOrderAwareController, IAfterAction } from "types/IController";
	/**
	 * @namespace dbme.srs.com.tdo.controller
	 */
	export default class Index extends Base implements IOrderAwareController, IAfterAction {
		_aRouteQueryFilters: Filter[];
		_oQueryArgs: Record<string, Filter>;
		_oJSONModel?: JSONModel;
		_oTable?: Table;
		private _aLastTableFilters;
		private _sLastFilter?;
		onInit(): void;
		onRouteMatched(oEvent: Event): Promise<void | Record<string, any>>;
		ODataToJSON(): void;
		_getJSONModel(): JSONModel;
		_getTable(): Table;
		private scrollTableToLeft;
		onAfterVariantApply(oEvent: Event): void;
		onSearch(oEvent: Event): void;
		private _getSearchField;
		private _getSearchFilter;
		private _getFilters;
		private _applyFilters;
		private _getTabs;
		_getSelectedTab(): IconTabFilter;
		private _getTabFilter;
		onTabSelect(oEvent: Event): void;
		onBtnReload(oEvent: Event): void;
		private _reloadActionButtons;
		onValueChange(oEvent: Event): void;
		onAfterSuccessfulAction(): void;
		onRowPress(oEvent: Event): boolean;
		onBtnCreate(oEvent: Event): void;
		oBeforeRebindTable(oEvent: Event): void;
		onTableInit(oEvent: Event): void;
		/**
		 * interface IOrderAwareController
		 */
		isCreateOrder(): boolean;
		/**
		 * interface IOrderAwareController
		 */
		getSelectedOrder(): IOrderEntity[];
	}
}
declare module "controller/NotFound.controller" {
	import * as Controller from "dbme/w/lib/core/controller/NotFound";
	/**
	 * @namespace dbme.srs.com.tdo.controller
	 */
	export default class NotFound extends Controller {}
}
declare module "controller/action/Replan.controller" {
	import Base from "dbme/w/lib/core/controller/Base";
	import Dialog from "sap/m/Dialog";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import SmartField from "sap/ui/comp/smartfield/SmartField";
	import Event from "sap/ui/base/Event";
	import SmartForm from "sap/ui/comp/smartform/SmartForm";
	import { IOrderParameterEntity } from "types/IEntity";
	/**
	 * @namespace dbme.srs.com.tdo.controller.action
	 */
	export default class Replan extends Base {
		private _oParentController?;
		private _oLocalJSONModel?;
		private oActionData?;
		onInit(): void;
		_setPickupAtVisibility(): Promise<IOrderParameterEntity>;
		_getJSONModel(): JSONModel;
		_getDialog(): Dialog;
		onBtnDialogOK(oEvent: Event): Promise<any> | boolean;
		onBtnDialogCancel(oEvent: Event): void;
		/**
		 * @param {sap.ui.base.Event} oEvent	Value change event
		 */
		onValueChange(oEvent: Event): void;
		_validate(): SmartField[];
		_getForm(): SmartForm;
		/**
		 * Override abstract method
		 */
		ODataToJSON(): void;
	}
}
declare module "types/IContainer" {
	import Control from "sap/ui/core/Control";
	/**
	 * @namespace dbme.srs.com.tdo.types
	 */
	export default interface IContainer {
		getContent(): Control[];
		removeContent(item: Control): void;
	}
}
declare module "helper/MessageDialog" {
	import Dialog from "sap/m/Dialog";
	type TMessageDialogSettings = {
		title: string;
		html: string;
	};
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class MessageDialog {
		static error(settings: TMessageDialogSettings): Dialog;
	}
}
declare module "controller/action/Reschedule.controller" {
	import Controller from "dbme/w/lib/core/controller/Base";
	import Event from "sap/ui/base/Event";
	import Dialog from "sap/m/Dialog";
	import List from "sap/m/List";
	import JSONModel from "sap/ui/model/json/JSONModel";
	import ListItemBase from "sap/m/ListItemBase";
	import TimeSlotsContainer from "helper/TimeSlotsContainer";
	import Table from "sap/m/Table";
	import Context from "sap/ui/model/Context";
	import AllocPropCalBridge from "helper/AllocPropCalBridge";
	import CalendarAppointment from "sap/ui/unified/CalendarAppointment";
	import IconTabBar from "sap/m/IconTabBar";
	import IconTabFilter from "sap/m/IconTabFilter";
	import IContainer from "types/IContainer";
	import { IOrderEntity } from "types/IEntity";
	import { IOrderAwareController, IReschedulingController } from "types/IController";
	enum ActionTabKey {
		Date = "Date",
		Demands = "Demands",
		AllocationProposal = "AllocProp"
	}
	/**
	 * @since 1.6.21	<001> CR: display allocation proposals in planning calendar control
	 *
	 * @namespace dbme.srs.com.tdo.controller.action
	 */
	export default class Reschedule extends Controller implements IReschedulingController {
		oTimeSlotsContainer: TimeSlotsContainer;
		oParentController: IOrderAwareController;
		private _oLocalJSONModel;
		_oAllocationProposalList: List | AllocPropCalBridge;
		private _oFormContainer;
		private _oDemandsTable;
		onInit(): void;
		private _reloadParameters;
		setPickupAtVisibility(bVisibility: boolean): void;
		_getJSONModel(): JSONModel;
		onBtnActionAllocateSearch(oEvent: Event): void;
		private _getAllocationProposalFilters;
		private _getParametersData;
		private _getDemandsData;
		onAllocationProposalSelect(oEvent?: Event): void;
		onBtnDialogCancel(oEvent: Event): void;
		private _validate;
		onValueChange(oEvent: Event): void;
		/**
		 * @see ParametersListEventHandler.onOrderParameterChange()
		 * @see IReschedulingController
		 */
		destroyAllocationProposal(): void;
		onOrderAllocationParameterChange(oEvent: Event): void;
		private _serializeString;
		getSelectedAllocationProposal(): ListItemBase | CalendarAppointment;
		getSelectedAllocationProposalContext(): Context;
		private setFormEnabled;
		private setAllocationProposalSelectedFlag;
		allocationProposalSearch(): Promise<any>;
		private bindAllocationProposalListItems;
		/**
		 * Override abstract method
		 */
		ODataToJSON(): void;
		protected _getDialog(): Dialog;
		protected _getMainContainer(): IconTabBar;
		protected _getTab(key: ActionTabKey | string): IconTabFilter;
		protected _getAllocationList(): List | AllocPropCalBridge;
		protected _getFormContainer(): IContainer;
		getDemandsTable(): Table;
		private _getForm;
		private _getParametersList;
		/**
		 * execute action
		 */
		onBtnDialogOK(oEvent: Event): Promise<any> | boolean;
		/**
		 * <001>
		 */
		getSelectedAllocationProposalModelName(): string | undefined;
		/**
		 * <001>
		 */
		calendarModel(): JSONModel;
		/**
		 * IReschedulingController extends the IOrderAwareController interface
		 */
		isCreateOrder(): boolean;
		/**
		 * IReschedulingController extends the IOrderAwareController interface
		 */
		getSelectedOrder(): IOrderEntity[];
	}
}
declare module "eh/FieldMakeCodeEventHandler" {
	import Event from "sap/ui/base/Event";
	import Base from "dbme/w/lib/core/controller/Base";
	import { IFormAware } from "types/IController";
	interface IController extends Base, IFormAware {}
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class FieldMakeCodeEventHandler {
		static onInnerControlsCreated(this: IController, event: Event): void;
	}
}
declare module "eh/FieldModelCodeEventHandler" {
	import Base from "dbme/w/lib/core/controller/Base";
	import Event from "sap/ui/base/Event";
	import { IFormAware } from "types/IController";
	interface IController extends Base, IFormAware {}
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class FieldModelCodeEventHandler {
		static onInnerControlsCreated(this: IController, event: Event): void;
	}
}
declare module "eh/OrderListPrintHandler" {
	import Event from "sap/ui/base/Event";
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class OrderListPrintHandler {
		static onBtnPrint(oEvent: Event): void;
		static onBtnExportColsCancel(oEvent: Event): void;
		static onBtnExportColsOK(oEvent: Event): void;
		private static excel;
		private static print;
		private static getExportUrl;
	}
}
declare module "eh/OrderPrintHandler" {
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class OrderPrintHandler {
		static print(oEvent: Event): void;
	}
}
declare module "eh/PreferredComEventHandler" {
	import Event from "sap/ui/base/Event";
	import Context from "sap/ui/model/odata/v2/Context";
	import { IOrderAwareController } from "types/IController";
	interface IController extends IOrderAwareController {
		_setSaveEnabled(): void;
	}
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class PreferredComEventHandler {
		static onInnerControlsCreated(this: IController, oEvent: Event): void;
		static onSelectionChange(this: IController, oEvent: Event, oCtx?: Context): void;
	}
}
declare module "eh/RescheduleDemandTableHandler" {
	import Event from "sap/ui/base/Event";
	import RescheduleController from "controller/action/Reschedule.controller";
	/**
	 * @namespace dbme.srs.com.tdo.eh
	 */
	export default class RescheduleDemandTableHandler {
		static onSelectionChange(this: RescheduleController, event: Event): void;
		static onBeforeRebind(this: RescheduleController, event: Event): void;
		/**
		 * Force UTC conversion for date/time fields since dateFormatSettings from SmartTable are not propagated
		 */
		static onInitialise(this: RescheduleController, event: Event): void;
		static onDataReceived(this: RescheduleController, event: Event): void;
	}
}
declare module "format/nl2br" {
	/**
	 * @name dbme.srs.com.tdo.format.nl2br
	 */
	export default function (sString: string): string;
}
declare module "format/serviceItemIgnoredFields" {
	export const SERVICE_ITEM_IGNORED: string[];
	/**
	 * @name dbme.srs.com.tdo.format.serviceItemIgnoredFields
	 */
	export default function (aFields: string[]): string;
}
declare module "format/workItemIgnoredFields" {
	export const WORK_ITEM_IGNORED: string[];
	/**
	 * @name dbme.srs.com.tdo.format.workItemIgnoredFields
	 */
	export default function (aFields: string[]): string;
}
declare module "helper/WorkshopWorkingHours" {
	import Dialog from "sap/m/Dialog";
	import Event from "sap/ui/base/Event";
	import Controller from "sap/ui/core/mvc/Controller";
	/**
	 * @namespace dbme.srs.com.tdo.helper
	 */
	export default class WorkshopWorkingHours {
		private static dialog?;
		static show(this: Controller, oEvent: Event): Promise<Dialog>;
		static select(oEvent: Event): void;
		static onDateChange(oEvent: Event): void;
		static cancel(oEvent: Event): void;
	}
}
