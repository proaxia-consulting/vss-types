import type Event from "sap/ui/base/Event";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const ActionButtonPressHandler: {
    onPress(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Event): void;
};
/**
 * @namespace pacg.com.cm.eh
 */
export default ActionButtonPressHandler;
