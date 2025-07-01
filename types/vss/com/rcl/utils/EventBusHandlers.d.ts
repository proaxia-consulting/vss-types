import BaseObject from "sap/ui/base/Object";
export type EventBusHandlerFunctionType = (p1: string, p2: string, p3: object) => void;
/**
 * @nonui5
 * @namespace vss.com.rcl.utils
 */
export default class EventBusHandler {
    private static _instance;
    private _listeners;
    static getInstance(): EventBusHandler;
    private constructor();
    subscribe(channelId: string, eventId: string, handler: EventBusHandlerFunctionType, listener: BaseObject, unsubscribeFirst?: boolean): void;
    unsubscribe(channelId: string, eventId: string, handler: EventBusHandlerFunctionType, listener: BaseObject): void;
    unsubscribeAll(listener: BaseObject): void;
}
