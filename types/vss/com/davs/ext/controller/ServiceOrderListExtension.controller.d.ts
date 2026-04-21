import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * @controller
 */
export default class ServiceOrderListExtension extends ControllerExtension {
    static overrides: {
        routing: {
            onBeforeNavigation(this: IListReportExtension, contextInfo: {
                bindingContext: Context;
            }): boolean;
        };
    };
}
