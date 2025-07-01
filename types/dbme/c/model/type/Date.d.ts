import DateBase from "sap/ui/model/type/Date";
/**
 * Date type. Input value as string: yyyy-MM-dd'T'HH:mm:ss
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @name dbme.c.model.type.Date
 *
 * @global
 */
export default class DateType extends DateBase {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
}
