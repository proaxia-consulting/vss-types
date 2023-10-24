/**
 * VSS - Fiori Elements
 */

declare module "vss/com/fe/IAppContainer" {
	import ResponsiveTable from "sap/m/Table";
	import Table from "sap/ui/table/Table";
	import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";

	export type IAnyTable = Table | ResponsiveTable;

	export default interface IAppContainer {
		get table(): IAnyTable;
		set table(table: IAnyTable);
		get listReportAPI(): IListReportExtensionAPI;
		set listReportAPI(api: IListReportExtensionAPI);
		get objectPageAPI(): IObjectPageExtensionAPI;
		set objectPageAPI(api: IObjectPageExtensionAPI);
	}
}

declare module "vss/com/fe/IContainerAwareComponent" {
	import IAppContainer from "vss/com/fe/IAppContainer";
	import UIComponent from "sap/ui/core/UIComponent";

	export default interface IContainerAwareComponent extends UIComponent {
		getAppContainer(): IAppContainer;
	}
}

declare module "vss/com/fe/IAppComponent" {
	import AppComponent from "sap/fe/core/AppComponent";
	import IAppContainer from "vss/com/fe/IAppContainer";
	import Context from "sap/ui/model/odata/v4/Context";

	export type $TNavigateToContextParameters = {
		checkNoHashChange: boolean;
		asyncContext: boolean;
		bDeferredContext: boolean;
		editable: boolean;
		bPersistOPScroll: boolean;
		updateFCLLevel: boolean;
		noPreservationCache: boolean;
		bRecreateContext: boolean;
		bForceFocus: boolean;
	};

	/**
	 * @link https://sapui5.hana.ondemand.com/resources/sap/fe/core/services/RoutingServiceFactory-dbg.js
	 */
	export interface IRoutingService {
		navigateTo(oContext: Context, sRouteName: string, mParameterMapping?: Record<string, any>, bPreserveHistory?: boolean): Promise<void>;
		navigateToContext(oContext: Context, mParameters?: $TNavigateToContextParameters, oViewData?: any, oCurrentTargetInfo?: any): Promise<void>;
	}

	export default interface IAppComponent extends AppComponent {
		getAppContainer(): IAppContainer;
		getRoutingService(): IRoutingService;
	}
}

declare module "vss/com/fe/core/controllerextensions" {
	import EditFlow from "sap/fe/core/controllerextensions/EditFlow";
	import Context from "sap/ui/model/odata/v4/Context";

	/**
	 * @link https://sapui5.hana.ondemand.com/resources/sap/fe/core/controllerextensions/EditFlow-dbg.js
	 */
	export interface IEditFlow extends EditFlow {
		toggleDraftActive(context: Context): void;
	}
}

declare module "vss/com/fe/ListReport" {
	import Control from "sap/ui/core/Control";
	import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
	import BaseExtensionAPI from "sap/fe/core/ExtensionAPI";
	import IAppComponent from "vss/com/fe/IAppComponent";
	import PageController from "sap/fe/core/PageController";
	import { IEditFlow } from "vss/com/fe/core/controllerextensions";
	import FilterOperator from "sap/ui/model/FilterOperator";
	import { TEventHandlerFunction } from "ui5";
	import Routing from "sap/fe/core/controllerextensions/Routing";
	import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";

	export interface IListReportExtensionAPI extends ExtensionAPI, BaseExtensionAPI {
		editFlow: IEditFlow;
		getEditFlow(): IEditFlow;
		getRouting(): Routing;
	}

	/**
	 * @link https://sapui5.hana.ondemand.com/resources/sap/fe/templates/ListReport/ListReportController-dbg.controller.js
	 * @see {sap.fe.templates.ListReport.ListReportController}
	 */
	export interface IListReportController extends PageController {
		editFlow: IEditFlow;
		getExtensionAPI(): IListReportExtensionAPI;
		getAppComponent(): IAppComponent;
	}

	export interface IListReportExtension extends ControllerExtension {
		base: IListReportController;
	}

	export type TFilterConditions = Record<string, TFilterCondition[]>;
	export type TFilterCondition = {
		operator: FilterOperator;
		values: string[];
		isEmpty?: boolean;
		inParameters?: object;
		outParameters?: object;
		validated?: string;
	};
	export type TFilterItem = {
		name: string;
	};
	export type TFilterBarState = {
		filter: TFilterConditions;
		items: TFilterItem[];
	};

	/**
	 * @link https://sapui5.hana.ondemand.com/resources/sap/fe/core/controls/FilterBar-dbg.js
	 */
	export interface IFilterBar extends Control {
		initialized(): Promise<any>;
		getFilterConditions(): TFilterConditions;
		setFilterConditions(conditions: TFilterConditions): void;
		attachFiltersChanged(fnFunction: TEventHandlerFunction, oListener?: object): void;
		detachFiltersChanged(fnFunction: TEventHandlerFunction, oListener?: object): void;
		attachSearch(fnFunction: TEventHandlerFunction, oListener?: object): void;
		detachSearch(fnFunction: TEventHandlerFunction, oListener?: object): void;
		addCondition(sFieldPath: string, oXCondition: TFilterCondition): Promise<void>;
		removeCondition(sFieldPath: string, oXCondition: TFilterCondition): Promise<void>;
		getCurrentState(): TFilterBarState;
	}
}

declare module "vss/com/fe/ObjectPage" {
	import IAppComponent from "vss/com/fe/IAppComponent";
	import PageController from "sap/fe/core/PageController";
	import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
	import BaseExtensionAPI from "sap/fe/core/ExtensionAPI";
	import { IEditFlow } from "vss/com/fe/core/controllerextensions";
	import Routing from "sap/fe/core/controllerextensions/Routing";
	import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";

	export interface IObjectPageExtensionAPI extends ExtensionAPI, BaseExtensionAPI {
		editFlow: IEditFlow;
		getEditFlow(): IEditFlow;
		getRouting(): Routing;
	}

	/**
	 * @link https://sapui5.hana.ondemand.com/resources/sap/fe/templates/ObjectPage/ObjectPageController-dbg.controller.js
	 * @see {sap.fe.templates.ObjectPage.ObjectPageController}
	 */
	export interface IObjectPageController extends PageController {
		editFlow: IEditFlow;
		getExtensionAPI(): IObjectPageExtensionAPI;
		getAppComponent(): IAppComponent;
	}

	export interface IObjectPageExtension extends ControllerExtension {
		base: IObjectPageController;
	}
}

declare module "vss/com/fe/DraftTypes" {
	export type TDraftAdministrativeData = {
		DraftEntityType: string;
		DraftIsCreatedByMe: boolean;
		DraftUUID: string;
		InProcessByUser: "";
	};

	export type TDraftAwareEntity = {
		HasActiveEntity: boolean;
		HasDraftEntity: boolean;
		IsActiveEntity: boolean;
		DraftAdministrativeData: TDraftAdministrativeData;
	};
}

/**
 * @link https://ui5.sap.com/resources/sap/fe/core/library-dbg.js
 */
declare module "vss/com/fe/core/library" {
	export enum CreationMode {
		Async = "Async",
		CreationRow = "CreationRow",
		Deferred = "Deferred",
		External = "External",
		Inline = "Inline",
		NewPage = "NewPage",
		Sync = "Sync"
	}
}
