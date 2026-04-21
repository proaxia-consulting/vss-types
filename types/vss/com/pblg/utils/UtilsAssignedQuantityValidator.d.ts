import type { TableAllData } from "vss/com/pblg/library/Types";
export declare function getAssignedQuantitySumVSSOrder(aTableData: TableAllData[], sVSSOrder: string, sVSSPositionNumber: string): number;
export declare function getRequiredQuantityVSSOrder(aTableData: TableAllData[], sVSSOrder: string, sVSSPositionNumber: string): number;
export declare function getAssignedQuantitySumPOOrder(aTableData: TableAllData[], sPOOrder: string, sPOPositionNumber: string): number;
export declare function getRequiredQuantityPOOrder(aTableData: TableAllData[], sPOOrder: string, sPOPositionNumber: string): number;
export declare function setAssignedQuantityErrorStatus(x: TableAllData, bError: boolean, sText: string): void;
export declare function toNumber(str: string): number;
