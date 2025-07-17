import type { default as AppComponent } from "pacg/com/rcm/Component";
declare const EventBusHandlers: {
    subscribe(listener: AppComponent, unsubscribeFirst?: boolean): void;
    unsubscribe(listener?: AppComponent): void;
};
/**
 * @namespace pacg.com.rcm.utils
 */
export default EventBusHandlers;
