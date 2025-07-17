import type { IFormAware, IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { SerializedTabsType } from "dbme/srs/com/tdo/types/ITabsAware";
import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import OrderControllerExtension from "dbme/srs/com/tdo/controller/ext/OrderControllerExtension";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type Event from "sap/ui/base/Event";
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default abstract class AbstractOrder extends AbstractBase implements IOrderAwareController, IFormAware {
    extension: OrderControllerExtension;
    /** false - failure, otherwise success */
    protected _lastFormValidationResult?: boolean;
    static metadata: {
        abstract: boolean;
    };
    constructor(name: string);
    abstract isCreateOrder(): boolean;
    abstract getSelectedOrder(): IOrderEntity[];
    abstract serializeTabs(): SerializedTabsType;
    abstract _getForm(): SmartForm;
    abstract getFieldGroupIdsForValidate(): string[];
    onInit(): void;
    /**
     * Update flag of JSONModel
     */
    setSaveEnabled(flag: boolean, asyncUpdate?: boolean): void;
    /**
     * - Perform validation & side-effects on field change
     * - Collect all field changes in a batch update
     */
    onFieldChange(event: Event): void;
    /**
     * Returns invalid fields
     */
    protected _validate(event?: Event): import("sap/ui/comp/smartfield/SmartField").default[];
}
