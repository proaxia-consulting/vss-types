import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * replace save button in footer
 *
 * @nonui5
 * @namespace pacg.com.cm.ext
 */
export default class OverrideSaveButton {
    private _api;
    private _ctrl;
    constructor(_api: IObjectPageExtensionAPI);
    private createSaveButton;
}
