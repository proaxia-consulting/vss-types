/**
 * Isolate differences between UI5 versions
 */
import Element from "sap/ui/core/Element";
declare const CoreElement: {
    getElementById(id: string): Element;
};
export default CoreElement;
