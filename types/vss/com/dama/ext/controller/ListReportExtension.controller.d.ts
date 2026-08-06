import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * @namespace vss.com.dama.ext.controller
 */
export default class ListReportExtension extends ControllerExtension {
    static overrides: {
        onInit(this: IListReportExtension): void;
        onBeforeRendering(this: IListReportExtension, event: Event): void;
        routing: {
            onBeforeNavigation(this: IListReportExtension, contextInfo: {
                bindingContext?: Context;
            }): boolean;
        };
    };
}
