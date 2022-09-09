declare module "vss/com/rcl/library" {
	export enum EventChannel {
		RentalContractManagement = "RentalContractManagement"
	}
	export enum RentalClassType {
		Accessory = "A",
		MainDevice = "M"
	}
}
declare module "vss/com/rcl/cart/ICartModel" {
	import JSONModel from "sap/ui/model/json/JSONModel";
	import { RentalClassType } from "vss/com/rcl/library";
	export enum IconUri {
		CartAdd = "sap-icon://cart-3",
		CartRemove = "sap-icon://cart-2",
		CartEmpty = "sap-icon://cart",
		CartFull = "sap-icon://cart-full"
	}
	export type TContractItemData = {
		Equipment: string;
		SerialNumber: string;
		Material: string;
		Plant: string;
		StorageLocation: string;
		RentalClassType?: RentalClassType;
	};
	export type TCartItem = {
		data: TContractItemData;
		Quantity: number;
		ValidityStartDate?: Date;
		ValidityEndDate?: Date;
	};
	export interface ICartModel {
		add(...newItems: TCartItem[]): void;
		remove(...forRemove: TCartItem[]): void;
		model(): JSONModel;
	}
}
declare module "vss/com/rcl/cart/ICart" {
	import { TCartItem, ICartModel } from "vss/com/rcl/cart/ICartModel";
	export default interface ICart {
		getItems(): TCartItem[];
		isEmpty(): boolean;
		flush(): void;
		add(...newItems: TCartItem[]): void;
		remove(...forRemove: TCartItem[]): void;
		model(): ICartModel;
	}
}
declare module "vss/com/rcl/cc/i18n/Translate" {
	import ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function setBundle(b: ResourceBundle): void;
	/**
	 * @name vss.com.rcl.cc.i18n.Translate
	 */
	export default function (key: string, args?: any[]): string;
}
declare module "vss/com/rcl/cc/Component" {
	import AppComponent from "sap/fe/core/AppComponent";
	/**
	 * @link https://ui5.sap.com/1.96.1/resources/sap/fe/core/AppComponent-dbg.js
	 * @namespace vss.com.rcl.cc
	 */
	export default class Component extends AppComponent {
		static metadata: {
			manifest: string;
			library: string;
		};
		init(): void;
		getStartupParameters(): Promise<{
			preferredMode: string[];
		}>;
	}
}
declare module "vss/com/rcl/cc/model/Enums" {
	export enum FixedString {
		eol = "\n\r"
	}
	export enum ModelName {
		action = "action",
		device = "device",
		i18n = "i18n",
		local = "local",
		ui = "ui",
		pageInternal = "pageInternal",
		internal = "internal"
	}
	export enum RouteName {
		ContractList = "ContractList",
		ContractObjectPage = "ContractObjectPage",
		ContractItemObjectPageOV = "ContractItemObjectPageOV",
		ContractItemObjectPageLG = "ContractItemObjectPageLG",
		ContractItemObjectPagePG = "ContractItemObjectPagePG",
		ContractItemObjectPagePR = "ContractItemObjectPagePR"
	}
	export enum DataSourceName {
		mainService = "mainService"
	}
	export enum ControlId {
		/**
		 * @link https://sapui5.hana.ondemand.com/1.96.1/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
		 */
		cancelButton = "fe::FooterBar::StandardAction::Cancel",
		saveButton = "fe::FooterBar::StandardAction::Save",
		contractItemsTable = "fe::table::_Items::LineItem"
	}
	export enum VSSEventId {
		BillingCancel = "BILLING_CANCEL",
		BillingCreate = "BILLING_CREATE"
	}
	export enum HTTPMethod {
		GET = "GET",
		PUT = "PUT",
		POST = "POST",
		DELETE = "DELETE"
	}
	export enum EditMode {
		Editable = "Editable"
	}
	export enum RAPAction {
		Prepare = "com.sap.gateway.srvd.pacg.rso_cm.v0001.Prepare"
	}
	export enum EntitySet {
		ItemGroup = "ItemGroup",
		ItemGroupText = "ItemGroupText",
		ItemGroupCategory = "ItemGroupCategory"
	}
	export enum UnitOfMeasure {
		Piece = "PC"
	}
}
declare module "vss/com/rcl/cc/model/InvokeActionPrepare" {
	import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	/**
	 * invoke validation
	 * @link https://help.sap.com/docs/ABAP_PLATFORM_2020/fc4c71aa50014fd1b43721701471913d/707c7e93ecab48ea9e6b9c3c893a792e.html?locale=en-US
	 *
	 * @namespace vss.com.rcl.cc.model
	 */
	export default class InvokeActionPrepare {
		private _api;
		private _context;
		constructor(_api: IObjectPageExtensionAPI);
		invoke(): Promise<void>;
	}
}
declare module "vss/com/rcl/cc/model/ContractCreateCommand" {
	import { TDraftAdministrativeData } from "vss/com/fe/DraftTypes";
	type TDocCreateOut = void;
	/**
	 * @namespace vss.com.rcl.cc.model
	 */
	export default class ContractCreateCommand {
		private _model;
		constructor();
		call(draftAdministrativeData: TDraftAdministrativeData): Promise<TDocCreateOut>;
		messageDialog(): import("sap/m/Dialog").default | undefined;
	}
}
declare module "vss/com/rcl/utils/Logger" {
	/**
	 * @namespace vss.com.rcl.utils
	 */
	export function debug(message: string): void;
	export function error(message: string): void;
	export function info(message: string): void;
	export function warning(message: string): void;
}
declare module "vss/com/rcl/utils/Container" {
	import { IListReportExtensionAPI, IFilterBar } from "vss/com/fe/ListReport";
	import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	import IAppComponent from "vss/com/fe/IAppComponent";
	import IAppContainer, { IAnyTable } from "vss/com/fe/IAppContainer";
	import UIComponent from "sap/ui/core/UIComponent";
	import ICart from "vss/com/rcl/cart/ICart";
	export interface IAppContainerExtended extends IAppContainer {
		get cart(): ICart;
		set cart(cart: ICart);
	}
	/**
	 * @namespace vss.com.rcl.utils
	 */
	export default class Container implements IAppContainerExtended {
		private static _instance;
		private _table?;
		private _listReportAPI?;
		private _objectPageAPI?;
		private _com?;
		private _mainList?;
		private _mainFilter?;
		private _cart?;
		static getInstance(): Container;
		get com(): UIComponent;
		set com(com: UIComponent);
		get listReportAPI(): IListReportExtensionAPI;
		set listReportAPI(api: IListReportExtensionAPI);
		get objectPageAPI(): IObjectPageExtensionAPI;
		set objectPageAPI(api: IObjectPageExtensionAPI);
		get table(): IAnyTable;
		set table(table: IAnyTable);
		get mainList(): IAppComponent;
		set mainList(com: IAppComponent);
		get cart(): ICart;
		set cart(cart: ICart);
		get mainFilter(): IFilterBar;
		set mainFilter(filter: IFilterBar);
	}
}
declare module "vss/com/rcl/cc/eh/SaveHandler" {
	import { IObjectPageController } from "vss/com/fe/ObjectPage";
	import Event from "sap/ui/base/Event";
	/**
	 * @namespace vss.com.rcl.cc.eh
	 */
	export default class SaveHandler {
		static onSave(this: IObjectPageController, event: Event): void;
	}
}
declare module "vss/com/rcl/cc/ext/CartItemsToContract" {
	import ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";
	import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	import { TCartItem } from "vss/com/rcl/cart/ICartModel";
	/**
	 * @namespace vss.com.rcl.cc.ext
	 */
	export default class CartItemsToContract {
		private _api;
		private _itemsBinding;
		constructor(_api: IObjectPageExtensionAPI, _itemsBinding: ODataListBinding);
		create(...cartItems: TCartItem[]): Promise<unknown>;
	}
}
declare module "vss/com/rcl/cc/ext/OverrideSaveButton" {
	import { IObjectPageController } from "vss/com/fe/ObjectPage";
	/**
	 * replace save button in footer
	 *
	 * @namespace vss.com.rcl.cc.ext
	 */
	export default class OverrideSaveButton {
		private _ctrl;
		constructor(_ctrl: IObjectPageController);
		/**
		 * @link https://ui5.sap.com/1.96.1/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
		 */
		private createSaveButton;
	}
}
declare module "vss/com/rcl/utils/FioriTable" {
	import ResponsiveTable from "sap/m/Table";
	import Control from "sap/ui/core/Control";
	import Table from "sap/ui/table/Table";
	/**
	 * @type {sap.ui.mdc.Table}
	 */
	export interface IFioriTable extends Control {
		_oTable: ResponsiveTable | Table;
		initialized(): Promise<this>;
	}
	export function getResponsiveTable(table: IFioriTable): ResponsiveTable;
	export function getTable(table: IFioriTable): Table;
}
declare module "vss/com/rcl/cc/ext/controller/ObjectPageExtension.controller" {
	import { IObjectPageController } from "vss/com/fe/ObjectPage";
	const override: {
		onInit(this: IObjectPageController): void;
		onBeforeRendering(this: IObjectPageController, event: Event): void;
		onAfterRendering(this: IObjectPageController, event: Event): void;
		/**
		 * - Validate Contract data
		 * - Propagate CART items into CreateContract entity
		 */
		onPageReady(this: IObjectPageController, state: any): void;
		onPendingFilters(this: IObjectPageController, event: Event): void;
		onViewNeedsRefresh(this: IObjectPageController, event: Event): void;
	};
	/**
	 * @namespace vss.com.rcl.cc.ext.controller
	 */
	export default override;
}
declare module "vss/com/rcl/ml/model/Enums" {
	export enum EventId {
		MainListComponentOnInit = "MainListComponentOnInit",
		MainListControllerOnInit = "MainListControllerOnInit",
		MainListControllerOnViewNeedsRefresh = "MainListControllerOnViewNeedsRefresh",
		MainListControllerOnPageReady = "MainListControllerOnPageReady",
		MainListControllerOnPendingFilters = "MainListControllerOnPendingFilters",
		MainListControllerOnAfterRendering = "MainListControllerOnAfterRendering",
		MainListControllerOnBeforeRendering = "MainListControllerOnBeforeRendering",
		MainListOnTableUpdateFinished = "MainListOnTableUpdateFinished",
		MainListOnActionButtonAddToCartPress = "MainListOnActionButtonAddToCartPress"
	}
	export enum ModelName {
		cart = "cart",
		internal = "internal",
		i18n = "i18n"
	}
	export enum ControlId {
		accessoryTable = "fe::table::accessoryTab::LineItem",
		materialTable = "fe::table::MaterialTab::LineItem",
		rootFilter = "fe::FilterBar::Root",
		rootTable = "fe::table::RootTab::LineItem"
	}
	export enum FieldGroupId {
		ColumnActions = "ColumnActions"
	}
}
declare module "vss/com/rcl/ml/types/EventParams" {
	import Event from "sap/ui/base/Event";
	import IAppComponent from "vss/com/fe/IAppComponent";
	import { IListReportController } from "vss/com/fe/ListReport";
	import { IFioriTable } from "vss/com/rcl/utils/FioriTable";
	export type $MainListComponentOnInit = {
		component: IAppComponent;
	};
	export type $MainListEvent = {
		controller: IListReportController;
		event: Event;
	};
	export interface $MainListControllerOnInit {
		controller: IListReportController;
		controls: IFioriTable[];
	}
}
declare module "vss/com/rcl/ml/Component" {
	import AppComponent from "sap/fe/core/AppComponent";
	import IAppComponent, { IRoutingService } from "vss/com/fe/IAppComponent";
	import IAppContainer from "vss/com/fe/IAppContainer";
	/**
	 * @namespace vss.com.rcl.ml
	 */
	export default class Component extends AppComponent implements IAppComponent {
		static metadata: {
			manifest: string;
			library: string;
		};
		getAppContainer(): IAppContainer;
		init(): void;
		getRoutingService(): IRoutingService;
	}
}
declare module "vss/com/rcl/ml/eh/CartItemEventHandler" {
	import Event from "sap/ui/base/Event";
	import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	import { IObjectPageController } from "vss/com/fe/ObjectPage";
	/**
	 * @namespace vss.com.rcl.ml.eh
	 */
	export default class CartItemEventHandler {
		static onActionButtonAddToCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Event): void;
		private static propagateAccessoryToMainDeviceFilter;
	}
}
declare module "vss/com/rcl/ml/eh/MainListTableEventHandler" {
	import Event from "sap/ui/base/Event";
	import { IListReportController } from "vss/com/fe/ListReport";
	/**
	 * @namespace vss.com.rcl.ml.eh
	 */
	export default class MainListTableEventHandler {
		static onTableUpdateFinished(this: IListReportController, event: Event): void;
	}
}
declare module "vss/com/rcl/ml/ext/ListReportTableExtension" {
	import { IFioriTable } from "vss/com/rcl/utils/FioriTable";
	/**
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ListReportTableExtension {
		private _ctrl;
		private _table;
		constructor(table: IFioriTable);
		private initTableEvents;
	}
}
declare module "vss/com/rcl/ml/ext/ObjectPageSectionExtension" {
	import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	/**
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ObjectPageSectionExtension {
		private _api;
		private _pageLayout;
		constructor(_api: IObjectPageExtensionAPI);
		private bindAccessoriesVisibility;
	}
}
declare module "vss/com/rcl/ml/ext/ObjectPageToolbarExtension" {
	import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	/**
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ObjectPageToolbarExtension {
		private _api;
		private _pageLayout;
		private _headerTitle;
		constructor(_api: IObjectPageExtensionAPI);
		private createActionAddToCart;
	}
}
declare module "vss/com/rcl/ml/ext/controller/ListReportExtension.controller" {
	import Event from "sap/ui/base/Event";
	import { IListReportController } from "vss/com/fe/ListReport";
	const override: {
		onInit(this: IListReportController): void;
		onBeforeRendering(this: IListReportController, event: Event): void;
		onAfterRendering(this: IListReportController, event: Event): void;
		onPageReady(this: IListReportController, state: unknown): void;
		onPendingFilters(this: IListReportController, event: Event): void;
		onViewNeedsRefresh(this: IListReportController, event: Event): void;
	};
	/**
	 * @namespace vss.com.rcl.ml.ext.controller
	 */
	export default override;
}
declare module "vss/com/rcl/ml/ext/controller/ObjectPageExtension.controller" {
	import { IObjectPageController } from "vss/com/fe/ObjectPage";
	const override: {
		onInit(this: IObjectPageController): void;
		onBeforeRendering(this: IObjectPageController, event: Event): void;
		onAfterRendering(this: IObjectPageController, event: Event): void;
		onPageReady(this: IObjectPageController, state: any): void;
		onPendingFilters(this: IObjectPageController, event: Event): void;
		onViewNeedsRefresh(this: IObjectPageController, event: Event): void;
	};
	/**
	 * @namespace vss.com.rcl.ml.ext.controller
	 */
	export default override;
}
declare module "vss/com/rcl/utils/waitFor" {
	export type $waitForSettings = {
		times: number;
		timeout: number;
	};
	/**
	 * @namespace vss.com.rcl.utils
	 */
	export default function (target: CallableFunction, limit?: $waitForSettings): Promise<unknown>;
}
