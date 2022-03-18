/**
 * VSS - Fiori Elements
 */

declare module "vss/com/fe/IAppContainer" {
	import ResponsiveTable from "sap/m/Table";
	import Table from "sap/ui/table/Table";
	import ListReportExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
	import ObjectPageExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";

	export default interface IAppContainer {
		get table(): Table | ResponsiveTable;
		get listReportAPI(): ListReportExtensionAPI;
		get objectPageAPI(): ObjectPageExtensionAPI;
	}
}

declare module "vss/com/fe/IAppComponent" {
	import AppComponent from "sap/fe/core/AppComponent";
	import IAppContainer from "vss/com/fe/IAppContainer";

	export default interface IAppComponent extends AppComponent {
		getAppContainer(): IAppContainer;
	}
}

declare module "vss/com/fe/ListReport" {
	import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
	import IAppComponent from "vss/com/fe/IAppComponent";
	import PageController from "sap/fe/core/PageController";

	/**
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/fe/templates/ListReport/ListReportController-dbg.controller.js
	 * @see {sap.fe.templates.ListReport.ListReportController}
	 */
	export interface IListReportController extends PageController {
		getExtensionAPI(): ExtensionAPI;
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

	/**
	 * @link https://sapui5.hana.ondemand.com/1.96.7/resources/sap/fe/templates/ObjectPage/ObjectPageController-dbg.controller.js
	 * @see {sap.fe.templates.ObjectPage.ObjectPageController}
	 */
	export interface IObjectPageController extends PageController {
		getExtensionAPI(): ExtensionAPI;
		getAppComponent(): IAppComponent;
	}
}
