import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
import Context from "sap/ui/model/odata/v4/Context";
import { TOrderItem } from "../../service/massAssignVehiclesService";
import { TAssignVehicleOut } from "../../service/actionService";
export default class AssignVehicleAction {
    static onPressVehicleAssign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): void;
    static isVisibleVehicleAssign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    static isEnabledVehicleAssign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    static handleMessages(result: TAssignVehicleOut, extensionAPI: ExtensionAPI, vehicleData: {
        OrderID: TOrderItem["OrderID"];
        ItemNo: TOrderItem["ItemNo"];
    }): void;
    static onPressAutomaticVehicleAssign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): Promise<void>;
    static isEnabledAutomaticVehicleAssign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    static isVisibleAutomaticVehicleAssign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): void;
    static onPressVehicleUnassign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): Promise<void>;
    static isEnabledVehicleUnassign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    static isVisibleVehicleUnassign(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): void;
}
