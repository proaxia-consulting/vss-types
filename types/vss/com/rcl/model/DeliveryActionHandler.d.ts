import type ListReportExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type ObjectPageExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type Dialog from "sap/m/Dialog";
import type Context from "sap/ui/model/odata/v4/Context";
import { type DeliveryActionType } from "vss/com/rcl/model/DeliveryActionCommand";
import type { ActionParameter } from "vss/com/rcl/types/EntitySet";
declare const DeliveryActionHandler: {
    executeActionOData(this: ListReportExtensionAPI | ObjectPageExtensionAPI, actionName: DeliveryActionType, selectedContexts: Context[], withDialog?: Dialog | boolean, parameterValues?: ActionParameter[]): Promise<void>;
    executeAction(this: ListReportExtensionAPI | ObjectPageExtensionAPI, actionName: DeliveryActionType, selectedContexts: Context[], dialog?: Dialog): void;
};
/**
 * @namespace vss.com.rcl.model
 */
export default DeliveryActionHandler;
