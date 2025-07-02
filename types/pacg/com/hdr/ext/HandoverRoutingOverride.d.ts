import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { $HandoverNavigationContextInfo } from "../types/IController";
export declare function toHandover(api: IObjectPageExtensionAPI | IListReportExtensionAPI, contextInfo: $HandoverNavigationContextInfo): boolean;
