import Popover from "sap/m/Popover";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import Event from "sap/ui/base/Event";
declare const CalLegend: {
    showLegend(this: ICalendarController, oEvent: Event): Promise<Popover>;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default CalLegend;
