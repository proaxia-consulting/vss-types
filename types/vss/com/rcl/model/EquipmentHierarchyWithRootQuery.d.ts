import type { TRootObjectKey } from "vss/com/rcl/types/EntitySet";
import EquipmentHierarchyQuery from "vss/com/rcl/model/EquipmentHierarchyQuery";
/**
 * @nonui5
 * @namespace vss.com.rcl.model
 */
export default class EquipmentHierarchyWithRootQuery extends EquipmentHierarchyQuery {
    run(...rootEntity: TRootObjectKey[]): Promise<import("vss/com/rcl/types/EntitySet").TEquipmentHierarchyCustomEntity[]>;
}
