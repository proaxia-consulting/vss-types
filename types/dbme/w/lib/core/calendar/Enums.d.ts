export { EntitySet, type EntitySetType, ModelName, Uxfc, type UxfcType } from "dbme/w/lib/core/model/Enums";
export declare const PlanningMode: {
    readonly Manual: "M";
    readonly Rescheduling: "R";
};
export type PlanningModeType = (typeof PlanningMode)[keyof typeof PlanningMode];
export declare const CalendarIntervalType: {
    readonly OneDay: "OneDay";
};
export declare const IntervalType: {
    readonly Absence: "A";
    readonly RecurringAbsence: "F";
    readonly Break: "B";
    readonly Demands: "D";
    readonly Holidays: "H";
    readonly Reservation: "R";
    readonly RecurringReservation: "E";
    readonly Availability: "V";
    readonly TimeClocking: "T";
};
export type IntervalTypeType = (typeof IntervalType)[keyof typeof IntervalType];
export declare const ControlId: {
    readonly Calendar: "pc";
    readonly Filter: "idFilter";
    readonly SearchField: "idSearchField";
};
