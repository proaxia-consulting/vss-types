import Context from "sap/ui/model/odata/v4/Context";
import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import { ActionName, ContextCheck } from "pacg/com/dlv/model/Enums";
import Dialog from "sap/m/Dialog";
/**
 * @nonui5
 * @namespace pacg.com.dlv.ext.action
 */
export default class ActionHelper {
    static executeAction(this: ExtensionAPI, actionName: ActionName, selectedContexts: Context[], dialog?: Dialog): void;
    static isDeliveryCreated(selectedContexts: Context[], contextCheck?: ContextCheck): boolean;
}
