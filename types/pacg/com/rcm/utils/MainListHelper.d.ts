import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
declare const MainListHelper: {
    getFilterBar(): import("vss/com/fe/ListReport").IFilterBar;
    api(): IListReportExtensionAPI;
};
/**
 * @namespace pacg.com.rcm.utils
 */
export default MainListHelper;
