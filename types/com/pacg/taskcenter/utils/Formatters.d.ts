import { ValueState } from "sap/ui/core/library";
declare const Formatter: {
    formatState: (criticality: string) => ValueState;
    formatStateIcon: (criticality: string) => "" | "sap-icon://message-error" | "sap-icon://message-warning" | "sap-icon://message-success" | "sap-icon://message-information";
    formatCommentCnt: (cntAll: number, cntNew: number) => string;
    formatCommentState: (cntAll: number, cntNew: number) => ValueState.Information | ValueState.None;
    formatCommentTooltip: (cntAll: number, cntNew: number) => string;
    formatAttachmentCnt: (cntAll: number, cntNew: number) => string;
    formatAttachmentState: (cntAll: number, cntNew: number) => ValueState.Information | ValueState.None;
    formatAttachmentTooltip: (cntAll: number, cntNew: number) => string;
    dateTime: (value: string | number | Date) => Date;
    formatDuration: (durInSecs: number) => string;
    formatFileSize: (nInput: number) => string;
    formatSrcObExtId(sValue: string): string;
    sFormat(sInput: string, ...args: string[]): string;
};
/**
 * @namespace com.pacg.taskcenter.ext
 */
export default Formatter;
