import type Event from "sap/ui/base/Event";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
declare const SmartFilter: {
    onBeforeVariantSave(this: IWPLController, oEvent: Event): void;
    onBeforeVariantFetch(this: IWPLController, oEvent: Event): void;
    onAfterVariantLoad(this: IWPLController, oEvent: Event): void;
    onSearch(this: IWPLController, oEvent: Event): void;
    /**
     * This event is fired when the Clear button is pressed. The consumer has to clear all filters.
     */
    onClear(this: IWPLController, oEvent: Event): void;
    /**
     * This event is fired when a filter or multiple filters has been changed.
     */
    onFilterChange(this: IWPLController, oEvent: Event): void;
    _setShowAllResourcesChbVis(this: IWPLController, bFlag: boolean): void;
};
/**
 * @namespace dbme.srs.com.wpl.helper
 */
export default SmartFilter;
