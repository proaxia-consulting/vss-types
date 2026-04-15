import type EditFlow from "sap/fe/core/controllerextensions/EditFlow";
import type Context from "sap/ui/model/odata/v4/Context";
/**
 * @namespace com.pacg.taskcenter.model
 */
export default class TaskProcessor {
    static AddComment(editFlow: EditFlow): Promise<boolean>;
    static ExecuteAction(editFlow: EditFlow, actionContext: Context, objectContext?: Context): Promise<boolean>;
}
