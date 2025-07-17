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
export declare function getResponsiveTable(t: IFioriTable): ResponsiveTable;
export declare function getTable(t: IFioriTable): Table;
