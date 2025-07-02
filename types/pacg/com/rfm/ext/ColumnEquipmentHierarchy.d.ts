import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type Table from "sap/m/Table";
import type { TEquipmentHierarchyCustomEntity } from "vss/com/rcl/types/EntitySet";
export type THierarchyItem = TEquipmentHierarchyCustomEntity & {
    items: THierarchyItem[];
};
/**
 * @todo Reuse vss.com.rcl.eqscol extension when ready
 *
 * @nonui5
 * @namespace pacg.com.rfm.ext
 */
export default class ColumnEquipmentHierarchy {
    private _api;
    private _table;
    private _model;
    constructor(_api: IListReportExtensionAPI, _table: Table);
    /**
     * Instantiate hierarchy model & register in view
     */
    private initModel;
    /**
     * Bind tree model to equipment hierarchy column for all table rows
     */
    private bindHierarchy;
    private loadChildren;
}
