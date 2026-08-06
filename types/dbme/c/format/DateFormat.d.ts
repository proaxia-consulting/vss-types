import UI5Date from "sap/ui/core/date/UI5Date";
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
 * @return {String} Date in dbme.c.format.DateTime.DATETIME_FORMAT format
 */
export declare function dateTimeString(oDate: Date, bUTC?: boolean): string;
/**
 * @return {String} Time in dbme.c.format.DateTime.DATE_FORMAT format
 */
export declare function dateString(oDate: Date, bUTC?: boolean): string;
/**
 * @return {String} Time in dbme.c.format.DateTime.TIME_FORMAT format
 */
export declare function timeString(oDate: Date, bUTC?: boolean): string;
/**
 * @param {String} sDateTime Date in dbme.c.format.DateTime.DATETIME_FORMAT format
 * @param {?String} [sStyle=medium] 'short, 'medium', 'long' or 'full' @see sap.ui.core.format.DateFormat
 * @return {String} User locale formatted date
 */
export declare function dateLocal(sDateTime: string, sStyle?: string): string | null;
/**
 * @param {number} iSeconds	Duration in seconds
 * @return {String} Time in HH:mm:ss format
 */
export declare function duration(iSeconds: string): string;
export declare function jsDate(sDate: string | number | Date): Date | UI5Date | null;
export declare function jsDateTime(sDate: string | number | Date, bUTC?: boolean): Date | UI5Date | null;
export declare function getUTCDate(oDate?: UI5Date | Date): Date | UI5Date;
export declare function getLocalByUTCDate(oDate: Date): Date | UI5Date | null;
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
