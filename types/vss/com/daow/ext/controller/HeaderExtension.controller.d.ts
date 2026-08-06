import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import Wizard from "sap/m/Wizard";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type XMLView from "sap/ui/core/mvc/XMLView";
import type Context from "sap/ui/model/odata/v4/Context";
/**
 * @namespace vss.com.daow.ext.controller
 * @controller
 */
export default class HeaderExtension extends ControllerExtension {
    base: ControllerExtension & {
        getExtensionAPI(): ExtensionAPI;
        getView(): XMLView;
    };
    _wizard: Wizard;
    static overrides: {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf vss.com.daow.ext.controller.HeaderExtension
         */
        onInit(this: HeaderExtension): void;
        routing: {
            onAfterBinding: (this: HeaderExtension, context: Context) => Promise<void>;
        };
    };
    onNextStepPressed(this: HeaderExtension): void;
    toggleCreateNextStep(isLastStep: boolean): void;
    onCreatePressed(context: Context): void;
    onCancelPressed(context: Context): void;
    private _cleanupWizard;
    private _createWizard;
    private _overrideFooterActions;
    private _loadSnapshotCardsModel;
}
