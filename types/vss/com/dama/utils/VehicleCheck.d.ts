import type Context from "sap/ui/model/Context";
import type OrderController from "vss/com/dama/controller/Order.controller";
import type { TCheckList } from "vss/com/dama/types/Entity";
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
    confirmBeforeSave(onClosed: (action: string) => void): void;
    determineAllStatuses(): void;
    refreshAttachmentsCount(itemContext: Context): void;
    equalizeAxleTires(tireContext: Context): void;
    checkStepInputs(tireContext: Context): void;
}
