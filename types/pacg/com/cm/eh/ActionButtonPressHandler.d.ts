import Event from "sap/ui/base/Event";
import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
declare const ActionButtonPressHandler: {
    onPress(this: IObjectPageExtensionAPI | IListReportExtensionAPI, event: Event): void;
};
/**
 * @namespace pacg.com.cm.eh
 */
export default ActionButtonPressHandler;
