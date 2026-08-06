import type SrsController from "dbme/w/lib/core/controller/Base";
import type { IDemandCallbacksMap } from "dbme/w/lib/core/types/IDemand";
import type ColumnListItem from "sap/m/ColumnListItem";
import type IconTabFilter from "sap/m/IconTabFilter";
import type ListBase from "sap/m/ListBase";
import type ListItemBase from "sap/m/ListItemBase";
import type Table from "sap/m/Table";
import type Event from "sap/ui/base/Event";
import type ManagedObject from "sap/ui/base/ManagedObject";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type Control from "sap/ui/core/Control";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type OrderControllerExtension from "dbme/srs/com/tdo/controller/ext/OrderControllerExtension";
import type AllocPropCalBridge from "dbme/srs/com/tdo/helper/AllocPropCalBridge";
import type ScreenSectionBindingRefresh from "dbme/srs/com/tdo/helper/ScreenSectionBindingRefresh";
import type TimeSlotsContainer from "dbme/srs/com/tdo/helper/TimeSlotsContainer";
import type { DemandOrigin } from "dbme/srs/com/tdo/model/Enums";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { IScreen, ITabsAware } from "dbme/srs/com/tdo/types/ITabsAware";
export type IFormAware = {
    _getForm(): SmartForm;
    onFieldChange(event: Event): void;
    serializeForm?: () => Map<string, Control>;
};
export type IAfterAction = {
    onAfterSuccessfulAction(): void;
};
export type ISrsController = {
    isEditMode(): boolean;
} & SrsController;
export type IOrderAwareController = {
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
} & ISrsController & ITabsAware;
export type IReschedulingController = {
    _oDateParameters?: ListBase;
    _oAllocationProposalList?: AllocPropCalBridge;
    oTimeSlotsContainer?: TimeSlotsContainer;
    calendarModel(): JSONModel;
    setPickupAtVisibility(bVisibility: boolean): void;
    onAllocationProposalSelect(oEvent: Event): void;
    destroyAllocationProposal(): void;
} & IOrderAwareController;
export type ISelectableControl = {
    getSelectEnabled?: () => boolean;
} & ListItemBase;
export type ICreatedDemandData = {
    origin: {
        control?: ManagedObject;
        data: object;
        manually?: boolean;
        copy?: boolean;
        originType?: DemandOrigin;
        callbacks?: IDemandCallbacksMap;
    };
    target: ColumnListItem;
};
/**
 * @see dbme.com.srs.tdo.helper.DemandTemplate
 */
type IDemandTemplate = {
    getDemandTemplate?: (this: IDemandsAwareController, bRecalc?: boolean) => Promise<ColumnListItem>;
    getDemandsTable(this: IDemandsAwareController, bRecalc?: boolean): Table;
};
/**
 * @see dbme.com.srs.tdo.helper.TabsTemplate
 */
type ITabsTemplate = {
    createTabsContent(this: IDemandsAwareController): Promise<IconTabFilter[]>;
    destroy(this: IDemandsAwareController): void;
    getModelData(this: IDemandsAwareController, oOrderData?: IOrderEntity, bCreate?: boolean): Promise<IScreen[]>;
    getTable(tab: IconTabFilter): ListBase[];
};
export type IDemandsAwareController = {
    _mDemands?: Map<string, ICreatedDemandData>;
    _oDemandsTable?: Table;
    _oDemandTemplate?: ColumnListItem;
    helper: {
        demandTemplate: IDemandTemplate;
        sectionBindingRefresh?: ScreenSectionBindingRefresh;
        tabsTemplate?: ITabsTemplate;
    };
    _checkSummary?: () => Promise<void>;
} & IOrderAwareController & IFormAware;
export {};
