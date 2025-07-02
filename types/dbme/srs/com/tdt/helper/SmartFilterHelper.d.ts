import type IndexController from "../controller/Index.controller";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import type Filter from "sap/ui/model/Filter";
import type Event from "sap/ui/base/Event";
declare const SmartFilterHelper: {
    applyFiltersFromData(this: IndexController, data: Record<string, unknown>, replace?: boolean): Promise<void>;
    applyFilters(this: IndexController, ...filter: Filter[]): Promise<void>;
    onSearch(this: IndexController, event: Event<{}, SmartFilterBar>): void;
    /**
     * This event is fired when the Clear button is pressed. The consumer has to clear all filters.
     */
    onClear(this: IndexController, event: Event<{}, SmartFilterBar>): void;
};
/**
 * @namespace dbme.srs.com.tdt.helper
 */
export default SmartFilterHelper;
