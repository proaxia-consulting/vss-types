/**
 * Isolate differences between UI5 versions
 */
declare const CoreElement: {
    getElementById(id: string): import("sap/ui/core/Element").default;
};
export default CoreElement;
