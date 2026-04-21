import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type Table from "sap/m/Table";
import type MdcTable from "sap/ui/mdc/Table";
/**
 * @nonui5
 * @namespace pacg.com.so.ext
 */
export default class OrderItemsTableExtension {
    private _api;
    private _tables;
    private _responsiveTables;
    constructor(_api: ExtensionAPI);
    init(): Promise<void>;
    tables(): MdcTable[];
    responsiveTables(): Table[];
    private _findTable;
}
