import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.daol.ext.controller
 * @controller
 */
export default class ConversionHeaderObjectPageExtend extends ControllerExtension {
    static overrides: {
        onInit(this: IObjectPageExtension): void;
    };
}
