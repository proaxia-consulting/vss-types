import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace pacg.com.rcm.ext.controller.ContractCreateObjectPage.controller
 * @controller
 */
export default class ContractCreateObjectPage extends ControllerExtension {
    static overrides: {
        onInit(this: IObjectPageExtension): void;
        onPageReady(this: IObjectPageExtension, state: unknown): void;
    };
}
