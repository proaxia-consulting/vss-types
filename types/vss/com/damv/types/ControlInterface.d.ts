import OverflowToolbar from "sap/m/OverflowToolbar";
import Control from "sap/ui/core/Control";
/**
 * @type {sap.ui.mdc.Table}
 */
export interface ITable extends Control {
    initialized(): Promise<this>;
}
/**
 * @type {sap.ui.mdc.ActionToolbar}
 */
export interface IToolbar extends OverflowToolbar {
    addAction(action: IActionToolbarAction): void;
}
/**
 * @type {sap.ui.mdc.actiontoolbar.ActionToolbarAction}
 */
export interface IActionToolbarAction extends Control {
}
