import UIComponent from "sap/ui/core/UIComponent";
/**
 * @namespace dbme.s.lib
 */
export default abstract class Component extends UIComponent {
    static metadata: {
        abstract: boolean;
        manifest: string;
    };
    init(): void;
}
