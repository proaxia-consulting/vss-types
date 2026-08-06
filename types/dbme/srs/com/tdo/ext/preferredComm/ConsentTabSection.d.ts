import type { ListBase$SelectionChangeEvent, ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type { ToggleButton$PressEvent } from "sap/m/ToggleButton";
import type { SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
import type { SmartTable$BeforeRebindTableEvent, SmartTable$InitialiseEvent } from "sap/ui/comp/smarttable/SmartTable";
import type Control from "sap/ui/core/Control";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
export declare const ConsentSectionName: {
    readonly forCreate: "dbme.srs.com.tdo.ext.preferredComm.view.ConsentTabSectionCreate";
    readonly forDisplay: "dbme.srs.com.tdo.ext.preferredComm.view.ConsentTabSection";
};
export declare const ConsentTabFragmentId: "ConsentTabFragment";
export declare const CommConsentTabSection: {
    initializeSection(this: IDemandsAwareController): void;
    sectionFactory(this: IDemandsAwareController): Promise<Control>;
    initializeTable(this: IDemandsAwareController, event: SmartTable$InitialiseEvent): void;
    onInternalTableUpdateFinished(this: IDemandsAwareController, event: ListBase$UpdateFinishedEvent): void;
    reloadTable(this: IDemandsAwareController): void;
    onBeforeRebindTable(this: IDemandsAwareController, event: SmartTable$BeforeRebindTableEvent): void;
    onCancel(this: IDemandsAwareController): void;
    onChannelButtonPress(this: IDemandsAwareController, event: ToggleButton$PressEvent): void;
    onPartnerChangeHandler(this: IDemandsAwareController, event: SmartField$ChangeEvent): void;
    onLocationChangeHandler(this: IDemandsAwareController, event: ListBase$SelectionChangeEvent): void;
    _refreshListBinding(this: IDemandsAwareController): Promise<void>;
};
export default CommConsentTabSection;
