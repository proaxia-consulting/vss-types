import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type Event from "sap/ui/base/Event";
declare const SmartFilter: {
    onBeforeVariantSave(this: ICalendarController, event: Event): void;
    onBeforeVariantFetch(this: ICalendarController, event: Event): void;
    onAfterVariantLoad(this: ICalendarController, event: Event): void;
    onSearch(this: ICalendarController, event: Event): void;
    /**
     * This event is fired when the Clear button is pressed. The consumer has to clear all filters.
     */
    onClear(this: ICalendarController, event: Event): void;
    /**
     * This event is fired when a filter or multiple filters has changed.
     */
    onFilterChange(this: ICalendarController, event: Event): void;
};
/**
 * @namespace dbme.srs.com.rpl.helper
 */
export default SmartFilter;
