import Raw from "sap/ui/model/odata/type/Raw";
/**
 * @global true
 * @namespace vss.com.rcl.model.type
 */
export default class CharacteristicValues extends Raw {
    constructor(oFormatOptions?: object, oConstraints?: object);
    formatValue(vValue: unknown, sTargetType: string): unknown;
    getName(): string;
}
