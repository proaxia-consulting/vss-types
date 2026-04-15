import type { Button$PressEvent } from "sap/m/Button";
import type { IListReportController, IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type Order from "vss/com/dama/controller/Order.controller";
import type { TAvailableEventToCostCenter, TEventsEntity, TPersonalEntity } from "vss/com/dama/service/timeClockingService";
import { ObjectAttribute$PressEvent } from "sap/m/ObjectAttribute";
/**
 * @namespace vss.com.dama.eh
 */
export default class ticActionsHandler {
    static onLRItemTicEventPress(this: IListReportExtensionAPI, event: Button$PressEvent): Promise<void>;
    static onLRHeaderTicEventPress(this: IListReportController, event: Button$PressEvent): Promise<void>;
    static onOVPHeaderTicEventPress(this: Order, event: Button$PressEvent): void;
    static onOVPJobTicEventPress(this: Order, event: Button$PressEvent): Promise<void>;
    static executeTicEvent(this: Order, ticEvent: TEventsEntity, contextKey: string, user: TPersonalEntity, callerEvent: Button$PressEvent, team?: TPersonalEntity[], orderType?: string): Promise<any>;
    static isTeamStatusValid(team: TPersonalEntity[]): boolean;
    static onTitleLinkPress(this: IListReportController, event: ObjectAttribute$PressEvent): void;
    static determineCostCenter(costCenterEvents: TAvailableEventToCostCenter, caller: Button$PressEvent): Promise<string>;
    static chooseEvent(ticEvents: TEventsEntity[], caller: Button$PressEvent): Promise<TEventsEntity>;
}
