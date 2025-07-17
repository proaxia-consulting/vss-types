import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import type { $HandoverNavigationContextInfo } from "../../types/IController";
import type Context from "sap/ui/model/odata/v4/Context";
/**
 * @controller
 */
export default class DeliveryItemObjectPageExtension extends ControllerExtension {
    static overrides: {
        editFlow: {
            /**
             * @since SAPUI5 1.114.0
             */
            onAfterActionExecution(this: IObjectPageExtension, actioName: string): Promise<any>;
        };
        routing: {
            onBeforeNavigation(this: IObjectPageExtension, contextInfo: $HandoverNavigationContextInfo): boolean;
            onBeforeBinding(this: IObjectPageExtension, context: Context): void;
            onAfterBinding(this: IObjectPageExtension, context: Context): void;
        };
        onAfterRendering(this: IObjectPageExtension): void;
        onPageReady(this: IObjectPageExtension): void;
    };
}
