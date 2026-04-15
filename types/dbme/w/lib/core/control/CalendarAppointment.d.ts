import type Event from "sap/ui/base/Event";
import BaseControl from "sap/ui/unified/CalendarAppointment";
/**
 * @namespace dbme.w.lib.core.control
 */
export default class CalendarAppointment extends BaseControl {
    oncontextmenu(oEvent: Event): void;
    ondblclick(oEvent: Event): void;
}
