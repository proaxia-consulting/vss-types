import IntegerType from "sap/ui/model/type/Integer";
/**
 * @namespace dbme.c.model.type
 * @global
 */
export default class Percent extends IntegerType {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
}
