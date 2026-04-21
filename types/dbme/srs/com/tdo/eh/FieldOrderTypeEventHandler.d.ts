import type { SmartField$InnerControlsCreatedEvent } from "sap/ui/comp/smartfield/SmartField";
import type IController from "dbme/srs/com/tdo/controller/AbstractOrder.controller";
declare const FieldOrderTypeEventHandler: {
    onInnerControlsCreated(this: IController, event: SmartField$InnerControlsCreatedEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default FieldOrderTypeEventHandler;
