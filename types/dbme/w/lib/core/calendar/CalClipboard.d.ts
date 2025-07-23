import type Event from "sap/ui/base/Event";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
declare const CalClipboard: {
    onBtnAppointmentCopy(this: ICalendarController, oEvent: Event): void;
    onBtnAppointmentCut(this: ICalendarController, oEvent: Event): void;
    onBtnAppointmentPaste(this: ICalendarController, oEvent: Event): void;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalClipboard;
