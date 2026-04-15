import type Page from "sap/m/Page";
import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
import Controller from "sap/ui/core/mvc/Controller";
import type View from "sap/ui/core/mvc/View";
import type Context from "sap/ui/model/Context";
import type Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import type AppComponent from "dbme/w/lib/core/SmartReport/SmartReportComponent";
import type { TComponentData } from "dbme/w/lib/core/SmartReport/SmartReportComponent";
/**
 * @namespace dbme.w.lib.core.SmartReport.controller
 * @controller
 */
export default abstract class SmartReportController extends Controller {
    getView: () => View;
    aKnownProps: string[];
    protected oOwnerData?: TComponentData;
    protected sOrderPath?: string;
    protected uiModel: JSONModel;
    getOwnerComponent: () => AppComponent;
    onInit(): void;
    protected _onInit(): Promise<void>;
    table(): SmartTable;
    getOwnerFilters(): Filter[];
    protected getSectionBindingPath(): string | undefined;
    /**
     * @deprecated SmartReportComponent must use own model; Use this.getSectionBindingPath() instead!
     */
    protected getSectionContext(modelName?: string): Context;
    protected page(): Page;
    protected loadFilterBar(): Promise<void>;
}
