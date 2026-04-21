import type { TCardServiceOrders } from "vss/com/daxc/types/Entities";
export declare function getExternalDisplayValue(x: TCardServiceOrders): string;
export declare function getServiceOrderOrQuotationDisplayValue(x: TCardServiceOrders): string;
export declare function getJSONKey(x: TCardServiceOrders): TCardServiceOrders | null;
export declare function getServiceOrderOrQuotationStatus(x: TCardServiceOrders["JSONKey"]): string | null;
export declare function getExternalStatus(x: TCardServiceOrders["JSONKey"]): string | null;
