import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * @namespace vss.com.daol.ext.controller
 * @controller
 */
export default class ConversionHeaderListExtend extends ControllerExtension {
    static overrides: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf vss.com.daol.ext.controller.ConversionHeaderListExtend
         */
        onInit(this: ConversionHeaderListExtend & IListReportExtension): void;
    };
}
