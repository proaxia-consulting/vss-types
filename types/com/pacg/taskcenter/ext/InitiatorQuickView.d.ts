import type Control from "sap/ui/core/Control";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * @namespace com.pacg.taskcenter.ext
 * @nonui5
 */
export default class InitiatorQuickView {
    private _owner;
    private static _instances;
    private _quickViewP;
    static getInstance(owner: IListReportExtensionAPI | IObjectPageExtensionAPI): InitiatorQuickView;
    private constructor();
    open(caller: Control): void;
}
