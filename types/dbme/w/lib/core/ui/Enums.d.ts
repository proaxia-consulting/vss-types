export declare const libraryNamespace: {
    readonly common: "dbme.c";
    readonly srs: "dbme.w.lib.core";
};
/**
 * DBM|E SRS component ID's used in backend
 */
export declare const DBMEComponent: {
    readonly HierarchyAssignment: "HAS";
    readonly ResourcePlanner: "RPL";
    readonly Settings: "STS";
    readonly TodoBasket: "TDO";
    readonly DecisionTree: "TDT";
    readonly WorkshopPlanner: "WPL";
    readonly Launchpad: "";
};
export type DBMEComponentType = (typeof DBMEComponent)[keyof typeof DBMEComponent];
export declare const EventChannel: {
    readonly dbme: "dbme";
};
export declare const LogComponent: {
    readonly dbme: "DBME";
};
export declare const Event: {
    readonly ReloadFilter: "ReloadFilter";
    readonly SetFormData: "SetFormData";
    readonly ListItemSelect: "ListItemSelect";
    readonly ListUpdateFinished: "ListUpdateFinished";
    readonly ResourceAtHierarchyDrop: "ResourceAtHierarchyDrop";
    readonly AppointmentAtIntervalDrop: "AppointmentAtIntervalDrop";
    readonly DemandAtIntervalDrop: "DemandAtIntervalDrop";
    readonly FilterLoaded: "DBMEFilterLoaded";
};
export declare const Route: {
    readonly _default: "default";
    readonly nestedComponentDefault: "Nested";
};
export declare const FioriSemanticObject: {
    readonly defaultPrefix: "dbme_srs_";
    readonly defaultAction: "display";
};
