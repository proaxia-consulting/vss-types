import SectionEquipmentHierarchyBase from "vss/com/rcl/templates/ObjectPage/SectionEquipmentHierarchy";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type Tree from "sap/m/Tree";
import type TreeItemBase from "sap/m/TreeItemBase";
import type { THierarchyItem } from "vss/com/rcl/model/EquipmentHierarchyQuery";
import type JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @nonui5
 * @namespace pacg.com.rcm.ext
 */
export default class SectionEquipmentHierarchy extends SectionEquipmentHierarchyBase {
    constructor(api: IObjectPageExtensionAPI);
    protected run(): void;
    /**
     * Override parent class method
     */
    protected _treeDataReceived(treeData: THierarchyItem[], treeControl: Tree, treeModel: JSONModel): Promise<void>;
    protected _treeItemsRebind(treeControl: Tree): Promise<void>;
    protected _disableTreeItemActionButtons(item: TreeItemBase): void;
}
