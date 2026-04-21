import type Event from "sap/ui/base/Event";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type Control from "sap/ui/core/Control";
import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import OrderControllerExtension from "dbme/srs/com/tdo/controller/ext/OrderControllerExtension";
import type { IFormAware, IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { ITabsAware, SerializedTabsType } from "dbme/srs/com/tdo/types/ITabsAware";
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default abstract class AbstractOrder extends AbstractBase implements IOrderAwareController, IFormAware, ITabsAware {
    extension: OrderControllerExtension;
    /** false - failure, otherwise success */
    protected _lastFormValidationResult?: boolean;
    protected _formMap?: Map<string, Control>;
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
    serializeForm(): Map<string, Control>;
    /**
     * Returns invalid fields
     */
    protected _validate(event?: Event): import("sap/ui/comp/smartfield/SmartField").default[];
}
