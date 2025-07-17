import { IListReportExtension } from "vss/com/fe/ListReport";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace vss.com.dama.ext.controller
 */
export default class ListReportExtension extends ControllerExtension {
    static overrides: {
        onInit(this: IListReportExtension): void;
        onBeforeRendering(this: IListReportExtension, event: Event): void;
        routing: {
            onBeforeNavigation(this: IListReportExtension, contextInfo: any): boolean;
        };
    };
}
