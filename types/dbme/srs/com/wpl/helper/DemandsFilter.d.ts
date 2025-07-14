import type Event from "sap/ui/base/Event";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import Filter from "sap/ui/model/Filter";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
declare const DemandsFilter: {
    onDemandsFacetFilterConfirm(this: IWPLController, oEvent: Event): void;
    _getDemandsFilter(this: IWPLController): Promise<SmartFilterBar>;
    _getDemandsSearchFilter(this: IWPLController): Promise<Filter | undefined>;
    onDemandSearch(this: IWPLController, oEvent: Event): void;
    _applyDemandsFilters(this: IWPLController, bForce?: boolean): Promise<void>;
};
/**
 * @namespace dbme.srs.com.wpl.helper
 */
export default DemandsFilter;
