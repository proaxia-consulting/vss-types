import type Table from "sap/m/Table";
import type { IListReportController } from "vss/com/fe/ListReport";
/**
 * @namespace vss.com.dama.ext
 */
export default class ListReportTableExtension {
    private _ctrl;
    private _table?;
    private _comp;
    constructor(_ctrl: IListReportController, _table?: Table);
    private run;
    private initTableEvents;
}
