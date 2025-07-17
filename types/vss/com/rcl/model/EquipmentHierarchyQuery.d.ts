import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TEquipmentHierarchyCustomEntity, TRootObjectKey } from "vss/com/rcl/types/EntitySet";
export interface IEquipmentHierarchyQuery {
    run(...rootEntity: TRootObjectKey[]): Promise<TEquipmentHierarchyCustomEntity[]>;
    asTree(...rootEntity: TRootObjectKey[]): Promise<THierarchyItem[]>;
    count(): number;
}
export type THierarchyItem = TEquipmentHierarchyCustomEntity & {
    items: THierarchyItem[];
};
/**
 * @namespace vss.com.rcl.model
 */
export default class EquipmentHierarchyQuery implements IEquipmentHierarchyQuery {
    protected _model: ODataModel;
    protected _readParams: {};
    protected _itemsCount: number;
    /**
     * @param _readParams 	@link https://sapui5.hana.ondemand.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList
     */
    constructor(_model: ODataModel, _readParams?: {});
    run(...rootEntity: TRootObjectKey[]): Promise<TEquipmentHierarchyCustomEntity[]>;
    asTree(...rootEntity: TRootObjectKey[]): Promise<THierarchyItem[]>;
    protected mapTree(flat: TEquipmentHierarchyCustomEntity[]): THierarchyItem[];
    count(): number;
}
