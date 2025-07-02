import ManagedObject from "sap/ui/base/ManagedObject";
import { TOperationEntity, TOperationParameters } from "../types";
import { IObjectPageController } from "vss/com/fe/ObjectPage";
import { Button$PressEvent } from "sap/m/Button";
/**
 * @namespace vss.com.upm.util
 */
export default class OperationDialog extends ManagedObject {
    static CallDialog(oController: IObjectPageController, operationData: TOperationEntity): Promise<TOperationParameters>;
    static onCloseDialog(event: Button$PressEvent): void;
    private static _getDialogData;
    private static _createDialog;
    private static _dialogs;
    private static _dialog;
    private static _resolve;
}
