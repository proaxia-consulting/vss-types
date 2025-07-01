import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { PlanningCalendar$AppointmentDblClickEvent, PlanningCalendar$HeaderDblClickEvent } from "dbme/w/lib/core/control/PlanningCalendar";
declare const CalDblClick: {
    /**
     * Custom "headerDblClick" event
     */
    onCalendarHeaderDblClick(this: ICalendarController, oEvent: PlanningCalendar$HeaderDblClickEvent): void;
    /**
     * Custom calendar event "appointmentDblClick" handler
     */
    onAppointmentDblClick(this: ICalendarController, oEvent: PlanningCalendar$AppointmentDblClickEvent): Promise<import("sap/m/Dialog").default>;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalDblClick;
