/**
 * Isolate differences between UI5 versions
 */
import EventBusBase from "sap/ui/core/EventBus";
declare const EventBus: {
    getInstance(): EventBusBase;
};
export default EventBus;
