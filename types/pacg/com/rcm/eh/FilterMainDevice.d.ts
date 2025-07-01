import type Event from "sap/ui/base/Event";
import type { IListReportController } from "vss/com/fe/ListReport";
declare const FilterMainDevice: {
    onSelectionChange(this: IListReportController, event: Event): void;
    onSelectionFinish(this: IListReportController, event: Event): void;
};
/**
 * @namespace pacg.com.rcm.eh
 */
export default FilterMainDevice;
