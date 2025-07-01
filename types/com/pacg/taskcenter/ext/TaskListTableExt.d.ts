import IconTabBar from "sap/m/IconTabBar";
import EventProvider from "sap/ui/base/EventProvider";
/**
 * purpose of this class is to attach update of action toolbar control binding in table control after
 * table gets updated in List Report page
 *
 * @namespace com.pacg.taskcenter.ext
 */
export default class TaskListTableExt extends EventProvider {
    constructor(tabView: IconTabBar);
    private _actionToolbarUpdate;
}
