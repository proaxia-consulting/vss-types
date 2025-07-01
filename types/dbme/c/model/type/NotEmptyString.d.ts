import StringType from "sap/ui/model/type/String";
/**
 * @namespace dbme.c.model.type
 * @global
 */
export default class NotEmptyString extends StringType {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
    validateValue(sValue: string): void;
}
