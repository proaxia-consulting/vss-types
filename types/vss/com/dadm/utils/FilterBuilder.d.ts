import FilterBar from "sap/fe/macros/filterBar/FilterBarAPI";
import Filter from "sap/ui/model/Filter";
export declare class FilterBuilder {
    private hierarchyId;
    private selectedDate;
    private selectedTimeFrom;
    private selectedTimeTo;
    private openCompleted;
    private onlyAllocated;
    private onlyApproved;
    private filterBar;
    private columnFields;
    private rowFields;
    constructor(hierarchyId: string, selectedDate: string, selectedTimeFrom: string, selectedTimeTo: string, openCompleted: boolean, onlyAllocated: boolean, onlyApproved: boolean, filterBar: FilterBar);
    getColumnFilters(): Filter[];
    getRowFilters(): Filter[];
    columnFiltersChanged(filter: Filter[]): boolean;
    private columnMandatoryFilters;
    private rowMandatoryFilters;
    private buildColumnFields;
    private buildRowFields;
    private getFiltersFromFilterBar;
    private getFiltersRrecursively;
}
