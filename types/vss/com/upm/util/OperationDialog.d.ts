import type { Button$PressEvent } from "sap/m/Button";
import ManagedObject from "sap/ui/base/ManagedObject";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
import type { TOperationEntity, TOperationParameters } from "vss/com/upm/types";
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
