import DateTimeBase from "sap/ui/model/type/DateTime";
/**
 * DateTime type. Input value as string: yyyy-MM-dd'T'HH:mm:ss
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @namespace dbme.c.model.type
 *
 * @global
 */
export default class DateTime extends DateTimeBase {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
}
