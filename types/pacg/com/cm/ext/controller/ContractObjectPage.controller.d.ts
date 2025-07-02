import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import type Context from "sap/ui/model/odata/v4/Context";
import type { TDraftAwareDocumentItemEntity } from "../../types/EntitySet";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
type $NavigationContextInfo = {
    bindingContext: Context;
    sourceBindingContext: TDraftAwareDocumentItemEntity;
};
/**
 * @namespace pacg.com.cm.ext.controller.ContractObjectPage
 * @controller
 */
export default class ContractObjectPage extends ControllerExtension {
    static overrides: {
        routing: {
            onBeforeNavigation(this: IObjectPageExtension, contextInfo: $NavigationContextInfo): boolean;
        };
        onInit(this: IObjectPageExtension): void;
    };
}
export {};
