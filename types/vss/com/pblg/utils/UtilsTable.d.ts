import Table from "sap/ui/table/Table";
import { TableAllData, TablePurchaseOrder } from "vss/com/pblg/library/Types";
export declare const _local_table_bindings: {
    columns: string;
    rows: string;
};
export declare const _integers: {
    iNotFound: number;
};
export declare const _table_integers: {
    iRowCount: number;
};
export declare function attachInitialTableSettings(oTable: Table): Table;
export declare function getAllTableData(oTable: Table): object;
export declare function getAllTableColumns(oTable: Table): Array<any>;
export declare function getAllTableRows(oTable: Table): Array<TableAllData>;
export declare function isInInitialState(oTable: Table): boolean;
export declare function getSelectedRows(oTable: Table): Array<TableAllData>;
export declare function getRowNumberFromTable(sPath: string | undefined): int;
export declare function initializeTableColumns(): TableAllData;
export declare function getTablePurchaseOrder(oPurchaseOrder: TablePurchaseOrder, iVSSOrders: int, iIndex: int): TablePurchaseOrder;
export declare function getCustomSortProperty(sString: string): string;
export declare function getColumnData(): {
    columnId: string;
    key: string;
    path: string;
    text: string;
    sortPath: string;
    label: string;
}[];
