import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace vss.com.dawm.ext.controller
 */
export default class MonitorExtension extends ControllerExtension {
    private hierarchyPopover;
    private defaultHierarchyId;
    private appDataModel;
    static overrides: {
        onInit(this: MonitorExtension): void;
        onAfterRendering(this: MonitorExtension, event: Event): void;
    };
    private getExtensionApi;
    private getAppComponent;
    private buildHierarchySelect;
    private setHierarchy;
}
