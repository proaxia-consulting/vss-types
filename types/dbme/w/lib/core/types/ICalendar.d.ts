import type PlanningCalendar from "sap/m/PlanningCalendar";
import type PlanningCalendarRow from "sap/m/PlanningCalendarRow";
import type Event from "sap/ui/base/Event";
import type CalendarAppointment from "dbme/w/lib/core/control/CalendarAppointment";
export type TDateBoundariesSimple = {
    startDate?: Date | string | number;
    endDate?: Date | string | number;
};
export type TDateBoundaries = TDateBoundariesSimple & {
    oStartDate?: Date;
    oEndDate?: Date;
    sStartDate?: string;
    sEndDate?: string;
};
export interface IPlanningCalendar extends PlanningCalendar {
    getAppointments(): CalendarAppointment[];
    getDateBoundaries(): TDateBoundaries;
    getIntervalPeriod(): number;
    getSelectedAppointments(): CalendarAppointment[];
    getStartDate(): Date;
    getStartDateBySelectedView(): Date;
    getMaxDate(): Date;
    setStartDate(date: Date): this;
    onAppointmentContextMenu(appointment: CalendarAppointment, event: Event): void;
    onAppointmentDblClick(appointment: CalendarAppointment, event: Event): void;
    rowsLoaded(): Promise<PlanningCalendarRow[]>;
}
