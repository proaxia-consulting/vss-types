import Filter from "sap/ui/model/Filter";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
type $AppointmentFiltersQuerySettings = {
    DemandType: string;
    ResourceRole: string;
};
/**
 * @namespace dbme.w.lib.core.calendar.model
 */
export declare function fetchAppointmentFilters(model: ODataModel, aptData: IntervalEntity, settings?: $AppointmentFiltersQuerySettings): Promise<Filter[]>;
export {};
