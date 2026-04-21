import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { TActionEntity } from "pacg/com/rfm/types/Entity";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { type Button$PressEvent } from "sap/m/Button";
/**
 * @namespace pacg.com.rfm.eh
 */
declare const ActionButtonPressHandler: {
    onPress(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Button$PressEvent, actionData?: TActionEntity): void;
};
/**
 * @namespace pacg.com.rfm.eh
 */
export default ActionButtonPressHandler;
