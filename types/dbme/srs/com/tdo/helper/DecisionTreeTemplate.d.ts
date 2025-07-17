import type Dialog from "sap/m/Dialog";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type Event from "sap/ui/base/Event";
import ComponentContainer from "sap/ui/core/ComponentContainer";
import type Context from "sap/ui/model/Context";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IScreenSection } from "dbme/srs/com/tdo/types/ITabsAware";
declare const DecisionTreeTemplate: {
    getComponentContainer(this: IDemandsAwareController, sectionData?: IScreenSection): Promise<ComponentContainer>;
    onDecissionTreeSelectionChange(this: IDemandsAwareController, oEvent: Event): void;
    /**
     * - Restore items selection by this._mDemands
     * - Update this._mDemands[<sBindingPath>].origin
     */
    onDecissionTreeUpdateFinished(this: IDemandsAwareController, event: ListBase$UpdateFinishedEvent): void;
    getCreateDemandDialog(this: IDemandsAwareController, sectionCtx: Context): Promise<Dialog>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DecisionTreeTemplate;
