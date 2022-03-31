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
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/fe/core/services/RoutingServiceFactory-dbg.js
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
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/fe/core/controllerextensions/EditFlow-dbg.js
	 */
	export interface IEditFlow extends EditFlow {
		toggleDraftActive(context: Context): void;
		onBeforeSave(): Promise<void>;
	}
}

declare module "vss/com/fe/ListReport" {
	import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
	import IAppComponent from "vss/com/fe/IAppComponent";
	import PageController from "sap/fe/core/PageController";
	import { IEditFlow } from "vss/com/fe/core/controllerextensions";

	export interface IListReportExtensionAPI extends ExtensionAPI {
		editFlow: IEditFlow;
	}

	/**
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/fe/templates/ListReport/ListReportController-dbg.controller.js
	 * @see {sap.fe.templates.ListReport.ListReportController}
	 */
	export interface IListReportController extends PageController {
		getExtensionAPI(): IListReportExtensionAPI;
		getAppComponent(): IAppComponent;
	}

	/**
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/ui/mdc/Table-dbg.js
	 */
	export interface IListReportTable {
		getFilter(): string;
		getFilterConditions(): object;
		setFilterConditions(conditions: object): void;
	}
}

declare module "vss/com/fe/ObjectPage" {
	import IAppComponent from "vss/com/fe/IAppComponent";
	import PageController from "sap/fe/core/PageController";
	import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
	import { IEditFlow } from "vss/com/fe/core/controllerextensions";

	export interface IObjectPageExtensionAPI extends ExtensionAPI {
		editFlow: IEditFlow;
	}

	/**
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/fe/templates/ObjectPage/ObjectPageController-dbg.controller.js
	 * @see {sap.fe.templates.ObjectPage.ObjectPageController}
	 */
	export interface IObjectPageController extends PageController {
		getExtensionAPI(): IObjectPageExtensionAPI;
		getAppComponent(): IAppComponent;
	}
}
