import { AllocationIn, AllocationOut, ChangePriorityIn, ChangePriorityOut, DeleteAllocationIn, DeleteAllocationOut } from "../types/service";
export declare class ActionCommandService {
    allocation(input: AllocationIn): Promise<AllocationOut>;
    deleteAllocation(input: DeleteAllocationIn): Promise<DeleteAllocationOut>;
    changePriority(input: ChangePriorityIn): Promise<ChangePriorityOut>;
}
