import SmartFilterBarBase from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import SmartFilterBarRenderer from "sap/ui/comp/smartfilterbar/SmartFilterBarRenderer";
/**
 * @namespace dbme.cmf_rep.lib
 */
export default class SmartFilterBar extends SmartFilterBarBase {
    static renderer: typeof SmartFilterBarRenderer;
    getVariantItemByText(sText: string): import("sap/ui/comp/variants/VariantItem").default;
}
