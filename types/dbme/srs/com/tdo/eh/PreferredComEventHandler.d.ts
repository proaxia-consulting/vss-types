import type { MultiComboBox$SelectionChangeEvent } from "sap/m/MultiComboBox";
import type { SmartField$InnerControlsCreatedEvent } from "sap/ui/comp/smartfield/SmartField";
import type Context from "sap/ui/model/odata/v2/Context";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
/**
 * @namespace dbme.srs.com.tdo.eh
 */
declare const PreferredComEventHandler: {
    onInnerControlsCreated(this: IOrderAwareController, oEvent: SmartField$InnerControlsCreatedEvent): void;
    onSelectionChange(this: IOrderAwareController, oEvent: MultiComboBox$SelectionChangeEvent, oCtx?: Context): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default PreferredComEventHandler;
