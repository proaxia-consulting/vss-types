declare const ActionHelper: {
    executeActionOData(this: import("vss/com/fe/ListReport").IListReportExtensionAPI | import("vss/com/fe/ObjectPage").IObjectPageExtensionAPI, actionName: import("vss/com/rcl/model/DeliveryActionCommand").DeliveryActionType, selectedContexts: import("sap/ui/model/odata/v4/Context").default[], withDialog?: import("sap/m/Dialog").default | boolean, parameterValues?: import("vss/com/rcl/types/EntitySet").ActionParameter[]): Promise<void>;
    executeAction(this: import("vss/com/fe/ListReport").IListReportExtensionAPI | import("vss/com/fe/ObjectPage").IObjectPageExtensionAPI, actionName: import("vss/com/rcl/model/DeliveryActionCommand").DeliveryActionType, selectedContexts: import("sap/ui/model/odata/v4/Context").default[], dialog?: import("sap/m/Dialog").default): void;
};
/**
 * @deprecated use vss.com.rcl.model.DeliveryActionHandler instead
 * @namespace pacg.com.dlv.ext.action
 */
export default ActionHelper;
