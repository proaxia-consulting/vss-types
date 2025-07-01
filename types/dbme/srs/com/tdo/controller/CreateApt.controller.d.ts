import AbstractOrderDemands from "dbme/srs/com/tdo/controller/AbstractOrderDemands.controller";
import type { IReschedulingController, ISelectableControl } from "dbme/srs/com/tdo/types/IController";
import VerticalLayout from "sap/ui/layout/VerticalLayout";
import JSONModel from "sap/ui/model/json/JSONModel";
import Context from "sap/ui/model/odata/v2/Context";
import type Event from "sap/ui/base/Event";
import type ListBase from "sap/m/ListBase";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
import { type SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
import IconTabFilter from "sap/m/IconTabFilter";
import AllocPropCalBridge from "dbme/srs/com/tdo/helper/AllocPropCalBridge";
import TimeSlotsContainer from "dbme/srs/com/tdo/helper/TimeSlotsContainer";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type { SearchField$LiveChangeEvent } from "sap/m/SearchField";
interface ICreateOrderHelper {
    data?: object;
    path?: string;
}
/**
 * @since 1.6.21	<001> CR: display allocation proposals in planning calendar control
 *
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default class CreateApt extends AbstractOrderDemands implements IReschedulingController {
    /**
     * @see DateFormTemplate.getDateForm()
     * @var {?sap.ui.layout.VerticalLayout}
     */
    _oDateListContainer?: VerticalLayout;
    /**
     * In CreateApt - container property corresponds to this._oDateListContainer
     * Required for dbme.srs.com.tdo.types.IReschedulingController
     *
     * @see ParametersListEventHandler.onOrderParameterChange()
     * @var {?sap.ui.layout.VerticalLayout}
     */
    oTimeSlotsContainer?: TimeSlotsContainer;
    _oHelper?: ICreateOrderHelper;
    _oCreateCtx?: Context;
    _mAllocationProposalCtx?: Record<string, Context>;
    _oLocationList?: ListBase;
    _oDateForm?: Record<string, SmartField>;
    _oAllocationProposalList?: AllocPropCalBridge;
    private _createTabsContentPromise?;
    onInit(): void;
    /**
     * override abstract method
     */
    ODataToJSON(): void;
    _getJSONModel(): JSONModel;
    private _getModelChangeGroups;
    onRouteMatched(event: Event): void;
    private _onRouteMatchedAsync;
    private _createOrder;
    /**
     * destroy before navigation
     */
    protected _destroy(unbind?: boolean, orderId?: string): void;
    private _navToPrev;
    onPageNavBack(event: Event): void;
    /**
     * Recalculate tabs according to form selection
     */
    _reloadTabs(): Promise<IconTabFilter[]>;
    _reloadAgreements(defaults?: {}): void;
    private _checkLocation;
    private _checkAgreements;
    _checkDateForm(): boolean;
    _checkSummary(): Promise<void>;
    _reloadParameters(defaults?: {}): void;
    onFieldChange(event: SmartField$ChangeEvent): void;
    _setLocationEnabled(): Promise<void>;
    _setDateEnabled(): Promise<void>;
    reloadSaveEnabled(): Promise<void>;
    /**
     * Create appointment
     */
    onBtnCreate(event: Event): Promise<void>;
    /**
     * destroy tabs contents before reloading tabs
     */
    protected _destroyTabs(): void;
    onOrderAllocationParameterChange(event: ListBase$SelectionChangeEvent): void;
    onOrderAgreementChange(oEvent: Event): void;
    private _getPlannedFromValue;
    /**
     * IReschedulingController extends the IOrderAwareController interface
     */
    isCreateOrder(): boolean;
    onAllocationProposalSelect(oEvent: Event): void;
    /**
     * @since 2021.10.06
     * @see ParametersListEventHandler.onOrderParameterChange()
     */
    setPickupAtVisibility(bVisibility: boolean): void;
    /**
     * @since 2021.10.06
     * @see ParametersListEventHandler.onOrderParameterChange()
     * @see IReschedulingController
     */
    destroyAllocationProposal(bRecalculate?: boolean): void;
    /**
     * <001>
     */
    calendarModel(): JSONModel;
    /**
     * Check if currently selected tab is enabled; If not - select previous enabled
     */
    private validateSelectedTab;
    /**
     * AbstractOrder method implementation
     */
    getFieldGroupIdsForValidate(): string[];
    private isFormValid;
    /**
     * @since VSS7
     */
    reloadLocations(...selectionChangedItems: ISelectableControl[]): void;
    /**
     * @since VSS7
     */
    onLocationSearchChange(event: SearchField$LiveChangeEvent): void;
    private _getSelectedLocations;
}
export {};
