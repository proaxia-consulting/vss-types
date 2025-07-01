import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
declare const OverrideActionDialog: {
    onCreate(api: IObjectPageExtensionAPI | IListReportExtensionAPI, actionDialog: Dialog): void;
    onSubmit(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Event): void;
};
/**
 * @namespace pacg.com.cm.ext
 */
export default OverrideActionDialog;
