import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @nonui5
 * @namespace pacg.com.rcm.ext
 */
export default class ObjectPageToolbarExtension extends AbstractObjectPageExtension<TRootEntity> {
    protected run(): void;
    protected _contextLoaded(): Promise<import("sap/ui/model/odata/v4/Context").default>;
    private createActionAddToCart;
}
