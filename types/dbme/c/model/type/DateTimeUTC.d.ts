import DateTime from "sap/ui/model/type/DateTime";
/**
 * UTC DateTime type.
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @namespace dbme.c.model.type
 *
 * @global
 */
export default class DateTimeUTC extends DateTime {
    protected oConstraints: {
        minimum?: unknown;
        maximum?: unknown;
        [key: string]: unknown;
    };
    protected oInputFormat: object;
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
    validateValue(oValue: unknown): void;
    formatValue(vValue: unknown, sTargetType: string): any;
}
