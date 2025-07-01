import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
import Dialog from "sap/m/Dialog";
import type { IntervalEntity, TUnknownEntity } from "dbme/w/lib/core/types/IEntity";
import UI5Element from "sap/ui/core/Element";
import JSONModel from "sap/ui/model/json/JSONModel";
import Event from "sap/ui/base/Event";
export type TAppointmentFormData = IntervalEntity & {
    DESCR1: string;
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
    private sEntitySet;
    private oSourceControl?;
    private oFormDialog;
    private oFormFields;
    private oCreateCtx;
    constructor(oCtrl: ICalendarController, sFragment?: string);
    setData(oData: TAppointmentFormData, bCreate: boolean): Promise<this>;
    getMultiAptEnabled(): boolean;
    validateSelectedItems(): void;
    getCreate(): boolean;
    private _getCreateDate;
    private createContext;
    private _getFormFieldsVisibility;
    getFormFieldEditable(): Promise<TUnknownEntity>;
    private createModel;
    /**
     * - !NOTICE: Primary key of bound object is not stable, it changes every time when appointment data has been changed.
     * - In EDIT mode - use PK as unique buffer ID
     */
    protected _key(oSourceControl: UI5Element): string;
    protected load(oSourceControl: UI5Element): Promise<Dialog>;
    loaded(oSourceControl: UI5Element): Promise<Dialog>;
    onValidate(oEvent?: Event): void;
    static onFieldChange(this: ICalendarController, oEvent: Event): void;
    private setDuration;
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
    private _relatedAllocations;
    internalModel(): JSONModel;
    private _isDemandInterval;
    private _formBindingContext;
    private _aptData;
    private _applyFormFieldFilters;
}
