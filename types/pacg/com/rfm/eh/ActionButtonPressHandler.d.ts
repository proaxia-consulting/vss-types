import type Event from "sap/ui/base/Event";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { TActionEntity } from "../types/Entity";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
/**
 * @namespace pacg.com.rfm.eh
 */
declare const ActionButtonPressHandler: {
    onPress(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Event, actionData?: TActionEntity): void;
};
/**
 * @namespace pacg.com.rfm.eh
 */
export default ActionButtonPressHandler;
