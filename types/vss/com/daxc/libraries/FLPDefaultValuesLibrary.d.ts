import Filter from "sap/ui/model/Filter";
import type { FLPFiltersType, TSelectOption, TUserDefaultParameter } from "vss/com/daxc/types/CustomData";
export declare const SupportedValues: {
    Plant: string;
    SalesOrganization: string;
    Division: string;
    CompanyCode: string;
};
export declare function getFLPDefaultValues(): Promise<TUserDefaultParameter[]>;
export declare function constructFiltersFromGlobalFilters(aObjectFilters: FLPFiltersType[]): Filter[];
export declare function constructFiltersFromFLPDefaultValues(aDefs: TUserDefaultParameter[]): Filter[];
export declare function getFilterFromSelectOption(sPath: string, oSelectOption: TSelectOption): Filter;
