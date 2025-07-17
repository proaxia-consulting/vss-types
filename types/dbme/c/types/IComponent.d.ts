import type UIComponent from "sap/ui/core/UIComponent";
export declare function isResourceBundleAwareUIComponent(component: UIComponent): component is IResourceBundleAwareUIComponent;
export interface IResourceBundleAwareUIComponent extends UIComponent {
    setResourceBundle(): void;
}
