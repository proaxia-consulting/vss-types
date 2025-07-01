export declare enum FormatPattern {
    DATETIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss",
    DATE_FORMAT = "yyyy-MM-dd",
    TIME_FORMAT = "HH:mm:ss",
    DATETIME_EMPTY_STRING = "0000-00-00T00:00:00",
    DATE_EMPTY_STRING = "0000-00-00",
    TIME_EMPTY_STRING = "00:00:00"
}
export declare const DATETIME_FORMAT = FormatPattern.DATETIME_FORMAT;
export declare const DATE_FORMAT = FormatPattern.DATE_FORMAT;
export declare const TIME_FORMAT = FormatPattern.TIME_FORMAT;
export declare const DATETIME_EMPTY_STRING = FormatPattern.DATETIME_EMPTY_STRING;
export declare const DATE_EMPTY_STRING = FormatPattern.DATE_EMPTY_STRING;
export declare const TIME_EMPTY_STRING = FormatPattern.TIME_EMPTY_STRING;
/**
 * @return {String} Date in dbme.c.format.DateFormat.DATETIME_FORMAT format
 */
export declare function dateTimeString(this: unknown, oDate: Date, bUTC?: boolean): string;
/**
 * @return {String} Time in dbme.c.format.DateFormat.DATE_FORMAT format
 */
export declare function dateString(this: unknown, oDate: Date, bUTC?: boolean): string;
/**
 * @return {String} Time in dbme.c.format.DateFormat.TIME_FORMAT format
 */
export declare function timeString(this: unknown, oDate: Date, bUTC?: boolean): string;
/**
 * @param {String} sDateTime Date in dbme.c.format.DateFormat.DATETIME_FORMAT format
 * @param {?String} [sStyle=medium] 'short, 'medium', 'long' or 'full' @see sap.ui.core.format.DateFormat
 * @return {String} User locale formatted date
 */
export declare function dateLocal(this: unknown, sDateTime: string, sStyle?: string): string | null;
/**
 * @param {number} iSeconds	Duration in seconds
 * @return {String} Time in HH:mm:ss format
 */
export declare function duration(this: unknown, iSeconds: string): string;
export declare function jsDate(this: unknown, sDate: string | number | Date): Date | null;
export declare function jsDateTime(this: unknown, sDate: string | number | Date, bUTC?: boolean): Date | null;
export declare function getUTCDate(this: unknown, oDate?: Date): Date;
export declare function getLocalByUTCDate(this: unknown, oDate: Date): Date | null;
/**
 * Date formatting utilities
 *
 * @since 1.0.0
 * @namespace dbme.c.format
 * @global
 */
declare const _default: {
    dateLocal: typeof dateLocal;
    dateString: typeof dateString;
    dateTimeString: typeof dateTimeString;
    duration: typeof duration;
    getLocalByUTCDate: typeof getLocalByUTCDate;
    getUTCDate: typeof getUTCDate;
    jsDate: typeof jsDate;
    jsDateTime: typeof jsDateTime;
};
export default _default;
