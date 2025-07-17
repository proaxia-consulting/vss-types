import type { TDateBoundaries, TDateBoundariesSimple } from "dbme/w/lib/core/types/ICalendar";
/**
 * @namespace dbme.w.lib.core.calendar
 */
declare const CalendarUtils: {
    getLocalTimezoneName(): string;
    getLocalTimezoneOffset(): number;
    setFirstDayOfWeek(sValue: string): void;
    /**
     * Returns: 1 - Monday, 0 - Sunday
     */
    getFirstDayOfWeek(): number;
    adjustDateYmd(oDate: Date, oBaseDate?: Date): Date;
    adjustYmd(oDate: TDateBoundariesSimple, oBaseDate: TDateBoundaries): TDateBoundaries;
    getMaxDate(): Date;
};
/**
 * @global
 */
export default CalendarUtils;
