import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type Table from "sap/m/Table";
/**
 * @todo Move to vss.com.rcl.eqscol; Create reusable extension with own model
 *
 * @nonui5
 * @namespace pacg.com.rcm.ext
 */
export default class ColumnEquipmentStructure {
    private _api;
    private _rootTable;
    private _appComponent;
    private _treeModel;
    constructor(_api: IListReportExtensionAPI, _rootTable: Table);
    init(): void;
    /**
     * Instantiate hierarchy model & register in view
     */
    private _initModel;
    /**
     * Bind tree model to equipment hierarchy column for all table rows
     */
    private _bindHierarchy;
    private _loadChildren;
}
