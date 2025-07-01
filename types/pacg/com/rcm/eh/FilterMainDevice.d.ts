import type Event from "sap/ui/base/Event";
import { type MultiComboBox$SelectionFinishEvent } from "sap/m/MultiComboBox";
import type { IListReportController } from "vss/com/fe/ListReport";
declare const FilterMainDevice: {
    onSelectionChange(this: IListReportController, event: Event): void;
    onSelectionFinish(this: IListReportController, event: MultiComboBox$SelectionFinishEvent): void;
};
/**
 * @namespace pacg.com.rcm.eh
 */
export default FilterMainDevice;
