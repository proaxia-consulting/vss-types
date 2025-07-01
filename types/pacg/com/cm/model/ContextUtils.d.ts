import type Context from "sap/ui/model/odata/v4/Context";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const ContextUtils: {
    fromAPI(api: IListReportExtensionAPI | IObjectPageExtensionAPI): Context[];
};
/**
 * @namespace pacg.com.cm.model
 */
export default ContextUtils;
