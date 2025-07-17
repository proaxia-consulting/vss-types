import { type TDeliveryItemEntity } from "vss/com/rcl/types/EntitySet";
import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
/**
 * @nonui5
 */
export default class DeliveryItemExtension extends AbstractObjectPageExtension<TDeliveryItemEntity> {
    protected run(): void;
    contextLoaded(): Promise<import("sap/ui/model/odata/v4/Context").default>;
    entityLoaded(): Promise<TDeliveryItemEntity>;
    invokeHandoverCreate(navigateIfExists?: boolean): Promise<any>;
    onAfterActionExecution(actioName: string): Promise<any>;
    private _onAfterHandoverCreate;
    private _isSemanticHandoverCreate;
    private _readHandoverContext;
}
