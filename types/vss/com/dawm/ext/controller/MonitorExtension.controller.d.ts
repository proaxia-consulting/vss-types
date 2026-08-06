import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type Event from "sap/ui/base/Event";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace vss.com.dawm.ext.controller
 */
export default class MonitorExtension extends ControllerExtension {
    private hierarchyPopover;
    private defaultHierarchyId;
    private appDataModel;
    private select;
    private filterModel;
    getController(): this;
    static overrides: {
        onInit(this: MonitorExtension): void;
        onAfterRendering(this: MonitorExtension): void;
    };
    getExtensionApi(): ExtensionAPI;
    private getAppComponent;
    private onPickerBeforeOpen;
    private setHierarchySelectModel;
    private buildHierarchySelect;
    private setHierarchy;
    private buttonPressed;
    getI18nModelText(sText: string): string;
    onSaveHeaderTexts(oEvent: Event): void;
    onCloseDialog(oEvent: Event): void;
    private openMessageDialog;
    private onCloseMessageDialog;
    private onClearText;
    private onClearAllTexts;
}
