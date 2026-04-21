import type ListReportExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type { Button$PressEvent } from "sap/m/Button";
import type AbstractDeliveryActionDialogFactory from "vss/com/rcl/templates/ListReport/AbstractDeliveryActionDialogFactory";
declare const DeliveryActionDialog: {
    open(dialogFactory: AbstractDeliveryActionDialogFactory): void;
    executeDialog(this: ListReportExtensionAPI, event: Button$PressEvent): void;
    closeDialog(event: Button$PressEvent): void;
};
/**
 * @namespace pacg.com.so.eh.listReport
 */
export default DeliveryActionDialog;
