import { TableAllData } from "vss/com/pblg/library/Types";
export declare function setAssignedQuantityErrorStatus(x: TableAllData, bError: boolean, sText: string): void;
export declare function checkPO(aRelevantPOItems: TableAllData[], iPOGRQtyOverall: number, iPOGRQuantity: number, sPODelivery: string, sPOPosition: string): void;
export declare function checkVSS(aRelevantVSSOrders: TableAllData[], iVSSQtyOverall: number, iVSSQtyRequired: number, sVSSOrder: string, sVSSPosition: string): void;
export declare function toNumber(str: string): number;
