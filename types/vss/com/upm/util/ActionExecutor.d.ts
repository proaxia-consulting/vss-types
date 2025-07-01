import Context from "sap/ui/model/odata/v4/Context";
import { IObjectPageController } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.upm.util
 * @controller
 */
export default class ActionExecutor {
    constructor(controller: IObjectPageController);
    Execute(context: Context): Promise<void>;
    private _controller;
}
