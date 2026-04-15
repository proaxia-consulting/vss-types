import type Control from "sap/ui/core/Control";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * @namespace com.pacg.taskcenter.ext
 */
export default class InitiatorQuickView {
    private _owner;
    private static _instances;
    private _quickViewP;
    static getInstance(owner: IObjectPageExtensionAPI): InitiatorQuickView;
    private constructor();
    open(caller: Control): void;
}
