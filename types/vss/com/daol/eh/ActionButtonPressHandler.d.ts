import type { Button$PressEvent } from "sap/m/Button";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { TActionEntity } from "vss/com/daol/model/Enums";
/**
 * Handler for overridden Fiori action buttons
 * @namespace vss.com.daol.eh
 */
declare const ActionButtonPressHandler: {
    onPress(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Button$PressEvent, actionData?: TActionEntity): void;
};
/**
 * @namespace vss.com.daol.eh
 */
export default ActionButtonPressHandler;
