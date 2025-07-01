import StringType from "sap/ui/model/type/String";
/**
 * Vehicle Identification Number type
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @namespace dbme.c.model.type
 *
 * @global
 */
export default class VIN extends StringType {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
}
