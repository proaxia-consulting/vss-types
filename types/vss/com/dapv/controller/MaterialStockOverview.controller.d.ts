import Button from "sap/m/Button";
import type Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import type OData4Model from "sap/ui/model/odata/v4/ODataModel";
/**
 * @namespace vss.com.dapv.controller
 */
export default class MaterialStockOverview extends Controller {
    onInit(): void;
    onRouteMatched(oEvent: Event): void;
    onButtonMessagePopoverPress(oEvent: Event): void;
    getMessageButton(): Button;
    onATPCall(oEvent: Event): void;
    onATPReset(): void;
    onATPAvailabilityCheckMultiplePress(oEvent: Event): void;
    onRequestFinish(oModel: OData4Model, bAvailabilityCheck: boolean, bSwapActivated: boolean): void;
    getMaterialOverview(oModel: OData4Model, bAvailabilityCheck: boolean, bSwapActivated: boolean, bInitialRequest?: boolean): void;
    getDefaultModel(): OData4Model;
    getDefaultRequestModel(): OData4Model;
    onMaterialOverviewActionFinish(oModel: OData4Model, bAvailabilityCheck: boolean, bSwapActivated: boolean): void;
}
