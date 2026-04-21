import type ResourceBundle from "sap/base/i18n/ResourceBundle";
import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import Dialog from "sap/m/Dialog";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
import type { OrderItemContext } from "vss/com/dasv/types/interface";
export default class OPExtend extends ControllerExtension<ExtensionAPI> {
    pssDialog: Dialog;
    static overrides: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf vss.com.dasv.ext.controller.OPExtend
         */
        onInit(this: OPExtend): void;
        editFlow: {
            onBeforeEdit: (mParameters: any) => void;
            onBeforeCreate: (mParameters: OrderItemContext) => Promise<void>;
            onBeforeSave: (this: OPExtend, mParameters: {
                context?: Context;
            }) => Promise<never>;
            onAfterActionExecution: (this: OPExtend, actionName: string) => Promise<void>;
        };
        routing: {
            onAfterBinding: (this: OPExtend, context: Context) => void;
        };
    };
    openPartsSuperSession(parameters: OrderItemContext): Promise<void>;
    userConfirmCustomerAssignment(this: OPExtend, oResourceBundle: ResourceBundle): Promise<boolean>;
}
