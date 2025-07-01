import ResponsiveTable from "sap/m/Table";
import type { IListReportController } from "vss/com/fe/ListReport";
/**
 * @nonui5
 * @namespace pacg.com.rfm.ext
 */
export default class ListReportToolbarExtension {
    private ctrl;
    private table;
    private uiModel;
    constructor(ctrl: IListReportController, table: ResponsiveTable);
    private run;
    private _initTableEvents;
    private _initTableToolbarActions;
}
