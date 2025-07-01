import { TUserDefaultParameter } from "../types/CustomData";
import Filter from "sap/ui/model/Filter";
import { TSelectOption } from "../types/CustomData";
export declare const SupportedValues: {
    Plant: string;
    SalesOrganization: string;
    Division: string;
    CompanyCode: string;
};
export declare function getFLPDefaultValues(): Promise<Array<TUserDefaultParameter>>;
export declare function constructFiltersFromGlobalFilters(aObjectFilters: object[]): Filter[];
export declare function constructFiltersFromFLPDefaultValues(aDefs: Array<TUserDefaultParameter>): Filter[];
export declare function getFilterFromSelectOption(sPath: string, oSelectOption: TSelectOption): Filter;
