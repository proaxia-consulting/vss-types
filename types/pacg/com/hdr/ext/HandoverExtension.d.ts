import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import type { THandoverEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @nonui5
 */
export declare class HandoverExtension extends AbstractObjectPageExtension<THandoverEntity> {
    protected run(): void;
    contextLoaded(): Promise<import("sap/ui/model/odata/v4/Context").default>;
}
