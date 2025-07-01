import { Action } from "sap/m/MessageBox";
import OrderController from "../controller/Order.controller";
import Context from "sap/ui/model/Context";
import { TCheckList } from "../types/Entity";
/**
 * @namespace vss.com.dama.utils
 */
export default class VehicleCheck {
    private _orderController;
    constructor(_orderController: OrderController);
    setRepairCode(itemContext: Context, repairContext: Context): void;
    setConditionStatus(itemContext: Context, targetStatus: number): void;
    setRangeValue(itemContext: Context): void;
    resetRangeValue(itemContext: Context): void;
    private _determineRangeStatus;
    saveCheckList(checkList: TCheckList | TCheckList[]): Promise<void>;
    refreshModel(): Promise<void>;
    confirmBeforeSave(onClosed: (action: Action) => void): void;
    determineAllStatuses(): void;
    refreshAttachmentsCount(itemContext: Context): void;
    equalizeAxleTires(tireContext: Context): void;
    checkStepInputs(tireContext: Context): void;
}
