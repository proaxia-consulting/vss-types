import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type View from "sap/ui/core/mvc/View";
/**
 * @namespace pacg.com.eqs.ext.controller
 * @controller
 */
export default class EquipmentObjectPageExtension extends ControllerExtension<ExtensionAPI> {
    getView: () => View;
    static overrides: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf pacg.com.eqs.ext.controller.ObjectPageExtension
         */
        onInit(this: EquipmentObjectPageExtension): void;
    };
}
