import type PageController from "sap/fe/core/PageController";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace vss.com.dapo.ext.controller
 */
export default class ExtendLR extends ControllerExtension {
    protected base: PageController;
    static readonly overrides: {
        onInit: (this: ExtendLR) => void;
        onViewNeedsRefresh: (this: ExtendLR, mParameters: any) => void;
        onPendingFilters: (this: ExtendLR, mParameters: any) => void;
        onBeforeRendering: (this: ExtendLR) => void;
        onAfterRendering: (this: ExtendLR) => void;
    };
    getAPI(): import("sap/fe/core/ExtensionAPI").default;
    getView(): import("sap/ui/core/mvc/View").default;
}
