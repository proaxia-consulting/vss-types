import type { DateBoundariesObjType, DateBoundariesType } from "dbme/w/lib/core/types/ICalendar";
/**
 * @namespace dbme.w.lib.core.calendar
 */
declare const CalendarUtils: {
    getLocalTimezoneName(): string;
    getLocalTimezoneOffset(): number;
    setFirstDayOfWeek(sValue: string): void;
    getFirstDayOfWeek(): number;
    getWeekDays(): string[];
    getMonths(): string[];
    adjustDateYmd(oDate: Date, oBaseDate?: Date): Date;
    adjustYmd(oDate: DateBoundariesType, oBaseDate: DateBoundariesObjType): DateBoundariesType;
    getMaxDate(): Date;
};
/**
 * @global
 */
export default CalendarUtils;
