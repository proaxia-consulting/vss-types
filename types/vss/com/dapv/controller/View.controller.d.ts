import Controller from "sap/ui/core/mvc/Controller";
import type OData4Model from "sap/ui/model/odata/v4/ODataModel";
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
    onRouteMatched(): void;
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
