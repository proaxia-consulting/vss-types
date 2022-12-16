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
		getFilter(): string;
		getFilterConditions(): object;
		setFilterConditions(conditions: object): void;
	}
}

declare module "sap/ui/mdc/actiontoolbar/ActionToolbarAction" {
	import Control from "sap/ui/core/Control";
	import Button from "sap/m/Button";

	export default class ActionToolbarAction extends Control {
		getAction(): Button;
	}
}

declare module "sap/ui/mdc/ActionToolbar" {
	import OverflowToolbar from "sap/m/OverflowToolbar";
	import ActionToolbarAction from "sap/ui/mdc/actiontoolbar/ActionToolbarAction";

	export default class ActionToolbar extends OverflowToolbar {
		getActions(): ActionToolbarAction[];
	}
}
