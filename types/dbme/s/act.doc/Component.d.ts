import UIComponent from "sap/ui/core/UIComponent";
/**
 * @namespace dbme.s.act.doc
 * @global
 */
export default class Component extends UIComponent {
    static manifestFirst: boolean;
    static metadata: {
        manifest: string;
    };
    init(): void;
}
