import Controller from "sap/ui/core/mvc/Controller";
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
    private onButtonCentralizedSalesOrgPress;
    private getObjIdentifier;
    private getFilterBar;
    private getDefaultModel;
    private getDefaultRequestModel;
    private onColumnListItemPress;
    private onButtonProcureMultiplePress;
    private getMainTable;
    private onButtonProcureSinglePress;
    private onButtonMessagePopoverPress;
    private onVSSOrderLinkPress;
}
