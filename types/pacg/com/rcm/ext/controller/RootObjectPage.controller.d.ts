import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageController, IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace pacg.com.rcm.ext.controller.RootObjectPage.controller
 * @controller
 */
export default class RootObjectPage extends ControllerExtension {
    base: IObjectPageController;
    static overrides: {
        onInit(this: IObjectPageExtension): void;
        onPageReady(this: IObjectPageExtension, state: unknown): void;
        onExit(this: IObjectPageExtension): void;
    };
}
