import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import OData4Model from "sap/ui/model/odata/v4/ODataModel";
import Button from "sap/m/Button";
/**
 * @namespace vss.com.dapv.controller
 */
export default class MaterialStockOverview extends Controller {
    onInit(): void;
    onRouteMatched(oEvent: Event): void;
    private onButtonMessagePopoverPress;
    getMessageButton(): Button;
    private onATPCall;
    private onATPReset;
    private onATPAvailabilityCheckMultiplePress;
    onRequestFinish(oModel: OData4Model, bAvailabilityCheck: boolean, bSwapActivated: boolean): void;
    getMaterialOverview(oModel: OData4Model, bAvailabilityCheck: boolean, bSwapActivated: boolean, bInitialRequest?: boolean): void;
    getDefaultModel(): OData4Model;
    getDefaultRequestModel(): OData4Model;
    onMaterialOverviewActionFinish(oModel: OData4Model, bAvailabilityCheck: boolean, bSwapActivated: boolean): void;
}
