import type Control from "sap/ui/core/Control";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IScreenSection, ITabsAware } from "dbme/srs/com/tdo/types/ITabsAware";
export type ITableSelectionChangeParams = {
    controller: IDemandsAwareController;
    items: Control[];
    selected: boolean;
};
export type ITableItemsLoadedParams = {
    controller?: ITabsAware;
    binding?: ODataListBinding;
    items: unknown[];
    section: IScreenSection;
};
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
