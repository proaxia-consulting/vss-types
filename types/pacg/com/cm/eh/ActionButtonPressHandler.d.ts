import type { Button$PressEvent } from "sap/m/Button";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const ActionButtonPressHandler: {
    onPress(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Button$PressEvent): void;
};
/**
 * @namespace pacg.com.cm.eh
 */
export default ActionButtonPressHandler;
