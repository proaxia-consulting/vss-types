import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { TActionEntity, TScreenData } from "../types/Entity";
/**
 * @nonui5
 * @namespace pacg.com.rfm.eh
 */
export default class ActionDialogHandler {
    api: IObjectPageExtensionAPI | IListReportExtensionAPI;
    dialog: Dialog;
    actionData: TActionEntity;
    private _formFields;
    private _actionModel;
    constructor(api: IObjectPageExtensionAPI | IListReportExtensionAPI, dialog: Dialog, actionData: TActionEntity);
    private _adjustDialog;
    getScreenData(): Promise<TScreenData>;
    static onSubmitOverridePress(this: ActionDialogHandler, event: Event): void;
    private _setRequiredFieldValueState;
    private getFormFields;
    private fetchFormDefaults;
}
