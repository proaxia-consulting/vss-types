import ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import Context from "sap/ui/model/odata/v4/Context";
import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";
/**
 * @namespace pacg.com.dlv.ext.action
 */
/**
 * @param this reference to the 'this' that the event handler is bound to.
 * @param bindingContext the bindingContext of the page on which the event was fired
 * @param selectedContexts the selectedContext of the page on which the event was fired
 */
export default class GoodsIssue {
    static onPress(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): void;
    static isVisible(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
    static isEnabled(this: ExtensionAPI, bindingContext: ODataContextBinding, selectedContexts: Context[]): boolean;
}
