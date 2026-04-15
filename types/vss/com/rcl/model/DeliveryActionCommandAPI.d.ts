import type { DeliveryActionType } from "vss/com/rcl/model/DeliveryActionCommand";
type TCallParamsOut = void;
export default class DeliveryActionCommandAPI {
    actionExecute(actionName: DeliveryActionType, data: string): Promise<TCallParamsOut>;
}
export {};
