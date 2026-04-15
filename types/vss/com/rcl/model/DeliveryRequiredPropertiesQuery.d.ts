import type Context from "sap/ui/model/odata/v4/Context";
import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import type { DeliveryEntity as RootEntity } from "vss/com/rcl/types/EntitySet";
export declare function isDeliveryItemContext(context: Context): boolean;
export declare function createFilterFromContext(...context: Context[]): string;
export declare function isEnabledQuery(properties: string | string[], ...context: Context[]): Promise<boolean>;
/**
 * @nonui5
 * @namespace vss.com.rcl.model
 */
export default class DeliveryRequiredPropertiesQuery extends AbstractObjectPageExtension<RootEntity> {
    protected run(): void;
}
