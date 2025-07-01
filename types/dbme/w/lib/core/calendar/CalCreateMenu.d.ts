import { ICalendarController } from "dbme/w/lib/core/types/IController";
import type Event from "sap/ui/base/Event";
import type Menu from "sap/ui/unified/Menu";
declare const CalCreateMenu: {
    onShowMenu(this: ICalendarController, oEvent: Event): Promise<Menu>;
    onMenuItemSelect(this: ICalendarController, oEvent: Event): Promise<import("sap/m/Dialog").default>;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalCreateMenu;
