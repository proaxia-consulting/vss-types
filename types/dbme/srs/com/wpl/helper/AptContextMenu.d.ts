import type Event from "sap/ui/base/Event";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
declare const AptContextMenu: {
    onMenuOpenOrder(this: IWPLController, oEvent: Event): void;
    onSelectOrderAllocations(this: IWPLController, oEvent: Event): void;
    onBeforeOpenContextMenu(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): void;
    onShowDetailsDialog(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): Promise<import("sap/m/Dialog").default>;
    onShowEditForm(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): Promise<import("sap/m/Dialog").default>;
    onBtnAppointmentRemove(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): void;
};
/**
 * @namespace dbme.srs.com.wpl.helper
 */
export default AptContextMenu;
