import type Filter from "sap/ui/model/Filter";
export declare const SupportedTaskCenterValues: {
    Plant: string;
    SalesOrganization: string;
    CompanyCode: string;
    CompanyDataAuthRequired: string;
};
export declare const SupportedValues: {
    Division: string;
    Plant: string;
    SalesOrganization: string;
    CompanyCode: string;
    CompanyDataAuthRequired: string;
};
export declare function getValidFilters(aFilters: Filter[], aSupportedValues: string[]): Filter[];
