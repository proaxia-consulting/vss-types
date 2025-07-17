import { type Button$PressEvent } from "sap/m/Button";
import type { default as SmartTable, SmartTable$InitialiseEvent, SmartTable$BeforeRebindTableEvent } from "sap/ui/comp/smarttable/SmartTable";
import Context from "sap/ui/model/Context";
import type { IScreenSection } from "dbme/srs/com/tdo/types/ITabsAware";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import Dialog from "sap/m/Dialog";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
declare const ScreenSectionTableTemplate: {
    fieldGroupId: {
        WorkItemTable: "TDOWorkItemSet";
        ServiceItemTable: "TDOServiceItemSet";
    };
    getServiceItemTable(this: IDemandsAwareController, oSectionData: IScreenSection): Promise<SmartTable>;
    getWorkItemTable(this: IDemandsAwareController, oSectionData: IScreenSection): Promise<SmartTable>;
    getServiceCreateDemandDialog(this: IDemandsAwareController, oSectionCtx: Context): Promise<Dialog>;
    getWorkCreateDemandDialog(this: IDemandsAwareController, oSectionCtx: Context): Promise<Dialog>;
    /**
     * Handler attached in a view fragment
     */
    onInit(oEvent: SmartTable$InitialiseEvent): void;
    onBtnClearSelection(oEvent: Button$PressEvent): void;
    /**
     * Handler attached in a view fragment
     */
    onBeforeRebind(this: IDemandsAwareController, oEvent: SmartTable$BeforeRebindTableEvent): void;
    onScreenSectionTableSelectionChange(this: IDemandsAwareController, oEvent: ListBase$SelectionChangeEvent): void;
    onRefresh(this: IDemandsAwareController, event: Button$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default ScreenSectionTableTemplate;
