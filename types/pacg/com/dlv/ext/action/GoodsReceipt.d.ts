import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
import type ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
declare const GoodsReceipt: {
    /**
     * @param this reference to the 'this' that the event handler is bound to.
     * @param bindingContext the bindingContext of the page on which the event was fired
     * @param selectedContexts the selectedContext of the page on which the event was fired
     */
    onPress(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): void;
    isVisible(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    isEnabled(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): Promise<boolean>;
};
/**
 * @deprecated Use backend behavior action instead
 * @namespace pacg.com.dlv.ext.action
 */
export default GoodsReceipt;
