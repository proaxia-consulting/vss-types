import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { TTicComplex } from "../service/timeClockingService";
import { TOrderEntity } from "../types/Entity";
/**
 * @namespace vss.com.dama.utils
 */
export default class ticHelper {
    private _model;
    private _ticComplex;
    private _timeClockingSrv;
    constructor(_model: ODataModel);
    static getComplexData(model: ODataModel, headerData?: TOrderEntity, skipSubordinates?: boolean): Promise<TTicComplex>;
    getComplexIntern(headerData?: TOrderEntity, skipSubordinates?: boolean): Promise<TTicComplex>;
    static splitOrderKey(orderKey: string): {
        OrderID: string;
        JobNo: string;
        ItemNo?: string;
    };
    static joinOrderKey(OrderID?: string, JobNo?: string, ItemNo?: string): string;
}
