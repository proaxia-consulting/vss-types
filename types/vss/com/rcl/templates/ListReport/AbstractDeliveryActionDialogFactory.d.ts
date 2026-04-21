import type ResourceBundle from "sap/base/i18n/ResourceBundle";
import type ListReportExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type ObjectPageExtension from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type Dialog from "sap/m/Dialog";
import Input from "sap/m/Input";
import Table from "sap/m/Table";
import BarcodeScannerButton from "sap/ndc/BarcodeScannerButton";
import type Context from "sap/ui/model/odata/v4/Context";
import { type DeliveryActionType } from "vss/com/rcl/model/DeliveryActionCommand";
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
    protected _api: ListReportExtensionAPI | ObjectPageExtension;
    protected _selectedContexts: Context[];
    protected _actionParametersCallback?: ActionParametersCallback;
    protected _i18n?: ResourceBundle;
    protected _dialog?: Dialog;
    constructor(actionName: DeliveryActionType, _api: ListReportExtensionAPI | ObjectPageExtension, _selectedContexts: Context[], _actionParametersCallback?: ActionParametersCallback);
    protected abstract _fragmentSettings(): {
        name: string;
        id: string;
    };
    actionParameters(...entity: Record<string, unknown>[]): Promise<ActionParameter[]>;
    i18n(): Promise<ResourceBundle>;
    loadDialog(clear?: boolean): Promise<Dialog>;
    createDeliveryTable(): Promise<Table>;
    createManufacturerSerialNoTable(): Promise<Table>;
    protected _createBarCodeButton(): BarcodeScannerButton;
    protected _createSerialNoInput(context: Context): Input;
}
export {};
