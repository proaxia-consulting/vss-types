import type Event from "sap/ui/base/Event";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
declare const CalDblClick: {
    /**
     * Custom "headerDblClick" event
     */
    onCalendarHeaderDblClick(this: ICalendarController, oEvent: Event): void;
    /**
     * Custom calendar event "appointmentDblClick" handler
     */
    onAppointmentDblClick(this: ICalendarController, oEvent: Event): Promise<import("sap/m/Dialog").default>;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalDblClick;
