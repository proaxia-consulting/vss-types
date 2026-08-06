import type ResourceBundle from "sap/base/i18n/ResourceBundle";
import PageController from "sap/fe/core/PageController";
import type { Button$PressEvent } from "sap/m/Button";
import type Event from "sap/ui/base/Event";
import type Control from "sap/ui/core/Control";
import type { ID } from "sap/ui/core/library";
import JSONModel from "sap/ui/model/json/JSONModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IActionHandler } from "vss/com/dama/eh/job/JobDetails";
import actionCommandService from "vss/com/dama/service/actionCommandService";
import mechanicAppService from "vss/com/dama/service/mechanicAppService";
import type { TTicComplex } from "vss/com/dama/service/timeClockingService";
import timeClockingService from "vss/com/dama/service/timeClockingService";
import type { TOrderEntity } from "vss/com/dama/types/Entity";
import VehicleCheck from "vss/com/dama/utils/VehicleCheck";
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
    setVhcChanges(dataChanged?: boolean): void;
    onConfirmVhc(event: Button$PressEvent): void;
    onSaveVhc(event: Button$PressEvent): void;
    onResetVhcChanges(event: Event): void;
    onNavBackToOrder(event: Button$PressEvent): void;
    tireInfoFactory(this: Order, id: ID, context: Context): Control;
    onExit(): void;
}
