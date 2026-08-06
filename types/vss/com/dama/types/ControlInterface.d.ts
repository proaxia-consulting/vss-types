import type OverflowToolbar from "sap/m/OverflowToolbar";
import type Control from "sap/ui/core/Control";
/**
 * @type {sap.ui.mdc.Table}
 */
export type ITable = {
    initialized(): Promise<ITable>;
} & Control;
/**
 * @type {sap.ui.mdc.ActionToolbar}
 */
export type IToolbar = {
    addAction(action: IActionToolbarAction): void;
} & OverflowToolbar;
/**
 * @type {sap.ui.mdc.actiontoolbar.ActionToolbarAction}
 */
export type IActionToolbarAction = {} & Control;
