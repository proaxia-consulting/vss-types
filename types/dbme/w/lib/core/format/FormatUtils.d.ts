/**
 * @example
 * 1. this === control ref.
 *  property="{
 * 		path: 'samplePath',
 * 		formatter: dbme.w.lib.core.format.FormatUtils.{METHOD_NAME}
 * 	}"
 * 2. this === controller ref. (@see dbme.w.lib.core.controller.Base)
 *  property="{
 * 		path: 'samplePath',
 * 		formatter: .formatter.{METHOD_NAME}
 * 	}"
 */
import { ValueState } from "sap/ui/core/library";
declare const FormatUtils: {
    SplitCommaToInt(sValue: string): number[];
    parseBoolean(sValue: string): boolean;
    matchingStatusToValueState(sValue: string): ValueState;
    dateLocal: typeof import("dbme/c/format/DateFormat").dateLocal;
    dateString: typeof import("dbme/c/format/DateFormat").dateString;
    dateTimeString: typeof import("dbme/c/format/DateFormat").dateTimeString;
    duration: typeof import("dbme/c/format/DateFormat").duration;
    getLocalByUTCDate: typeof import("dbme/c/format/DateFormat").getLocalByUTCDate;
    getUTCDate: typeof import("dbme/c/format/DateFormat").getUTCDate;
    jsDate: typeof import("dbme/c/format/DateFormat").jsDate;
    jsDateTime: typeof import("dbme/c/format/DateFormat").jsDateTime;
};
/**
 * @global
 * @namespace dbme.w.lib.core.format
 */
export default FormatUtils;
