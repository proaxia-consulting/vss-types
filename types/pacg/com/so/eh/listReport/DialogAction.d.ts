import Context from "sap/ui/model/odata/v4/Context";
import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import { ActionName } from "../../model/Enums";
import { Button$PressEvent } from "sap/m/Button";
/**
 * @namespace pacg.com.so.eh.listReport
 */
export default class DialogAction {
    private static _dialog;
    private static _actionName;
    private static _i18n;
    private static _loadFragment;
    private static _prepareDeliveryTable;
    private static _prepareManufSerialNoTable;
    private static _createBarCodeButton;
    private static _createSerialNoInput;
    static open(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[], actionName: ActionName): void;
    static executeDialog(this: ExtensionAPI, event: Button$PressEvent): void;
    static closeDialog(event: Button$PressEvent): void;
}
