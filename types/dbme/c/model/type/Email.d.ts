import StringType from "sap/ui/model/type/String";
/**
 * E-mail type
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @namespace dbme.c.model.type
 *
 * @global
 */
export default class Email extends StringType {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
    validateValue(sValue: string): void;
}
