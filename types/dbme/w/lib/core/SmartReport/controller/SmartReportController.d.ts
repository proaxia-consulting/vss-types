import type Page from "sap/m/Page";
import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
import Controller from "sap/ui/core/mvc/Controller";
import type Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Context from "sap/ui/model/Context";
import type AppComponent from "dbme/w/lib/core/SmartReport/SmartReportComponent";
import type { TComponentData } from "dbme/w/lib/core/SmartReport/SmartReportComponent";
/**
 * @namespace dbme.w.lib.core.SmartReport.controller
 * @controller
 */
export default abstract class SmartReportController extends Controller {
    aKnownProps: string[];
    protected oOwnerData?: TComponentData;
    protected sOrderPath?: string;
    protected uiModel: JSONModel;
    getOwnerComponent: () => AppComponent;
    onInit(): void;
    table(): SmartTable;
    getOwnerFilters(): Filter[];
    protected getSectionContext(sModel?: string): Context;
    protected page(): Page;
    protected loadFilterBar(): void;
}
