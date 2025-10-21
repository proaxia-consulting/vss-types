import type Event from "sap/ui/base/Event";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
/**
 * @namespace com.pacg.taskcenter.ext
 */
export default class TaskListHandler {
    static onActionButton(this: IListReportExtensionAPI, oEvent: Event): void;
}
