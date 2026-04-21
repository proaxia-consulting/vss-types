import type Event from "sap/ui/base/Event";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { PlanningCalendarRow$AppointmentDragEnterEvent } from "sap/m/PlanningCalendarRow";
declare const CalDragDrop: {
    onAppointmentDrop(this: ICalendarController, oEvent: Event): void;
    onAppointmentResize(this: ICalendarController, oEvent: Event): void;
    onAppointmentCreate(this: ICalendarController, oEvent: Event): void;
    onAppointmentDragEnter(this: ICalendarController, oEvent: PlanningCalendarRow$AppointmentDragEnterEvent): void;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalDragDrop;
