import type { Button$PressEvent } from "sap/m/Button";
import { OrderSelectionMode } from "dbme/srs/com/tdo/model/Enums";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
type TActionSettings = {
    SELECTION_MODE?: OrderSelectionMode;
    FUNCTION?: string;
};
declare const OrderActionHandler: {
    handleAction(this: IOrderAwareController, event: Button$PressEvent): void;
    /**
     * Make this method public to give the possibility for the action execution from dialog action controller
     */
    execute(this: IOrderAwareController, oActionData: TActionSettings, oDialogData?: {}): Promise<void>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default OrderActionHandler;
