import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @controller
 */
export default class ServiceOrderObjectPageExtension extends ControllerExtension {
    static overrides: {
        onPageReady(this: IObjectPageExtension): void;
    };
}
