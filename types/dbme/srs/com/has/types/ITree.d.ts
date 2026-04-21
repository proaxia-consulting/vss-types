import Context from "sap/ui/model/Context";
export interface TreeNodeContext extends Context {
    context: Context;
    children: TreeNodeContext[];
    parent?: TreeNodeContext;
    level: number;
    isLeaf: boolean;
}
