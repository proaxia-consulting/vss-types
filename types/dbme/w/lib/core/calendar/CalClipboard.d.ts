import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { Button$PressEvent } from "sap/m/Button";
declare const CalClipboard: {
    onBtnAppointmentCopy(this: ICalendarController, oEvent: Button$PressEvent): void;
    onBtnAppointmentCut(this: ICalendarController, oEvent: Button$PressEvent): void;
    onBtnAppointmentPaste(this: ICalendarController, oEvent: Button$PressEvent): void;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalClipboard;
