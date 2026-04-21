import SmartFilterBarBase from "sap/ui/comp/smartfilterbar/SmartFilterBar";
/**
 * @namespace dbme.cmf_rep.lib
 */
export default class SmartFilterBar extends SmartFilterBarBase {
    static renderer: {
        apiVersion: number;
    };
    getVariantItemByText(sText: string): import("sap/ui/comp/variants/VariantItem").default;
}
