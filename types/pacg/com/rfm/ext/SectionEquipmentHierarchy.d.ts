import SectionEquipmentHierarchyBase from "vss/com/rcl/templates/ObjectPage/SectionEquipmentHierarchy";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type Tree from "sap/m/Tree";
import type { THierarchyItem } from "vss/com/rcl/model/EquipmentHierarchyQuery";
/**
 * @nonui5
 * @namespace pacg.com.rfm.ext
 */
export default class SectionEquipmentHierarchy extends SectionEquipmentHierarchyBase {
    constructor(api: IObjectPageExtensionAPI);
    /**
     * Override parent class method
     */
    protected _treeDataReceived(treeData: THierarchyItem[], treeControl: Tree, treeModel: JSONModel): Promise<void>;
    protected _treeItemsRebind(treeControl: Tree): Promise<void>;
}
