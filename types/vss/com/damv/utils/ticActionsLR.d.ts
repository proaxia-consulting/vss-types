import type ResourceBundle from "sap/base/i18n/ResourceBundle";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { TTicComplex } from "vss/com/dama/service/timeClockingService";
import type { IListReportController } from "vss/com/fe/ListReport";
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
