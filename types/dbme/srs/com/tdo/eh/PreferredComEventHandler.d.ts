import type Event from "sap/ui/base/Event";
import type Context from "sap/ui/model/odata/v2/Context";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
/**
 * @namespace dbme.srs.com.tdo.eh
 */
declare const PreferredComEventHandler: {
    onInnerControlsCreated(this: IOrderAwareController, oEvent: Event): void;
    onSelectionChange(this: IOrderAwareController, oEvent: Event, oCtx?: Context): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default PreferredComEventHandler;
