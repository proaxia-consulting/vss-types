/**
 * Isolate differences between UI5 versions
 */
declare const EventBus: {
    getInstance(): import("sap/ui/core/EventBus").default;
};
export default EventBus;
