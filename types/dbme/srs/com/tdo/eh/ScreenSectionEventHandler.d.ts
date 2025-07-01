import type Control from "sap/ui/core/Control";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { ITabsAware, IScreenSection } from "dbme/srs/com/tdo/types/ITabsAware";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
export interface ITableSelectionChangeParams {
    controller: IDemandsAwareController;
    items: Control[];
    selected: boolean;
}
export interface ITableItemsLoadedParams {
    controller?: ITabsAware;
    binding?: ODataListBinding;
    items: unknown[];
    section: IScreenSection;
}
declare const ScreenSectionEventHandler: {
    /**
     * @since 2021.09.29
     * @see Component.initEventBus()
     */
    onTableSelectionChange(params: ITableSelectionChangeParams): void;
    /**
     * @since 2021.12.08
     * @see Component.initEventBus()
     */
    onTableItemsLoaded(params: ITableItemsLoadedParams): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default ScreenSectionEventHandler;
