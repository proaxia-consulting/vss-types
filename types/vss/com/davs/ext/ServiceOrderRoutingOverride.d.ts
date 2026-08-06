import type Context from "sap/ui/model/odata/v4/Context";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
export declare function toVSSOrder(api: IObjectPageExtensionAPI | IListReportExtensionAPI, context: Context): Promise<void>;
