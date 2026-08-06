import type ResponsiveTable from "sap/m/Table";
import type MdcTable from "sap/ui/mdc/Table";
export declare function isFioriTable(obj: object): obj is MdcTable;
export declare function getResponsiveTablePromise(table: MdcTable): Promise<ResponsiveTable>;
export declare function getResponsiveTable(table: MdcTable): ResponsiveTable;
