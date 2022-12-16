/**
 * @link https://ui5.sap.com/1.96.15/resources/sap/ui/mdc/Table-dbg.js
 */
declare module "sap/ui/mdc/Table" {
	import Control from "sap/ui/core/Control";
	import ListBinding from "sap/ui/model/ListBinding";
	import ResponsiveTable from "sap/m/Table";
	import GridTable from "sap/ui/table/Table";

	export default class Table extends Control {
		_oTable: ResponsiveTable | GridTable;
		initialized(): Promise<void>;
		isTableBound(): boolean;
		getRowBinding(): ListBinding;
	}
}
