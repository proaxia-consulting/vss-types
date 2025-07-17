import Context from "sap/ui/model/odata/v4/Context";
import EditFlow from "sap/fe/core/controllerextensions/EditFlow";
export declare enum ErrorHandling {
    None = "None",
    Silent = "Silent",
    MessageToast = "MessageToast"
}
/**
 * @namespace com.pacg.taskcenter.model
 */
export default class ActionInvoker {
    private _editFlow;
    private _errorHandling;
    constructor(_editFlow: EditFlow, _errorHandling?: ErrorHandling);
    set errorHandling(value: ErrorHandling);
    get errorHandling(): ErrorHandling;
    callBoundAction(sActionName: string, mParams?: Record<string, string>, oContext?: Context): Promise<boolean>;
}
