declare const DialogAction: {
    open(dialogFactory: import("vss/com/rcl/templates/ListReport/AbstractDeliveryActionDialogFactory").default): void;
    executeDialog(this: import("sap/fe/templates/ListReport/ExtensionAPI").default, event: import("sap/m/Button").Button$PressEvent): void;
    closeDialog(event: import("sap/m/Button").Button$PressEvent): void;
};
/**
 * @namespace pacg.com.dlv.eh.listReport
 */
export default DialogAction;
