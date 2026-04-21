import { ICalendarController } from "dbme/w/lib/core/types/IController";
import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
import Dialog from "sap/m/Dialog";
import { IntervalEntity, TUnknownEntity } from "dbme/w/lib/core/types/IEntity";
import UI5Element from "sap/ui/core/Element";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Event from "sap/ui/base/Event";
import type { SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
export type TAppointmentFormData = IntervalEntity & {
    DESCR1: string;
};
export type TWeekdayCheckbox = {
    text: string;
    selected: boolean;
    num: number;
};
export type TMonthCheckbox = {
    text: string;
    selected: boolean;
    num: number;
};
/**
 * @nonui5
 * @namespace dbme.w.lib.core.calendar
 */
export default class AptForm extends DependentFragment<Dialog, ICalendarController> {
    oData: TAppointmentFormData;
    private oCal;
    private oModel;
    private oInternalModel?;
    private oIntervalHelper;
    private bCreate;
    private mFieldGroupId;
    private sEntitySet?;
    private oSourceControl?;
    private oFormDialog?;
    private oFormFields?;
    private oCreateCtx;
    constructor(oCtrl: ICalendarController, sFragment?: string);
    setData(oData: TAppointmentFormData, bCreate: boolean): Promise<this>;
    private _setDataDateTime;
    private _setDataDate;
    private _getCreateDate;
    getMultiAptEnabled(): boolean;
    validateSelectedItems(): void;
    getCreate(): boolean;
    private createContext;
    private _getFormFieldsVisibility;
    getFormFieldEditable(): Promise<TUnknownEntity>;
    /**
     * Returns number that corresponds to hexadecimal value of selected days of week where recurrent appointment should happen.
     * For example 01010001 corresponds to Monday, Friday, and Sunday, and the method will return 51 as string
     */
    getDaysAsHexValue(): string;
    /**
     * Sets selected weekdays value into entity's property
     */
    setWeekdays(): void;
    getMonthsAsHexValue(): string;
    hexToWeekdays(hexString: string): TWeekdayCheckbox[];
    hexToMonths(hexString: string): TMonthCheckbox[];
    /**
     * Sets selected months value into entity's property
     */
    setMonths(): void;
    private createModel;
    /**
     * - !NOTICE: Primary key of bound object is not stable, it changes every time when appointment data has been changed.
     * - In EDIT mode - use PK as unique buffer ID
     */
    protected _key(oSourceControl: UI5Element): string;
    protected load(oSourceControl: UI5Element): Promise<Dialog>;
    loaded(oSourceControl: UI5Element): Promise<Dialog>;
    private _isRecurring;
    private _isAbsence;
    onValidate(event?: Event): void;
    onFieldValueChange(event: SmartField$ChangeEvent): void;
    onFieldChange(this: ICalendarController, event: Event): void;
    private setDuration;
    private _onRecurringTimeStartChange;
    private _onRecurringTimeEndChange;
    private onTimeFromChange;
    /**
     * Relevant for WPL/Demand Allocation EDIT
     */
    private loadRelatedAllocations;
    /**
     * Relevant for WPL/Demand Allocation
     */
    getSelectedAllocationsByDialog(oDialog: Dialog): IntervalEntity[];
    /**
     * Relevant for WPL/Demand Allocation EDIT
     */
    private selectRelatedAllocations;
    /**
     * Adjust UXFC for AC_PROC field; Determine by selected RESOURCE_ROLE
     */
    private setAvailabilityConsumptionPercentUxfc;
    /**
     * Set last loaded dialog
     */
    private _setDialog;
    private _tabs;
    private _tab;
    private _mainForm;
    private _demandForm;
    private _recurringForm;
    private _relatedAllocations;
    internalModel(): JSONModel;
    /**
     * Refresh local model bindings for non-smart controls
     */
    private _refreshLocalControls;
    private _isDemandInterval;
    private _formBindingContext;
    private _aptData;
    private _applyFormFieldFilters;
}
