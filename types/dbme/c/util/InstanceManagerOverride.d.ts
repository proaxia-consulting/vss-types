import EventProvider from "sap/ui/base/EventProvider";
import type Dialog from "sap/m/Dialog";
import type { $EventTyped } from "ui5";
/**
 * Event ID pattern: (before|after)(keyof InstanceManager with 1st capital letter),
 * for ex.: "afterAddDialogInstance", "beforeAddDialogInstance"
 */
export declare enum InstanceManagerEvent {
    afterAddDialogInstance = "afterAddDialogInstance",
    beforeAddDialogInstance = "beforeAddDialogInstance"
}
export type InstanceManagerOverride$EventParameters = {
    args: Dialog[];
};
export type InstanceManagerOverride$Event = $EventTyped<InstanceManagerOverride$EventParameters, InstanceManagerOverride>;
type EventHandler = (event: InstanceManagerOverride$Event, ...args: unknown[]) => void;
/**
 * @namespace dbme.c.util
 */
export default class InstanceManagerOverride extends EventProvider {
    static metadata: {
        events: {
            afterAddDialogInstance: {};
            beforeAddDialogInstance: {};
        };
    };
    constructor();
    attachAfterAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
    attachOnceAfterAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
    attachBeforeAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
    attachOnceBeforeAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
}
export {};
