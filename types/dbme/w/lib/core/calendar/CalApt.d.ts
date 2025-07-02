import Control from "sap/ui/core/Control";
import CalendarAppointment from "sap/ui/unified/CalendarAppointment";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import Dialog from "sap/m/Dialog";
import { type Button$PressEvent } from "sap/m/Button";
import type MenuItem from "sap/ui/unified/MenuItem";
type TFormSourceData = {
    DESCR1?: string;
    CHARDT_FROM?: string;
    CHARDT_TO?: string;
};
declare const CalApt: {
    /**
     * Possible call context:
     * - WPL demand drop (@see CalDragDrop)
     * - WPL/RPL appointment copy/cut&paste (@see CalClipboard)
     * - WPL/RPL calendar header create menu (@see CalCreateMenu)
     * - WPL/RPL appointment context menu: Edit (@see AptContextMenu)
     */
    showForm(this: ICalendarController, oSourceControl: CalendarAppointment | MenuItem | Control, oSourceData?: TFormSourceData): Promise<Dialog>;
    submit(this: ICalendarController, oEvent: Button$PressEvent): void;
    cancel(this: ICalendarController, oEvent: Button$PressEvent): void;
    showDetails(this: ICalendarController, oApt: CalendarAppointment): Promise<Dialog>;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalApt;
