import { TSingleMessage } from "vss/com/damv/service/logs";
export type TAssignVehicleIn = {
    OrderId: string;
    ItemNo: string;
    InternalVehicleNumber: string;
};
export type TAssignVehicleOut = {
    messages: TSingleMessage[];
    success: boolean;
};
