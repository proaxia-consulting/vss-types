import type { Button$PressEvent } from "sap/m/Button";
import type Event from "sap/ui/base/Event";
import type { PlanningCalendar$BeforeOpenContextMenuEvent } from "dbme/w/lib/core/control/PlanningCalendar";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
declare const AptContextMenu: {
    /**
     * Handle calendar event
     */
    onBeforeOpenContextMenu(this: ICalendarController, oEvent: PlanningCalendar$BeforeOpenContextMenuEvent): void;
    onShowDetailsDialog(this: ICalendarController, oEvent: Button$PressEvent): Promise<import("sap/m/Dialog").default>;
    onShowEditForm(this: ICalendarController, oEvent: Button$PressEvent): Promise<import("sap/m/Dialog").default>;
    /**
     * Delete selected Appointments
     */
    onBtnAppointmentRemove(this: ICalendarController, oEvent: Event, settings?: {
        RECURRING_SINGLE?: boolean;
    }): void;
    /**
     * Delete selected Appointments of type Recurring Absence/Reservation
     */
    onBtnRecurringEventRemove(this: ICalendarController, oEvent: Event): void;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default AptContextMenu;
