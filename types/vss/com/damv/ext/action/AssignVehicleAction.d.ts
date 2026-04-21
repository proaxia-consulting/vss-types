import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
import type ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
import type { TAssignVehicleOut } from "vss/com/damv/service/actionService";
import type { TOrderItem } from "vss/com/damv/service/massAssignVehiclesService";
/**
 * @nonui5
 * @namespace vss.com.damv.ext.action
 */
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
