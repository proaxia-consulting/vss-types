import type Context from "sap/ui/model/odata/v4/Context";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
import type { TActionResult } from "vss/com/upm/types";
/**
 * @namespace vss.com.upm.util
 * @controller
 */
export default class ActionExecutor {
    private _controller;
    constructor(_controller: IObjectPageController);
    Execute(actionContext: Context): Promise<TActionResult>;
}
