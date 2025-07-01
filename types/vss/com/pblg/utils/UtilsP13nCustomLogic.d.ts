import { StateP13n } from "vss/com/pblg/library/Types";
import Table from "sap/ui/table/Table";
import { MetadataObject } from "sap/m/p13n/MetadataHelper";
export declare function setColumnWidths(oColumnWidth: object): any;
export declare function setColumnsOrder(oColumnWidth: any, oStateColumns: Array<any>): any;
export declare function setSorter(aSorter: StateP13n["Sorter"], sSortOrder: string, sAffectedProperty: string): MetadataObject & {
    key?: string;
    sorted?: boolean;
    descending?: boolean;
}[];
export declare function setNewColumnPosition(aStateColumns: StateP13n["Columns"], sKey: string, iNewPos: int): MetadataObject[];
export declare function setColumnWidth(oColumnWidth: StateP13n["ColumnWidth"], sKey: string, sWidth: string): Record<string, string>;
export declare function setDefaultColumnsOrderArray(aArray: (MetadataObject & {
    position?: int;
})[]): {
    key: string;
    position?: int;
}[];
export declare function VMSave(oState: StateP13n): StateP13n;
export declare function VMColumnMove(oState: StateP13n, sKey: string, iNewPos: int): StateP13n;
export declare function VMResize(oState: StateP13n, sKey: string, sWidth: string): StateP13n;
export declare function VMSort(oState: StateP13n, sSortOrder: string, sAffectedProperty: string): StateP13n;
export declare function VMUpdateState(oState: StateP13n, oTable: Table, iState: int): number;
