import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Order from "../controller/Order.controller";
import { TTicComplex } from "../service/timeClockingService";
import Container from "./Container";
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
