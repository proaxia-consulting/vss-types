import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { IListReportController } from "vss/com/fe/ListReport";
import { TTicComplex } from "../service/timeClockingService";
export default class ticActionsLR {
    private _ctrl;
    private _comp;
    timeClocking: ODataModel;
    headerViewFragment: Promise<any>;
    textBundle: ResourceBundle;
    ticData: TTicComplex;
    private _heading;
    constructor(_ctrl: IListReportController);
    refresh(): void;
    private _setUiHeaderAction;
}
