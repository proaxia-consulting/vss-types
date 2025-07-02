import ManagedObject from "sap/ui/base/ManagedObject";
import { TActionEntity, TActionParameters } from "../types";
import { IObjectPageController } from "vss/com/fe/ObjectPage";
import { Button$PressEvent } from "sap/m/Button";
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
