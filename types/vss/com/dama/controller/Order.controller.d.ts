import PageController from "sap/fe/core/PageController";
import Event from "sap/ui/base/Event";
import { ID } from "sap/ui/core/library";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Context from "sap/ui/model/odata/v4/Context";
import actionCommandService from "vss/com/dama/service/actionCommandService";
import mechanicAppService from "vss/com/dama/service/mechanicAppService";
import timeClockingService, { TTicComplex } from "vss/com/dama/service/timeClockingService";
import { TOrderEntity } from "vss/com/dama/types/Entity";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import VehicleCheck from "vss/com/dama/utils/VehicleCheck";
import Control from "sap/ui/core/Control";
import type { IActionHandler } from "vss/com/dama/eh/job/JobDetails";
/**
 * @namespace vss.com.dama.controller
 */
export default class Order extends PageController {
    VehicleCheck: VehicleCheck;
    CommandService: actionCommandService;
    mechanicAppSrv: mechanicAppService;
    timeClockingSrv: timeClockingService;
    textBundle: ResourceBundle;
    ticData: TTicComplex;
    jobDetails?: IActionHandler;
    onInit(): void;
    onRouteMatched(event: Event): void;
    onContextChange(event: Event): Promise<void>;
    private _initUiModel;
    onRefresh(): void;
    refresh(request?: boolean): void;
    refreshTags(headerData: TOrderEntity): void;
    getTicModel(): ODataModel;
    getUiModel(): JSONModel;
    getVhcModel(): JSONModel;
    _setVhcChanges(dataChanged?: boolean): void;
    onConfirmVhc(event: Event): void;
    onSaveVhc(event: Event): void;
    onResetVhcChanges(event: Event): void;
    onNavBackToOrder(event: Event): void;
    tireInfoFactory(this: Order, id: ID, context: Context): Control;
    onExit(): void;
}
