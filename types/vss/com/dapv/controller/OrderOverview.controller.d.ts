import type Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
import type OData4Model from "sap/ui/model/odata/v4/ODataModel";
import type { JobOverview, MainTable } from "vss/com/dapv/entities/Entities";
/**
 * @namespace vss.com.dapv.controller
 */
export default class OrderOverview extends Controller {
    onInit(): void;
    onRouteMatched(oEvent: Event): void;
    requestData(oModel: OData4Model, sVSSOrder: string): void;
    getTableData(oOrderData: MainTable): JobOverview[];
    getDefaultModel(): OData4Model;
    getDefaultRequestModel(): OData4Model;
    onButtonMessagePopoverPress(oEvent: Event): void;
}
