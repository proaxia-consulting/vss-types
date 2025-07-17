export type TreeNodeEntity = {
    NODE_ID?: string;
    PARENT_NODE_ID: string;
    HIERARCHY_ID?: string;
    RESOURCE_ID: string;
    DESCR1?: string;
    ICON?: string;
    RESOURCE_TYPE?: string;
    CHARDT_FROM?: string;
    CHARDT_TO?: string;
    CREATE_GROUP?: string;
};
export type TreeNodeCreateEntity = {
    CREATE_GROUP: string;
    NodesNav: TreeNodeEntity[];
};
