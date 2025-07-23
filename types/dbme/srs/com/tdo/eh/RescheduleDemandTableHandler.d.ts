import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type Event from "sap/ui/base/Event";
import type { SmartTable$BeforeRebindTableEvent, SmartTable$InitialiseEvent } from "sap/ui/comp/smarttable/SmartTable";
import type RescheduleController from "dbme/srs/com/tdo/controller/action/Reschedule.controller";
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
