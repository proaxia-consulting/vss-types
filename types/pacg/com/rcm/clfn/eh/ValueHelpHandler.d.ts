import Event from "sap/ui/base/Event";
import { IClassificationFilterController } from "pacg/com/rcm/types/IController";
/**
 * @namespace pacg.com.rcm.clfn.eh
 */
export default class ValueHelpHandler {
    private _ctrl;
    private _input;
    private _entity;
    constructor(_ctrl: IClassificationFilterController);
    onValueHelpRequested(event: Event): void;
    onTokenUpdate(event: Event): void;
    onOKPress(event: Event): void;
    onCancelPress(event: Event): void;
    onAfterClose(event: Event): void;
    private _loadValueHelpDialog;
    private _dialog;
    /**
     * @see {sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype._createRanges}
     */
    private _createRangeKeyField;
    private _removeDialogConditions;
}
