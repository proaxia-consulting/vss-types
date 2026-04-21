import type UIComponent from "sap/ui/core/UIComponent";
export type IResourceBundleAwareUIComponent = {
    setResourceBundle(): void;
} & UIComponent;
