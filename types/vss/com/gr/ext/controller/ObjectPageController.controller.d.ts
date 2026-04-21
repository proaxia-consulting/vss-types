import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.gr.ext.controller.ObjectPageController
 * @controller
 */
export default class GRObjectPage extends ControllerExtension {
    static overrides: {
        onInit(this: IObjectPageExtension): void;
        routing: {
            onAfterBinding(this: IObjectPageExtension, ctx: Context): Promise<void>;
        };
    };
}
