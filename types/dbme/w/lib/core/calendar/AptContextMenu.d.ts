import Event from "sap/ui/base/Event";
import type { ICalendarController } from "dbme/w/lib/core/types/IController";
declare const AptContextMenu: {
    /**
     * Handle calendar event
     */
    onBeforeOpenContextMenu(this: ICalendarController, oEvent: Event): void;
    onShowDetailsDialog(this: ICalendarController, oEvent: Event): Promise<import("sap/m/Dialog").default>;
    onShowEditForm(this: ICalendarController, oEvent: Event): Promise<import("sap/m/Dialog").default>;
    /**
     * Delete selected Appointments
     */
    onBtnAppointmentRemove(this: ICalendarController, oEvent: Event): void;
};
/**
 * @namespace dbme.w.lib.core.calendar
 * @global
 */
export default AptContextMenu;
