import FacetFilter from "sap/m/FacetFilter";
import Filter from "sap/ui/model/Filter";
declare const FacetFilterUtils: {
    getFilter(oFacetFilter: FacetFilter): Filter | undefined;
};
/**
 * @namespace dbme.w.lib.core.util
 * @global
 */
export default FacetFilterUtils;
