import type { Button$PressEvent } from "sap/m/Button";
import ManagedObject from "sap/ui/base/ManagedObject";
import type UpsellingPartnerObjectPage from "dbme/w/lib/core/upselling/controller/UpsellingPartnerObjectPage.controller";
import type { TOperationEntity, TOperationParameters } from "dbme/w/lib/core/upselling/types";
/**
 * @namespace dbme.w.lib.core.upselling.util
 */
export default class OperationDialog extends ManagedObject {
    static CallDialog(oController: UpsellingPartnerObjectPage, operationData: TOperationEntity): Promise<TOperationParameters>;
    static onCloseDialog(event: Button$PressEvent): void;
    private static _getDialogData;
    private static _createDialog;
    private static _dialogs;
    private static _dialog;
    private static _resolve;
}
