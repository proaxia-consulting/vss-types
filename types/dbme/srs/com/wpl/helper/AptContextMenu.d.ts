import type { Menu$ItemSelectEvent } from "sap/ui/unified/Menu";
import { IWPLController } from "dbme/srs/com/wpl/types/IController";
declare const AptContextMenu: {
    onMenuOpenOrder(this: IWPLController, oEvent: Menu$ItemSelectEvent): void;
    onSelectOrderAllocations(this: IWPLController, oEvent: Menu$ItemSelectEvent): void;
    onBeforeOpenContextMenu(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: import("dbme/w/lib/core/control/PlanningCalendar").PlanningCalendar$BeforeOpenContextMenuEvent): void;
    onShowDetailsDialog(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: import("sap/m/Button").Button$PressEvent): Promise<import("sap/m/Dialog").default>;
    onShowEditForm(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: import("sap/m/Button").Button$PressEvent): Promise<import("sap/m/Dialog").default>;
    onBtnAppointmentRemove(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: import("sap/ui/base/Event").default, settings?: {
        RECURRING_SINGLE?: boolean;
    }): void;
    onBtnRecurringEventRemove(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: import("sap/ui/base/Event").default): void;
};
/**
 * @namespace dbme.srs.com.wpl.helper
 */
export default AptContextMenu;
