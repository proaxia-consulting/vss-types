/**
 * Isolate differences between UI5 versions
 */
import Component from "sap/ui/core/Component";
declare const CoreComponent: {
    getComponentById(id: string): Component;
};
export default CoreComponent;
