import type AppComponent from "dbme/srs/com/tdo/Component";
declare const EventBusHandlers: {
    subscribe(this: AppComponent, unsubscribeFirst?: boolean): void;
    unsubscribe(): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default EventBusHandlers;
