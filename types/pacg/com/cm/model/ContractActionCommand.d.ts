import type Dialog from "sap/m/Dialog";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { TActionScreenData } from "pacg/com/cm/model/BackendAction";
/**
 * @nonui5
 * @namespace pacg.com.cm.model
 */
export default class ContractActionCommand {
    private _api;
    private _action;
    private _model;
    private _document;
    constructor(_api: IListReportExtensionAPI | IObjectPageExtensionAPI, _action: string);
    invokeAction(screenData?: TActionScreenData): Promise<Dialog>;
}
