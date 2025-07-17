import IntegerType from "sap/ui/model/type/Integer";
/**
 * Mileage type
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @namespace dbme.c.model.type
 *
 * @global
 */
export default class Mileage extends IntegerType {
    protected sName: string;
    constructor(oFormatOptions?: {}, oConstraints?: object);
    formatValue(vValue: unknown, sInternalType: string): unknown;
}
