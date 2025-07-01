export type IMonTableRow = {
    DemandId: string;
    HierarchyId: string;
    _Demand: IDemand;
};
export type IDemand = {
    DemandId: string;
    Type: string;
    HierarchyId: string;
    Allocable: boolean;
    Reallocable: boolean;
    _ResourceRoles: [IDemandRole];
    _Allocations: [IDemandAllocs];
};
export type IDemandAllocs = {
    DemandId: string;
    ResourceRole: string;
    ResourceId: string;
    StartDate: string;
    StartTime: string;
    EndDate: string;
    EndTime: string;
    Changable: boolean;
    Deletable: boolean;
};
export type IDemandRole = {
    DeamndType: string;
    ResourceRole: string;
    Allocated: boolean;
};
export type IMonTableColsHierarchy = {
    Type: string;
    ResourceId: string;
    ResourceRole: string;
    HierarchyId: string;
};
export type IMonTableCols = {
    ColumnName: string;
    ColumnBinding: string;
    ColumnLabel: string;
    Type: string;
    ResourceId: string;
    ResourceRole: string;
    DroppableFieldName: string;
    ResourceListId: string;
    _Hierarchies: [IMonTableColsHierarchy];
};
export type IAvailability = {
    Type: string;
    ResourceId: string;
    ResourceRole: string;
    HierarchyId: string;
    SelectedDate: string;
};
export type IPriorityChange = {
    DemandId: string;
    Priority: number;
};
