import { TSingleMessage } from "./logs";
export type TAssignVehicleIn = {
    OrderId: string;
    ItemNo: string;
    InternalVehicleNumber: string;
};
export type TAssignVehicleOut = {
    messages: TSingleMessage[];
    success: boolean;
};
