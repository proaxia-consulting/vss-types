import type { Button$PressEvent } from "sap/m/Button";
import type { ComboBox$ChangeEvent } from "sap/m/ComboBox";
import ManagedObject from "sap/ui/base/ManagedObject";
import JSONModel from "sap/ui/model/json/JSONModel";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
import type { TActionEntity, TActionParameters } from "vss/com/upm/types";
/**
 * @namespace vss.com.upm.util
 */
export default class ActionDialog extends ManagedObject {
    static CallDialog(oController: IObjectPageController, actionData: TActionEntity): Promise<TActionParameters>;
    static onDialogBtnPressed(event: Button$PressEvent): void;
    static onRejectionReasonChange(event: ComboBox$ChangeEvent): void;
    static getModel(modelName: string): JSONModel;
    private static _createDialog;
    private static _getDialogData;
    private static _afterDialogClose;
    private static _dialog;
    private static _dialogP;
    private static _resolve;
}
