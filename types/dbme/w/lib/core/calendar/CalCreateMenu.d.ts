import type { Button$PressEvent } from "sap/m/Button";
import type Menu from "sap/ui/unified/Menu";
import type { MenuItemBase$SelectEvent } from "sap/ui/unified/MenuItemBase";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
declare const CalCreateMenu: {
    onShowMenu(this: ICalendarController, oEvent: Button$PressEvent): Promise<Menu>;
    onMenuItemSelect(this: ICalendarController, oEvent: MenuItemBase$SelectEvent): Promise<import("sap/m/Dialog").default>;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalCreateMenu;
