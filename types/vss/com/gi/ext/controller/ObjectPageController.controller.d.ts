import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.gi.ext.controller
 * @controller
 */
export default class GIObjectPage extends ControllerExtension {
    static overrides: {
        onInit(this: IObjectPageExtension): void;
        routing: {
            onAfterBinding(this: GIObjectPage & IObjectPageExtension, ctx: Context): Promise<void>;
        };
    };
}
