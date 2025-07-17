import Event from "sap/ui/base/Event";
import RescheduleController from "dbme/srs/com/tdo/controller/action/Reschedule.controller";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type { SmartTable$BeforeRebindTableEvent, SmartTable$InitialiseEvent } from "sap/ui/comp/smarttable/SmartTable";
declare const RescheduleDemandTableHandler: {
    onSelectionChange(this: RescheduleController, event: ListBase$SelectionChangeEvent): void;
    onBeforeRebind(this: RescheduleController, event: SmartTable$BeforeRebindTableEvent): void;
    /**
     * Force UTC conversion for date/time fields since dateFormatSettings from SmartTable are not propagated
     */
    onInitialise(this: RescheduleController, event: SmartTable$InitialiseEvent): void;
    onDataReceived(this: RescheduleController, event: Event): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default RescheduleDemandTableHandler;
