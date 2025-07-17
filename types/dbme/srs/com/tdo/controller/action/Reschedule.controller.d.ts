import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import type Event from "sap/ui/base/Event";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import JSONModel from "sap/ui/model/json/JSONModel";
import type { Button$PressEvent } from "sap/m/Button";
import type { SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
import type ListItemBase from "sap/m/ListItemBase";
import TimeSlotsContainer from "dbme/srs/com/tdo/helper/TimeSlotsContainer";
import type Table from "sap/m/Table";
import Context from "sap/ui/model/Context";
import AllocPropCalBridge from "dbme/srs/com/tdo/helper/AllocPropCalBridge";
import type CalendarAppointment from "sap/ui/unified/CalendarAppointment";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { IDemandsAwareController, IOrderAwareController, IReschedulingController } from "dbme/srs/com/tdo/types/IController";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
/**
 * @since 1.6.21	<001> CR: display allocation proposals in planning calendar control
 *
 * @namespace dbme.srs.com.tdo.controller.action
 */
export default class Reschedule extends AbstractBase implements IDemandsAwareController, IReschedulingController {
    oTimeSlotsContainer: TimeSlotsContainer;
    oParentController: IOrderAwareController;
    _oAllocationProposalList: AllocPropCalBridge;
    _oDemandsTable?: Table;
    helper: {
        demandTemplate: {
            getDemandsTable(this: IDemandsAwareController, bRecalc?: boolean): Table;
        };
    };
    private _oFormContainer;
    private _oLocalJSONModel;
    onInit(): void;
    _reloadParameters(): void;
    setPickupAtVisibility(bVisibility: boolean): void;
    _getJSONModel(): JSONModel;
    onBtnActionAllocateSearch(oEvent: Event): void;
    private _getAllocationProposalFilters;
    private _getParametersData;
    private _getDemandsData;
    onAllocationProposalSelect(event?: Event): void;
    onBtnDialogCancel(oEvent: Button$PressEvent): void;
    private _validate;
    onFieldChange(event: SmartField$ChangeEvent): void;
    /**
     * @see ParametersListEventHandler.onOrderParameterChange()
     * @see IReschedulingController
     */
    destroyAllocationProposal(): void;
    onOrderAllocationParameterChange(event: ListBase$SelectionChangeEvent): void;
    private _serializeString;
    getSelectedAllocationProposal(): ListItemBase | CalendarAppointment;
    getSelectedAllocationProposalContext(): Context;
    private setFormEnabled;
    private setAllocationProposalSelectedFlag;
    allocationProposalSearch(): Promise<void>;
    private bindAllocationProposalListItems;
    /**
     * Override abstract method
     */
    ODataToJSON(): void;
    private _getDialog;
    private _getMainContainer;
    private _getAllocationList;
    private _getFormContainer;
    _getForm(): SmartForm;
    private _getParametersList;
    /**
     * execute action
     */
    onBtnDialogOK(oEvent: Button$PressEvent): void;
    /**
     * <001>
     */
    calendarModel(): JSONModel;
    /**
     * IReschedulingController extends the IOrderAwareController interface
     */
    isCreateOrder(): boolean;
    /**
     * IReschedulingController extends the IOrderAwareController interface
     */
    getSelectedOrder(): IOrderEntity[];
    /**
     * @see {ITabsAware}
     */
    serializeTabs(): import("dbme/srs/com/tdo/types/ITabsAware").SerializedTabsType;
    getFieldGroupIdsForValidate(): string[];
    /**
     * Required by IOrderAwareController
     */
    setSaveEnabled(flag: boolean, asyncUpdate?: boolean): void;
}
