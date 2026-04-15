import type PlanningCalendar from "sap/m/PlanningCalendar";
import type PlanningCalendarRow from "sap/m/PlanningCalendarRow";
import type Event from "sap/ui/base/Event";
import type CalendarAppointment from "dbme/w/lib/core/control/CalendarAppointment";
export type DateBoundariesType = {
    startDate: Date;
    endDate: Date;
};
export type DateBoundariesObjType = {
    oStartDate: Date;
    oEndDate: Date;
};
export type DateBoundariesStringType = {
    sStartDate: string;
    sEndDate: string;
};
/**
 * @deprecated use DateBoundariesType
 */
export type TDateBoundariesSimple = {
    startDate?: Date;
    endDate?: Date;
};
export type TDateBoundaries = DateBoundariesObjType & DateBoundariesStringType;
export type IPlanningCalendar = {
    getAppointments(): CalendarAppointment[];
    getDateBoundaries(): TDateBoundaries;
    getIntervalPeriod(): number;
    getSelectedAppointments(): CalendarAppointment[];
    getStartDate(): Date;
    getStartDateBySelectedView(): Date;
    getMaxDate(): Date;
    setStartDate(date: Date): IPlanningCalendar;
    onAppointmentContextMenu(appointment: CalendarAppointment, event: Event): void;
    onAppointmentDblClick(appointment: CalendarAppointment, event: Event): void;
    rowsLoaded(): Promise<PlanningCalendarRow[]>;
} & PlanningCalendar;
