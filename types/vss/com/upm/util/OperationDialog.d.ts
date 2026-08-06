import type { Button$PressEvent } from "sap/m/Button";
import ManagedObject from "sap/ui/base/ManagedObject";
import JSONModel from "sap/ui/model/json/JSONModel";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
import type { TOperationEntity, TOperationParameters } from "vss/com/upm/types";
/**
 * @namespace vss.com.upm.util
 */
export default class OperationDialog extends ManagedObject {
    static CallDialog(oController: IObjectPageController, operationData: TOperationEntity): Promise<TOperationParameters>;
    static onDialogBtnPressed(event: Button$PressEvent): void;
    static getModel(modelName: string): JSONModel;
    private static _getDialogData;
    private static _getInquiryCbxList;
    private static _createDialog;
    private static _dialogP;
    private static _dialog;
    private static _resolve;
}
