import type SrsController from "dbme/w/lib/core/controller/Base";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type ListBase from "sap/m/ListBase";
import type Table from "sap/m/Table";
import type Event from "sap/ui/base/Event";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type AllocPropCalBridge from "dbme/srs/com/tdo/helper/AllocPropCalBridge";
import type TimeSlotsContainer from "dbme/srs/com/tdo/helper/TimeSlotsContainer";
import type ColumnListItem from "sap/m/ColumnListItem";
import type ListItemBase from "sap/m/ListItemBase";
import type ManagedObject from "sap/ui/base/ManagedObject";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type { ITabsAware } from "dbme/srs/com/tdo/types/ITabsAware";
import type ScreenSectionBindingRefresh from "dbme/srs/com/tdo/helper/ScreenSectionBindingRefresh";
import type OrderControllerExtension from "dbme/srs/com/tdo/controller/ext/OrderControllerExtension";
import type { DemandOrigin } from "dbme/srs/com/tdo/model/Enums";
export interface IFormAware {
    _getForm(): SmartForm;
    onFieldChange(event: Event): void;
}
export interface IAfterAction {
    onAfterSuccessfulAction(): void;
}
export interface ISrsController extends SrsController {
    isEditMode(): boolean;
}
export interface IOrderAwareController extends ISrsController, ITabsAware {
    extension?: OrderControllerExtension;
    _oAgreementsList?: ListBase;
    _oLocationList?: ListBase;
    _oNotesList?: ListBase;
    _oParametersList?: ListBase;
    _reloadAgreements?: (filterValues?: object) => void;
    _reloadParameters?: (filterValues?: object) => void;
    _setLocationEnabled?: () => Promise<void>;
    reloadLocations?: (...selectionChangedItems: ISelectableControl[]) => void;
    /**
     * Change state of Save button
     */
    setSaveEnabled(flag: boolean, asyncUpdate?: boolean): void;
    /**
     * Reload SAVE enabled state
     */
    reloadSaveEnabled?: () => Promise<void>;
    getFieldGroupIdsForValidate(): string[];
    isCreateOrder(): boolean;
    getSelectedOrder(): IOrderEntity[];
}
export interface IReschedulingController extends IOrderAwareController {
    _oDateParameters?: ListBase;
    _oAllocationProposalList?: AllocPropCalBridge;
    oTimeSlotsContainer?: TimeSlotsContainer;
    calendarModel(): JSONModel;
    setPickupAtVisibility(bVisibility: boolean): void;
    onAllocationProposalSelect(oEvent: Event): void;
    destroyAllocationProposal(): void;
}
export interface ISelectableControl extends ListItemBase {
    getSelectEnabled?: () => boolean;
}
export interface ICreatedDemandData {
    origin: {
        control?: ManagedObject;
        data: object;
        manually?: boolean;
        copy?: boolean;
        originType?: DemandOrigin;
    };
    target: ColumnListItem;
}
/**
 * @see dbme.com.srs.tdo.helper.DemandTemplate
 */
interface IDemandTemplate {
    getDemandTemplate?: (this: IDemandsAwareController, bRecalc?: boolean) => Promise<ColumnListItem>;
    getDemandsTable(this: IDemandsAwareController, bRecalc?: boolean): Table;
}
export interface IDemandsAwareController extends IOrderAwareController, IFormAware {
    _mDemands?: Map<string, ICreatedDemandData>;
    _oDemandsTable?: Table;
    _oDemandTemplate?: ColumnListItem;
    helper: {
        demandTemplate: IDemandTemplate;
        sectionBindingRefresh?: ScreenSectionBindingRefresh;
    };
    _checkSummary?: () => Promise<void>;
}
export {};
