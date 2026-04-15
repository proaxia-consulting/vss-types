import Event from "sap/ui/base/Event";
import { ComponentContainer$ComponentCreatedEvent } from "sap/ui/core/ComponentContainer";
import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
export declare function onOrgDataFilterPressed(this: IListReportExtensionAPI, event: Event): Promise<void>;
export declare function onOrgComponentCreated(this: IListReportExtensionAPI, event: ComponentContainer$ComponentCreatedEvent): void;
export declare function onOrgDataEndButtonPressed(this: IListReportExtensionAPI, event: Event): void;
