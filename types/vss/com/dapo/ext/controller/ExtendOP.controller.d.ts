import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type Dialog from "sap/m/Dialog";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { OrderItemContext } from "vss/com/dapo/ext/types/interface";
/**
 * @namespace vss.com.dapo.ext.controller
 */
export default class ExtendOP extends ControllerExtension {
    pssDialog: Dialog;
    static readonly overrides: {
        onInit: (this: ExtensionAPI) => void;
        onBeforeRendering: () => void;
        onAfterRendering: () => void;
        editFlow: {
            onBeforeEdit: (mParameters: any) => void;
            onAfterEdit: (mParameters: any) => void;
            onAfterSave: (mParameters: any) => void;
            onBeforeCreate: (mParameters: OrderItemContext) => Promise<void>;
        };
    };
    openPartsSuperSession(parameters: OrderItemContext): Promise<void>;
}
