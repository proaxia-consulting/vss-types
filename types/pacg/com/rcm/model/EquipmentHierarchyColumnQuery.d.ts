import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
/**
 * @todo Move to vss.com.rcl.eqscol; Create reusable extension with own model
 *
 * @nonui5
 * @namespace pacg.com.rcm.model
 */
export default class EquipmentHierarchyColumnQuery {
    private _model;
    private _path;
    constructor(_model: ODataModel);
    loadChildren(...equipment: string[]): Promise<any[]>;
}
