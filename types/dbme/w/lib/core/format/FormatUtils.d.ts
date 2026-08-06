import { duration } from "dbme/c/format/DateFormat";
import { ValueState } from "sap/ui/core/library";
declare const FormatUtils: {
    SplitCommaToInt(sValue: string): number[];
    parseBoolean(sValue: string): boolean;
    matchingStatusToValueState(sValue: string): ValueState;
    durationString(ms: number): string;
    dateLocal: typeof import("dbme/c/format/DateFormat").dateLocal;
    dateString: typeof import("dbme/c/format/DateFormat").dateString;
    dateTimeString: typeof import("dbme/c/format/DateFormat").dateTimeString;
    duration: typeof duration;
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
