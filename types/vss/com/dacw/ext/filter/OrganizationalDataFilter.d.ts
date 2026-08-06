import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Event from "sap/ui/base/Event";
import type { ComponentContainer$ComponentCreatedEvent } from "sap/ui/core/ComponentContainer";
export declare function onOrgDataFilterPressed(this: ExtensionAPI, event: Event): Promise<void>;
export declare function onOrgComponentCreated(this: ExtensionAPI, event: ComponentContainer$ComponentCreatedEvent): void;
export declare function onOrgDataEndButtonPressed(this: ExtensionAPI, event: Event): void;
