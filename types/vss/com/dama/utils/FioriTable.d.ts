import type ResponsiveTable from "sap/m/Table";
import type Control from "sap/ui/core/Control";
import type Table from "sap/ui/table/Table";
export type IFioriTable = {
    _oTable: ResponsiveTable | Table;
    initialized(): Promise<IFioriTable>;
} & Control;
export declare function getResponsiveTable(t: IFioriTable): ResponsiveTable;
export declare function getTable(t: IFioriTable): Table;
