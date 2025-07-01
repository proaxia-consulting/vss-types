import type Event from "sap/ui/base/Event";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
declare const CalDragDrop: {
    onAppointmentDrop(this: ICalendarController, oEvent: Event): void;
    onAppointmentResize(this: ICalendarController, oEvent: Event): void;
    onAppointmentCreate(this: ICalendarController, oEvent: Event): void;
    onAppointmentDragEnter(this: ICalendarController, oEvent: Event): void;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalDragDrop;
