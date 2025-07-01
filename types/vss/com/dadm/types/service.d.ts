export type AllocationIn = {
    IvDraggedObject: string;
    IvDroppedColumnType: string;
    IvDemandId: string;
    IvResourceIdFrom: string;
    IvResourceIdTo: string;
    IvResourceRole: string;
    IvSelectedDate: string;
};
export type AllocationOut = {};
export type ChangePriorityIn = {
    IvDemandId: string;
    IvPriority: number;
};
export type ChangePriorityOut = {};
export type DeleteAllocationIn = {
    IvDemandId: string;
    IvResourceId: string;
    IvResourceRole: string;
    IvSelectedDate: string;
};
export type DeleteAllocationOut = {};
