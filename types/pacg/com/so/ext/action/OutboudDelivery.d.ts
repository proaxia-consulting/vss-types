import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
import type ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
declare const OutboudDelivery: {
    /**
     * @param this reference to the 'this' that the event handler is bound to.
     * @param bindingContext the bindingContext of the page on which the event was fired
     * @param selectedContexts the selectedContext of the page on which the event was fired
     */
    onPress(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): void;
    isVisible(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    /**
     * @deprecated Let the backend decide. Use isEnabledRemote instead
     */
    isEnabled(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    isEnabledRemote(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): Promise<boolean>;
};
/**
 * @deprecated Always perform full delivery, so no need to pass parameters to this action. Use RAP action instead.
 * @namespace pacg.com.so.ext.action
 */
export default OutboudDelivery;
