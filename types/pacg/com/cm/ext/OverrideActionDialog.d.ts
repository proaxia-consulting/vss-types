import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type Dialog from "sap/m/Dialog";
import { type Button$PressEvent } from "sap/m/Button";
declare const OverrideActionDialog: {
    onCreate(api: IObjectPageExtensionAPI | IListReportExtensionAPI, actionDialog: Dialog): void;
    onSubmit(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Button$PressEvent): void;
};
/**
 * @namespace pacg.com.cm.ext
 */
export default OverrideActionDialog;
