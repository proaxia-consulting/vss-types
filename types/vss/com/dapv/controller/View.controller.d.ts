import Controller from "sap/ui/core/mvc/Controller";
import OData4Model from "sap/ui/model/odata/v4/ODataModel";
import { Route$MatchedEvent } from "sap/ui/core/routing/Route";
/**
 * @namespace vss.com.dapv.controller
 */
export default class View extends Controller {
    onInit(): void;
    onBeforeRendering(): void;
    private onTableRefresh;
    private getDialog;
    private onCloseButtonOrgDataPress;
    private setCustomFilters;
    onRouteMatched(oEvent: Route$MatchedEvent): void;
    private onVSSOrderValueHelpOpened;
    private onDivisionValueHelpOpened;
    private onMaterialPlantValueHelpOpened;
    private onButtonCentralizedSalesOrgPress;
    private getObjIdentifier;
    private getFilterBar;
    private getDefaultModel;
    getDefaultRequestModel(): OData4Model;
    private onColumnListItemPress;
    private onButtonProcureMultiplePress;
    private getMainTable;
    private onButtonProcureSinglePress;
    private onButtonMessagePopoverPress;
    private onVSSOrderLinkPress;
}
