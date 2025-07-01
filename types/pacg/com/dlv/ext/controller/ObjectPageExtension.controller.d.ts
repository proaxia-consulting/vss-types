import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * overridesToOverride must be enabled in babel settings of transform-ui5
 * @link https://github.com/ui5-community/babel-plugin-transform-modules-ui5
 *
 * @namespace pacg.com.dlv.ext
 */
export default class ObjectPageExtension extends ControllerExtension {
    static overrides: {
        onInit(this: IObjectPageExtension): void;
        onPageReady(this: IObjectPageExtension, state: unknown): void;
    };
}
