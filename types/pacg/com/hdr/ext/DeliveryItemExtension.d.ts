import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import { type TDeliveryItemEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @nonui5
 */
export default class DeliveryItemExtension extends AbstractObjectPageExtension<TDeliveryItemEntity> {
    protected run(): void;
    contextLoaded(): Promise<import("sap/ui/model/odata/v4/Context").default>;
    entityLoaded(): Promise<TDeliveryItemEntity>;
    invokeHandoverCreate(navigateIfExists?: boolean): Promise<unknown>;
    onAfterActionExecution(actioName: string): Promise<boolean | void>;
    private _onAfterHandoverCreate;
    private _isSemanticHandoverCreate;
    private _readHandoverContext;
}
