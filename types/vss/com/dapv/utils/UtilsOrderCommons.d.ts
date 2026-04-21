import { ButtonType } from "sap/m/library";
import { ValueState } from "sap/ui/core/library";
import type MessageType from "sap/ui/core/message/MessageType";
import type { AbapBoolean, ItemsInfo, MainTable, MaterialATPOverview, OrderItems, QuantityInfo, StatusIcons, SwapATPReservations } from "vss/com/dapv/entities/Entities";
import type { ATPMapKey } from "vss/com/dapv/entities/Types";
import type { AvailabilityBarConfig } from "vss/com/dapv/utils/UtilsFrontendData";
export declare const statusValues: {
    OPEN: string;
    PURCHASE: string;
    STOCK: string;
    POSTED: string;
};
export declare const lastDateStatusValues: {
    HIGHER: string;
    EQUAL: string;
    LOWER: string;
};
export declare const priorityValues: {
    HIGH: string;
    MEDIUM: string;
    LOW: string;
};
export declare const aMsgHierarchy: Record<MessageType, {
    priority: number;
    icon: string;
    state: ValueState;
    swapStateTooltip: string;
}>;
export declare const tempAvailabilityStatusConfig: Record<string, AvailabilityBarConfig>;
export declare const tempPriorityConfig: Record<string, {
    state: ValueState;
}>;
export declare const tempLastDateConfig: Record<string, {
    state: ValueState;
}>;
export declare function getIcon(x: StatusIcons["IconIdFiori"]): string | undefined;
export declare function getOrderItem(aOrderItems: OrderItems[] | undefined, sOrderNumber: string, sOrdPos: string): OrderItems;
export declare function isOrdNumPosEqual(sOrdNum1: string, sOrdNum2: string, sOrdPos1: string, sOrdPos2: string): boolean;
export declare function isOrdAttrEqual(sOrdAttr1: string, sOrdAttr2: string): boolean;
export declare function getOrderItemStatus(aResultsQuantities: QuantityInfo[], sOrdPos: string, sStatus: string): QuantityInfo | undefined;
export declare function getOrderDetailItem(aResultsItems: ItemsInfo[], sOrdPos: string): ItemsInfo | undefined;
export declare function getStatusText(sStatusId: string): string;
export declare function getStatusState(sStatusId: string): ValueState;
export declare function getPriorityState(sStatus: string): ValueState;
export declare function convertDate(sDate: string): string;
export declare function getLastItem(x: MainTable): string;
export declare function getVehicleDescription(x: MainTable): string;
export declare function getAdvisorName(x: MainTable): string;
export declare function getAdvisorSurname(x: MainTable): string;
export declare function getCustomerOrder(x: MainTable): string;
export declare function getDateState(sState: MainTable["LatestDateStatus"]): ValueState;
export declare function getSwapATPState(bAvailabilityStatus: boolean, bSwapActivated: boolean, oATPOverview: MaterialATPOverview, oMapKey: ATPMapKey, oSwapReservationsMemo: SwapATPReservations | undefined): ValueState;
export declare function getSwapATPStatus(bAvailabilityStatus: boolean, bSwapActivated: boolean, oATPOverview: MaterialATPOverview, oMapKey: ATPMapKey, oSwapReservationsMemo: SwapATPReservations | undefined): string;
export declare function getSwapATPText(bAvailabilityStatus: boolean, bSwapActivated: boolean, oATPOverview: MaterialATPOverview, oMapKey: ATPMapKey, oSwapReservationsMemo: SwapATPReservations | undefined): string;
export declare function getSwapATPTooltip(bAvailabilityStatus: boolean, bSwapActivated: boolean, oATPOverview: MaterialATPOverview, oMapKey: ATPMapKey, oSwapReservationsMemo: SwapATPReservations | undefined): string;
export declare function formatOrderLink(sOrderNumber: string): string;
export declare function onVSSOrderLinkPress(sOrderNumber: string): void;
export declare function getProcurementButtonType(bIsProcurement: boolean | AbapBoolean): ButtonType.Ghost | ButtonType.Success;
export declare function getProcurementButtonTooltip(bIsProcurement: boolean | AbapBoolean): string;
export declare function getProcurementButtonVisibility(sAvailabilityStatusCode: string): boolean;
