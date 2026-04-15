import type { Button$PressEvent } from "sap/m/Button";
import type { Dialog$AfterCloseEvent } from "sap/m/Dialog";
import type { Input$ValueHelpRequestEvent } from "sap/m/Input";
import type { MultiInput$TokenUpdateEvent } from "sap/m/MultiInput";
import { type ValueHelpDialog$OkEvent } from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
import type { IClassificationFilterController } from "pacg/com/rcm/types/IController";
/**
 * @namespace pacg.com.rcm.clfn.eh
 */
export default class ValueHelpHandler {
    private _ctrl;
    private _input;
    private _entity;
    constructor(_ctrl: IClassificationFilterController);
    onValueHelpRequested(event: Input$ValueHelpRequestEvent): void;
    onTokenUpdate(event: MultiInput$TokenUpdateEvent): void;
    onOKPress(event: ValueHelpDialog$OkEvent): void;
    onCancelPress(event: Button$PressEvent): void;
    onAfterClose(event: Dialog$AfterCloseEvent): void;
    private _loadValueHelpDialog;
    private _dialog;
    /**
     * @see {sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype._createRanges}
     */
    private _createRangeKeyField;
    private _removeDialogConditions;
}
