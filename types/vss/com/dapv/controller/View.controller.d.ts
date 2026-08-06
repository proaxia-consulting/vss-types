import type Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import type OData4Model from "sap/ui/model/odata/v4/ODataModel";
/**
 * @namespace vss.com.dapv.controller
 */
export default class View extends Controller {
    onInit(): void;
    onBeforeRendering(): void;
    onTableRefresh(): void;
    private getDialog;
    onCloseButtonOrgDataPress(): void;
    private setCustomFilters;
    onRouteMatched(): void;
    onVSSOrderValueHelpOpened(oEvent: Event): void;
    onDivisionValueHelpOpened(oEvent: Event): void;
    onMaterialPlantValueHelpOpened(oEvent: Event): void;
    onButtonCentralizedSalesOrgPress(): void;
    private getObjIdentifier;
    private getFilterBar;
    private getDefaultModel;
    getDefaultRequestModel(): OData4Model;
    onColumnListItemPress(oEvent: Event): void;
    onButtonProcureMultiplePress(): void;
    private getMainTable;
    onButtonProcureSinglePress(oEvent: Event): void;
    onButtonMessagePopoverPress(oEvent: Event): void;
    onVSSOrderLinkPress(sOrderNumber: string): void;
}
