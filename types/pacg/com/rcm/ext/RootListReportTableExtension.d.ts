import type MdcTable from "sap/ui/mdc/Table";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
/**
 * @nonui5
 * @namespace pacg.com.rcm.ext
 */
export default class RootListReportTableExtension {
    private _api;
    private _tables;
    private _responsiveTables;
    private _rootTable;
    constructor(_api: IListReportExtensionAPI);
    init(): Promise<void>;
    getTables(): MdcTable[];
    private _findTable;
    private _initEquipmentStructureColumnForRootTable;
    private _initCartActions;
}
