import ComponentContainer from "sap/ui/core/ComponentContainer";
import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
import type Context from "sap/ui/model/Context";
import type { IScreenSection } from "dbme/srs/com/tdo/types/ITabsAware";
declare const TabComponent: {
    getComponentContainer(this: ISrsController, sectionData: IScreenSection): Promise<ComponentContainer>;
    getCreateDemandDialog(this: ISrsController, sectionCtx: Context): Promise<import("sap/m/Dialog").default>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default TabComponent;
