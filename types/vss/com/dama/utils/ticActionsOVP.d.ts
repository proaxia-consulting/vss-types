import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type Order from "vss/com/dama/controller/Order.controller";
import type { TTicComplex } from "vss/com/dama/service/timeClockingService";
import type Container from "vss/com/dama/utils/Container";
/**
 * @namespace vss.com.dama.utils
 */
export default class ticActionsOVP {
    private _orderCtrl;
    ticModel: ODataModel;
    container: Container;
    constructor(_orderCtrl: Order);
    refreshOrder(): Promise<TTicComplex>;
    private _setUiJob;
    private _setUiHeaderAction;
    private _setUiHeader;
}
