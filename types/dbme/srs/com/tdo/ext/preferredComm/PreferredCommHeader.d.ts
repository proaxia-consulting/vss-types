import type { SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
import type { Control$ValidateFieldGroupEvent } from "sap/ui/core/Control";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
/**
 * Preferred Communication event handlers (Header section)
 */
declare const PreferredCommHeader: {
    onInitialise(this: IDemandsAwareController, event: Control$ValidateFieldGroupEvent): void;
    onFieldGroupValidate(this: IDemandsAwareController, event: Control$ValidateFieldGroupEvent): void;
    onFieldChange(this: IDemandsAwareController, event: SmartField$ChangeEvent): void;
};
export default PreferredCommHeader;
