import type { DemandEntity } from "dbme/w/lib/core/types/IEntity";
import type Event from "sap/ui/base/Event";
import type { DragDropInfo$DragStartEvent } from "sap/ui/core/dnd/DragDropInfo";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
declare const CalDragDrop: {
    onDemandDragStart(this: IWPLController, oEvent: DragDropInfo$DragStartEvent): void;
    onDemandDragEnter(oEvent: Event): void;
    onDemandDrop(this: IWPLController, oEvent: Event): Promise<void> | Promise<import("sap/m/Dialog").default>;
    _getAllocationEndDateByDemand(oDemand: DemandEntity, oDateFrom: Date): Date;
    onAppointmentDrop(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): void;
    onAppointmentResize(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): void;
    onAppointmentCreate(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: Event): void;
    onAppointmentDragEnter(this: import("dbme/w/lib/core/types/IController").ICalendarController, oEvent: import("sap/m/PlanningCalendarRow").PlanningCalendarRow$AppointmentDragEnterEvent): void;
};
/**
 * @namespace dbme.srs.com.wpl.helper
 */
export default CalDragDrop;
