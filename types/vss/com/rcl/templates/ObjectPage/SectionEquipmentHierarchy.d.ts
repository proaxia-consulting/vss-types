import JSONModel from "sap/ui/model/json/JSONModel";
import type { IEquipmentHierarchyQuery, THierarchyItem } from "vss/com/rcl/model/EquipmentHierarchyQuery";
import type Tree from "sap/m/Tree";
import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import type { TRootObjectKey } from "vss/com/rcl/types/EntitySet";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * @nonui5
 * @namespace vss.com.rcl.templates.ObjectPage
 */
export default class SectionEquipmentHierarchy extends AbstractObjectPageExtension<TRootObjectKey> {
    protected _query: IEquipmentHierarchyQuery;
    constructor(api: IObjectPageExtensionAPI, _query: IEquipmentHierarchyQuery);
    protected run(): void;
    protected _treeItemsQuery(entityData: TRootObjectKey, treeModel: JSONModel, treeControl: Tree): Promise<void>;
    /**
     * TODO: Override me in the child class
     *
     * At this stage tree items should be rebounded into component specific entity
     * @see vss.com.rcl.ml.ext.SectionEquipmentHierarchy.onTreeUpdateFinished()
     */
    protected _treeDataReceived(treeData: THierarchyItem[], treeControl: Tree, treeModel: JSONModel): Promise<void>;
    protected tree(): Tree;
}
