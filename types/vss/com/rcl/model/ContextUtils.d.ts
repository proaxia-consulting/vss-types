import type Context from "sap/ui/model/odata/v4/Context";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const ContextUtils: {
    fromAPI(api: IListReportExtensionAPI | IObjectPageExtensionAPI): Context[];
};
/**
 * @namespace vss.com.rcl.model
 */
export default ContextUtils;
