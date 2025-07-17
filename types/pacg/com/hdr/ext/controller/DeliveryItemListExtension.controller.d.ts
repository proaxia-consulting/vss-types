import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
import type { $HandoverNavigationContextInfo } from "../../types/IController";
/**
 * @controller
 */
export default class DeliveryItemListExtension extends ControllerExtension {
    static overrides: {
        routing: {
            onBeforeNavigation(this: IListReportExtension, contextInfo: $HandoverNavigationContextInfo): boolean;
        };
        onInit(this: IListReportExtension): void;
        onAfterRendering(this: IListReportExtension): void;
    };
}
