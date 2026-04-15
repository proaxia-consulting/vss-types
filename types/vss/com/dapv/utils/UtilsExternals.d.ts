import type ListBinding from "sap/ui/model/ListBinding";
import type TreeBinding from "sap/ui/model/TreeBinding";
export type SpreadsheetSettings = {
    dataSource: string | Object | unknown[] | ListBinding | TreeBinding;
    workbook: {
        columns: unknown[];
    };
};
