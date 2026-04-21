import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
/**
 * @namespace com.pacg.dptrm.ext.controller
 * @controller
 */
export default class TransactionOPExt extends ControllerExtension<ExtensionAPI> {
    static overrides: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf com.pacg.dptrm.ext.controller.TransactionOPExt
         */
        onInit(this: TransactionOPExt): void;
    };
    getLogGroupTitle(this: TransactionOPExt, context: Context): string;
    formatLogMessageTypeIcon(messageType: string): string;
    formatLogMessageTypeColor(messageType: string): string;
    private _formatDateTime;
    private _dateTimeFormat;
}
