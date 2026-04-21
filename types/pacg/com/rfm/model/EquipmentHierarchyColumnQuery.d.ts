import type Context from "sap/ui/model/odata/v4/Context";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TEquipmentHierarchyCustomEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @todo Reuse vss.com.rcl.eqscol extension when ready
 *
 * @nonui5
 * @namespace pacg.com.rfm.model
 */
export default class EquipmentHierarchyColumnQuery {
    private _model;
    private _path;
    constructor(_model: ODataModel);
    loadChildren(...context: Context[]): Promise<TEquipmentHierarchyCustomEntity[][]>;
}
