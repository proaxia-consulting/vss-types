import type Dialog from "sap/m/Dialog";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { type DeliveryActionType } from "vss/com/rcl/model/DeliveryActionCommand";
import type { ActionParameter } from "vss/com/rcl/types/EntitySet";
declare const DeliveryActionHandler: {
    executeActionOData(this: IListReportExtensionAPI | IObjectPageExtensionAPI, actionName: DeliveryActionType, selectedContexts: Context[], withDialog?: Dialog | boolean, parameterValues?: ActionParameter[]): Promise<void>;
    executeAction(this: IListReportExtensionAPI | IObjectPageExtensionAPI, actionName: DeliveryActionType, selectedContexts: Context[], dialog?: Dialog): void;
};
/**
 * @namespace vss.com.rcl.model
 */
export default DeliveryActionHandler;
