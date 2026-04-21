import Controller from "dbme/c/controller/Base";
import MessagePopover from "sap/m/MessagePopover";
import MessageType from "sap/ui/core/message/MessageType";
import { BatchResponse, SeverityType } from "dbme/s/act/doc/model/models";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
import type { Button$PressEvent } from "sap/m/Button";
import type UI5Element from "sap/ui/core/Element";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
/**
 * @namespace dbme.s.act.doc.controller
 * @controller
 */
export default class BaseController extends Controller {
    UXFC: {
        hidden: number;
        readOnly: number;
        editable: number;
        mandatory: number;
    };
    protected _busyCounter: number;
    protected _oMessagePopover: MessagePopover;
    /**
     * Handle Controller Initialization event
     */
    onInit(): void;
    /**
     * Handle Show Messages event
     */
    onMessagePopoverPress(event: Button$PressEvent): void;
    /**
     * Return i18n Resource Bundle
     */
    i18n(): import("sap/base/i18n/ResourceBundle").default | Promise<import("sap/base/i18n/ResourceBundle").default>;
    /**
     * Handle OData Call Error (generic function, no special further logic required)
     */
    _onODataCallError(oData: BatchResponse): void;
    /**
     * Set the view busy or not (depending on bBusy parameter)
     */
    _setBusy(bBusy: boolean): void;
    /**
     * Returns true if the view is busy
     */
    _isBusy(): boolean;
    /**
     * Returns Busy counter
     */
    _getBusyCounter(): number;
    /**
     * Bind Element
     */
    _bindElement(oElement: UI5Element, sPath: string, oModel: ODataModel): void;
    /**
     * Replace the function bindAggregation of oField with new special function fBindAggregationNew
     * The special version of bindAggregation function (fBindAggregationNew) rejects binding of items if no filters are provided
     * We want to reject the binding of items without filters because we do it in some cases by our own and SAPUI5 overwrites
     * our binding when rendering the page from the one generated based on the Annotation (not filtered)
     * Change 2024.05.20 (note 3471432): Since SAPUI5 ver 1.120.12 we have to deactivate this tricky function
     * It results in endless busy indicator on the region control
     */
    _setBindAggregationRequireFilters(oField: SmartField): void;
    /**
     * Get the promise to the Inner Control of the given Smart Field
     */
    _getSmartFieldInnerControlPromise(oField: SmartField): Promise<unknown>;
    /**
     * Remove old messages - except those corresponding to the validation
     */
    _removeOldMessages(): void;
    /**
     * Add the message to the log from object (e.g. OData call)
     */
    _processODataCall(oResponseData: BatchResponse): boolean;
    /**
     * Determine Message Type from the parameter
     */
    _determineMessageType(sInput: SeverityType): MessageType.Error | MessageType.Information | MessageType.Success | MessageType.Warning;
    /**
     * Add the message to the log
     */
    _addMessage(sMessageType: MessageType, sMessageText: string): void;
    /**
     * Return Message Popover
     */
    _getMessagePopover(): MessagePopover;
    /**
     * Begin Performance Trace
     */
    _tracePerformanceStart(): number;
    /**
     * End Performance Trace
     */
    _tracePerformanceEnd(sText: string, milisBefore: number): void;
}
