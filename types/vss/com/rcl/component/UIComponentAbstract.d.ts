import UIComponent from "sap/ui/core/UIComponent";
/**
 * @namespace vss.com.rcl.component
 */
export default abstract class UIComponentAbstract extends UIComponent {
    static metadata: object;
    exit(): void;
    destroy(bSuppressInvalidate?: boolean): void;
}
