import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type { ObjectStatus$PressEvent } from "sap/m/ObjectStatus";
import type UI5Event from "sap/ui/base/Event";
export declare function onCustomerPress(this: ExtensionAPI, event: UI5Event): Promise<void>;
export declare function onVehiclePress(this: ExtensionAPI, event: UI5Event): Promise<void>;
export declare function onInfoPress(this: ExtensionAPI, event: ObjectStatus$PressEvent, controlID: string): void;
