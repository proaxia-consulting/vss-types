import { IDemand, IMonTableCols } from "../types/IEntity";
export declare class AllocationLogic {
    constructor();
    isAllocationChangable(demand: IDemand, icol: IMonTableCols, selectedDate: string): boolean;
    isAllocationDeletable(demand: IDemand, icol: IMonTableCols, selectedDate: string): boolean;
    private getAllocations;
}
