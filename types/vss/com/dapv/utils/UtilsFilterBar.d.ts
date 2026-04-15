import type FilterBar from "sap/ui/mdc/FilterBar";
import type FilterField from "sap/ui/mdc/FilterField";
import type FilterBarVH from "sap/ui/mdc/filterbar/vh/FilterBar";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
export declare function getFiltersFromFilterBar(oFilterBar: FilterBar): Filter[];
export declare function getFilterFieldByPropertyKey(oFilterBar: FilterBar | FilterBarVH, sPropertyKey: string): FilterField | undefined;
export declare function getFiltersFromConditions(oConditions: Record<string, {
    values: unknown[];
    operator: FilterOperator;
}[]>): Filter[];
export declare function getFilterBarConditions(oFilterBar: FilterBar): Record<string, any>;
export declare function conditionExists(oFilterBar: FilterBar, sCondition: string): boolean;
export declare function getCustomFilters(oFilterBar: FilterBar | FilterBarVH): void;
