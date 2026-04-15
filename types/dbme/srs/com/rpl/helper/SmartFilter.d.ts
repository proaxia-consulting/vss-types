import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type Event from "sap/ui/base/Event";
declare const SmartFilter: {
    onBeforeVariantSave(this: ICalendarController, oEvent: Event): void;
    onBeforeVariantFetch(this: ICalendarController, oEvent: Event): void;
    onAfterVariantLoad(this: ICalendarController, oEvent: Event): void;
    onSearch(this: ICalendarController, oEvent: Event): void;
    /**
     * This event is fired when the Clear button is pressed. The consumer has to clear all filters.
     */
    onClear(this: ICalendarController, oEvent: Event): void;
    /**
     * This event is fired when a filter or multiple filters has changed.
     */
    onFilterChange(this: ICalendarController, oEvent: Event): void;
};
/**
 * @namespace dbme.srs.com.rpl.helper
 */
export default SmartFilter;
