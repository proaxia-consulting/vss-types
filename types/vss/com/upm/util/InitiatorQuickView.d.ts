import type Control from "sap/ui/core/Control";
import type { IListReportController } from "vss/com/fe/ListReport";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.upm.util
 * @nonui5
 */
export default class InitiatorQuickView {
    private _owner;
    static getInstance(owner: IListReportController | IObjectPageController): InitiatorQuickView;
    private constructor();
    open(caller: Control): void;
    private static _instances;
    private _quickViewP;
}
