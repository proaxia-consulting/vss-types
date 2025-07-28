import Filter from "sap/ui/model/Filter";
import type { TSelectOption, TUserDefaultParameter } from "vss/com/daxc/types/CustomData";
export declare const SupportedValues: {
    Plant: string;
    SalesOrganization: string;
    Division: string;
    CompanyCode: string;
};
export declare function getFLPDefaultValues(): Promise<TUserDefaultParameter[]>;
export declare function constructFiltersFromGlobalFilters(aObjectFilters: {
    bAnd: boolean;
    aFilters: ({
        _bMultiFilter: boolean;
        aFilters: Filter[];
    } & Filter)[];
}[]): Filter[];
export declare function constructFiltersFromFLPDefaultValues(aDefs: TUserDefaultParameter[]): Filter[];
export declare function getFilterFromSelectOption(sPath: string, oSelectOption: TSelectOption): Filter;
