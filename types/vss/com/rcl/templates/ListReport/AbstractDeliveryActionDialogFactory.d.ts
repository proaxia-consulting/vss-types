import type ResourceBundle from "sap/base/i18n/ResourceBundle";
import type ListReportExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type ObjectPageExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type Dialog from "sap/m/Dialog";
import Input from "sap/m/Input";
import Table from "sap/m/Table";
import BarcodeScannerButton from "sap/ndc/BarcodeScannerButton";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Context from "sap/ui/model/odata/v4/Context";
import type ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";
import { type DeliveryActionType } from "vss/com/rcl/model/DeliveryActionCommand";
import { ModelName } from "vss/com/rcl/model/Enums";
import type { ActionParameter } from "vss/com/rcl/types/EntitySet";
export declare const DataKey: {
    readonly DialogFactory: "DialogFactory";
};
type ActionParametersCallback = (...entity: Record<string, unknown>[]) => Promise<ActionParameter[]>;
/**
 * @nonui5
 * @namespace vss.com.rcl.templates.ListReport
 */
export default abstract class AbstractDeliveryActionDialogFactory {
    actionName: DeliveryActionType;
    protected _actionParametersCallback?: ActionParametersCallback;
    protected _api?: ListReportExtensionAPI | ObjectPageExtensionAPI;
    protected _listBinding?: ODataListBinding;
    protected _selectedContexts?: Context[];
    protected _i18n?: ResourceBundle;
    protected _dialog?: Dialog;
    protected _dialogLoading?: Promise<Dialog>;
    protected _model?: {
        [ModelName.action]?: JSONModel;
    };
    protected abstract _fragmentSettings(): {
        name: string;
        id: string;
    };
    constructor(actionName: DeliveryActionType, _actionParametersCallback?: ActionParametersCallback);
    init(api: ListReportExtensionAPI | ObjectPageExtensionAPI, ...selectedContexts: Context[]): void;
    actionModel(): JSONModel;
    actionParameters(...entity: Record<string, unknown>[]): Promise<ActionParameter[]>;
    i18n(): Promise<ResourceBundle>;
    loadDialog(clear?: boolean): Promise<Dialog>;
    protected _loadDialog(clear?: boolean): Promise<Dialog>;
    createDeliveryTable(): Promise<Table>;
    createManufacturerSerialNoTable(): Promise<Table>;
    protected _createBarCodeButton(): BarcodeScannerButton;
    protected _createSerialNoInput(actionDataIndex: number, context: Context): Input;
}
export {};
