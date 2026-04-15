import type { Button$PressEvent } from "sap/m/Button";
import ManagedObject from "sap/ui/base/ManagedObject";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
import type { TActionEntity, TActionParameters } from "vss/com/upm/types";
/**
 * @namespace vss.com.upm.util
 */
export default class ActionDialog extends ManagedObject {
    static CallDialog(oController: IObjectPageController, actionData: TActionEntity): Promise<TActionParameters>;
    static onCloseDialog(event: Button$PressEvent): void;
    private static _createDialog;
    private static _afterDialogClose;
    private static _dialogP;
    private static _resolve;
}
