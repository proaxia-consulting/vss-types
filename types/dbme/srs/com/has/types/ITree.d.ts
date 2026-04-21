import type Context from "sap/ui/model/Context";
export type TreeNodeContext = {
    context: Context;
    children: TreeNodeContext[];
    parent?: TreeNodeContext;
    level: number;
    isLeaf: boolean;
} & Context;
