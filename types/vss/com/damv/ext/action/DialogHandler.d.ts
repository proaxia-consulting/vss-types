import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
import Context from "sap/ui/model/odata/v4/Context";
import ExtensionAPI from "sap/fe/core/ExtensionAPI";
import { ListItemBase$PressEvent } from "sap/m/ListItemBase";
import { TAssignVehicleOut } from "vss/com/damv/service/actionService";
/**
 * @namespace vss.com.damv.ext.action
 */
export default class DialogHandler {
    private static _dialog;
    getDialogId(actionName: string): string;
    /**
     * @param this reference to the 'this' that the event handler is bound to.
     * @param bindingContext the bindingContext of the page on which the event was fired
     * @param selectedContexts the selectedContext of the page on which the event was fired
     */
    openDialog(this: DialogHandler, bindingContext: ODataContextBinding, selectedContexts: Context[], actionName: string, executeAction: (bindingContext: ODataContextBinding) => void, extensionAPI: ExtensionAPI, messageProcessor: (result: TAssignVehicleOut, vehicleData: {
        OrderID: string;
        ItemNo: string;
    }) => void): void;
    static executeDialog(this: ExtensionAPI): void;
    static closeDialog(this: ExtensionAPI): void;
    static onVehicleRowPressed(event: ListItemBase$PressEvent): Promise<void>;
}
