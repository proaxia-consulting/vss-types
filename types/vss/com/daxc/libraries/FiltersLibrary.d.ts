import Filter from "sap/ui/model/Filter";
export declare const SupportedTaskCenterValues: {
    Plant: string;
    SalesOrganization: string;
    CompanyCode: string;
    CompanyDataAuthRequired: string;
    TaskID: string;
};
export declare function getValidFilters(oFilter: Filter, aSupportedValues: string[]): Filter;
