import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type { ListItemBase$PressEvent } from "sap/m/ListItemBase";
import type Context from "sap/ui/model/odata/v4/Context";
import type ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
import type { TAssignVehicleOut } from "vss/com/damv/service/actionService";
/**
 * @nonui5
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
