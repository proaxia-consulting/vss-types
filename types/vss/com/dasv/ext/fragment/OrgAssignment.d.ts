import type { Button$PressEvent } from "sap/m/Button";
import type { ComponentContainer$ComponentCreatedEvent } from "sap/ui/core/ComponentContainer";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
export declare function onPress(this: IListReportExtensionAPI, event: Button$PressEvent): Promise<void>;
export declare function onOrgComponentCreated(this: IListReportExtensionAPI, event: ComponentContainer$ComponentCreatedEvent): void;
export declare function onOrgDataEndButtonPressed(this: IListReportExtensionAPI, event: Event): void;
