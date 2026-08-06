import type Button from "sap/m/Button";
import type ResponsiveTable from "sap/m/Table";
import type Toolbar from "sap/m/Toolbar";
import type Control from "sap/ui/core/Control";
import type MdcTable from "sap/ui/mdc/Table";
import type Table from "sap/ui/table/Table";
export declare function isFioriTable(obj: object): obj is MdcTable;
/**
 * @type {sap.ui.mdc.actiontoolbar.ActionToolbarAction}
 */
export type IActionToolbarAction = {
    getAction(): Button;
} & Control;
/**
 * Result of table.getHeaderToolbar()
 *
 * @type {sap.ui.mdc.ActionToolbar}
 */
export type IActionToolbar = {
    getActions(): IActionToolbarAction[];
} & Toolbar;
export declare function getResponsiveTable(table: MdcTable): ResponsiveTable;
export declare function getTable(table: MdcTable): Table;
export declare function getResponsiveTablePromise(table: MdcTable): Promise<ResponsiveTable>;
export declare function getTablePromise(table: MdcTable): Promise<Table>;
