import type UIComponent from "sap/ui/core/UIComponent";
export interface IResourceBundleAwareUIComponent extends UIComponent {
    setResourceBundle(): void;
}
