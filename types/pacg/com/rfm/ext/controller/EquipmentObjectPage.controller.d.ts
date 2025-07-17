import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace pacg.com.rfm.ext.controller
 * @controller
 */
export default class EquipmentObjectPage extends ControllerExtension {
    static overrides: {
        onInit(this: IObjectPageExtension): void;
        onPageReady(this: IObjectPageExtension): void;
        onExit(this: IObjectPageExtension): void;
    };
}
