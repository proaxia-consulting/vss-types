import type ODataV2ListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type ODataV4ListBinding from "sap/ui/model/odata/v4/ODataListBinding";
import type { IScreenSection } from "dbme/srs/com/tdo/types/ITabsAware";
/**
 * @namespace dbme.srs.com.tdo.helper
 * @nonui5
 */
export default class ScreenSectionBindingRefresh {
    private _listBinding;
    registerListBinging(section: IScreenSection, binding: ODataV2ListBinding | ODataV4ListBinding): void;
    refresh(): void;
}
