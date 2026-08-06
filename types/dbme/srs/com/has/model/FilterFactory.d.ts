import type FacetFilter from "sap/m/FacetFilter";
import Filter from "sap/ui/model/Filter";
/**
 * @description Build the nested filter with ORs between the values of each group and ANDs between each group
 */
export declare function createFilterFromFacetFilterControl(ff: FacetFilter): Filter | undefined;
