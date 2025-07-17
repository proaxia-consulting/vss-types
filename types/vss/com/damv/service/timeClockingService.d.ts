import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { OrderType, TimeClockingLevel } from "../model/Enums";
import { TOrderEntity } from "../types/Entity";
export type TEventsEntity = {
    personalNumber: string;
    token: string;
    eventCode: string;
    eventText: string;
    eventMark: string;
    eventColor: string;
    confirmFlag: boolean;
    allEvents: boolean;
    AvailableEventToCostCenter?: TAvailableEventToCostCenter;
};
export type TAvailableEventToCostCenter = {
    results?: TCostCenterEvent[];
};
export type TCostCenterEvent = {
    allEvents: boolean;
    callingApplication: string;
    costCenter: string;
    costCenterText: string;
    eventCode: string;
    personalNumber: string;
    token: string;
};
export type TAvailableOrderEntity = {
    displayOrder: string;
    line01: string;
    line02: string;
    line03: string;
    line04: string;
    line05: string;
    line06: string;
    line07: string;
    line08: string;
    orderIndicator: string;
    orderKey: string;
    orderText: string;
    orderType: string;
    personalNumber: string;
    tabName: string;
    token: string;
};
export type TSubordinateEntity = {
    subordinateEventStatus: string;
    subordinateCurrentStatus: string;
    callingApplication: string;
    token: string;
    subordinateOrderKey: string;
    supervisorNumber: string;
    subordinateOrderType: string;
    supervisorName: string;
    subordinateNumber: string;
    subordinateName: string;
    subordinateEventTypeMark: string;
    subordinateEventStartDate: Date;
    subordinateEventStartTime: {
        ms?: number;
    };
    contextKey: string;
    isTeam: boolean;
    teamId: string;
    teamText: string;
    subordinateSelected: boolean;
    subordinateLockingOrder: string;
};
export type TPersonalToOrder = {
    results?: TAvailableOrderEntity[];
};
export type TPersonalToAvailableEvent = {
    results?: TEventsEntity[];
};
export type TPersonalEntity = {
    callingApplication: string;
    personalNumber: string;
    token: string;
    employeeName: string;
    salesOrg: string;
    salesOrgName: string;
    plant: string;
    plantName: string;
    currentStatus: string;
    orderKey: string;
    orderType: string;
    eventType: string;
    eventTypeTxt: string;
    eventTypeMark: string;
    eventStartDate: Date;
    eventStartTime: {
        ms?: number;
    };
    ClockInDate: string;
    ClockInTime: string;
    additionLine1: string;
    additionLine2: string;
    additionLine3: string;
    additionLine4: string;
    additionLine5: string;
    costCenter: string;
    pinPost: boolean;
    pinCorrect: boolean;
    stampLevel: TimeClockingLevel;
    PersonalToOrder?: TPersonalToOrder;
    PersonalToAvailableEvent?: TPersonalToAvailableEvent;
};
export type TTicComplex = {
    userPersonal?: TPersonalEntity;
    subordinates?: TSubordinateEntity[];
    selectedPersons?: TPersonalEntity[];
    isSrsTeam?: boolean;
};
export type TUiTicJob = {
    class: string;
    icon: string;
    enabled: boolean;
    eventDetails: TEventsEntity;
    allEvents: TEventsEntity[];
    contextKey: string;
    team: TPersonalEntity[];
};
/**
 * @namespace vss.com.dama.service
 */
export default class timeClockingService {
    private _model;
    private static _userPersonal;
    constructor(model: ODataModel);
    static getUserPersonal(model: ODataModel, refresh?: boolean): Promise<TPersonalEntity>;
    getPersonal(personalNumber: string, token: string): Promise<TPersonalEntity>;
    getPersonsEventOrders(personalNumber: string, token: string, headerData?: TOrderEntity): Promise<TPersonalEntity>;
    getAvailableEvents({ personalNumber, token }: TPersonalEntity): Promise<TEventsEntity[]>;
    getSubordinates(supervisorNumber: string, token: string, contextKey: string): Promise<TSubordinateEntity[]>;
    executeEvent(token: string, person: TPersonalEntity, event: TEventsEntity, costCenter: string, contextKey?: string, orderType?: OrderType): Promise<any>;
}
