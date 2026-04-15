import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
/**
 * @namespace vss.com.dapo.ext.controller
 */
export default class ExtendOP extends ControllerExtension {
    static readonly overrides: {
        onInit: (this: ExtensionAPI) => void;
        onBeforeRendering: () => void;
        onAfterRendering: () => void;
        editFlow: {
            onBeforeEdit: (mParameters: any) => void;
            onAfterEdit: (mParameters: any) => void;
            onAfterSave: (mParameters: any) => void;
        };
    };
}
