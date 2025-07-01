import UI5Element from "sap/ui/core/Element";
import type Controller from "sap/ui/core/mvc/Controller";
/**
 * @namespace dbme.w.lib.core.util
 */
export default class DependentFragment<ControlType, ControllerType extends Controller = Controller> {
    protected _sView: string;
    protected _oCtrl: ControllerType;
    protected _mControl: Map<string, ControlType>;
    protected _bBindControl: boolean;
    constructor(_sView: string, _oCtrl: ControllerType);
    loadFragment(): Promise<ControlType>;
    loaded(oSourceControl: UI5Element): Promise<ControlType>;
    clear(oSourceControl?: UI5Element): this;
    protected load(oSourceControl: UI5Element): Promise<ControlType>;
    protected _key(oSourceControl: UI5Element): string;
}
