import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * @namespace vss.com.dasv.ext.controller
 * @controller
 */
export default class LRExtend extends ControllerExtension<ExtensionAPI> {
    static overrides: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf vss.com.dasv.ext.controller.LRExtend
         */
        onInit(this: IListReportExtension): void;
    };
}
