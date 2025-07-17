import type { UIAppSettingsEntity } from "dbme/w/lib/core/types/IEntity";
declare const FormatSettings: {
    settingValue(entity: UIAppSettingsEntity): string | boolean | Date;
    SplitCommaToInt(sValue: string): number[];
    parseBoolean(sValue: string): boolean;
    matchingStatusToValueState(sValue: string): import("sap/ui/core/library").ValueState;
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
 * @namespace dbme.srs.com.settings.format
 */
export default FormatSettings;
