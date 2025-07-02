import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
declare const MainListHelper: {
    getFilterBar(): import("sap/ui/mdc/FilterBar").default;
    api(): IListReportExtensionAPI;
};
/**
 * @namespace pacg.com.rcm.utils
 */
export default MainListHelper;
