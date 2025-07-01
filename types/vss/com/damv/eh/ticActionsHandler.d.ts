import Event from "sap/ui/base/Event";
import { IListReportController, IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { TAvailableEventToCostCenter, TEventsEntity, TPersonalEntity } from "../service/timeClockingService";
import Order from "../controller/Order.controller";
/**
 * @namespace vss.com.dama.eh
 */
export default class ticActionsHandler {
    static onLRItemTicEventPress(this: IListReportExtensionAPI, event: Event): Promise<void>;
    static onLRHeaderTicEventPress(this: IListReportController, event: Event): Promise<void>;
    static onOVPHeaderTicEventPress(this: Order, event: Event): void;
    static onOVPJobTicEventPress(this: Order, event: Event): Promise<void>;
    static executeTicEvent(this: Order, ticEvent: TEventsEntity, contextKey: string, user: TPersonalEntity, callerEvent: Event, team?: TPersonalEntity[]): Promise<any>;
    static isTeamStatusValid(team: TPersonalEntity[]): boolean;
    static onTitleLinkPress(this: IListReportController, event: Event): void;
    static determineCostCenter(costCenterEvents: TAvailableEventToCostCenter, caller: Event): Promise<string>;
    static chooseEvent(ticEvents: TEventsEntity[], caller: Event): Promise<TEventsEntity>;
}
