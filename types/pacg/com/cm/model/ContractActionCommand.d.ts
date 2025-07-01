import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { TActionScreenData } from "./BackendAction";
import Dialog from "sap/m/Dialog";
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
    invokeAction(screenData: TActionScreenData): Promise<Dialog>;
}
