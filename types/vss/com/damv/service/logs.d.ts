import type MessageType from "sap/ui/core/message/MessageType";
import type { TOrderItem } from "vss/com/damv/service/massAssignVehiclesService";
export type TSingleMessage = {
    field: string;
    id: string;
    logMsgNo: number;
    logNo: string;
    message: string;
    messageV1: string;
    messageV2: string;
    messageV3: string;
    messageV4: string;
    number: number;
    parameter: string;
    row: number;
    system: string;
    type: string;
};
export type TSingleLogLine = {
    messages: TSingleMessage[];
    logID: number;
    status: MessageType;
    messageCount: number;
    OrderID: TOrderItem["OrderID"];
    ItemNo: TOrderItem["ItemNo"];
};
export type TLogModelData = TSingleLogLine[];
