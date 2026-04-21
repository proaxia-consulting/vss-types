import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { Button$PressEvent } from "sap/m/Button";
declare const TaskListHandler: {
    onActionButton(this: IListReportExtensionAPI, oEvent: Button$PressEvent): void;
    /**
     * Event handler for custom action: select user org data
     *
     * @param pageContext the context of the page on which the event was fired
     */
    onCAUserOrgData(this: IListReportExtensionAPI): void;
};
/**
 * Set of static method handlers for Task Center List Report Page UI
 *
 * @namespace com.pacg.taskcenter.ext
 */
export default TaskListHandler;
