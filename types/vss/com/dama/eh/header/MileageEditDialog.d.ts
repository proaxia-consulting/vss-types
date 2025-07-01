import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
export default class MileageEditDialog extends BaseDialog implements IDialog {
    private _Popover;
    private headerCtx;
    open(event: Event): void;
    private getMileageEditDialog;
    static onSave(this: MileageEditDialog, event: Event): void;
    static onValidateMileage(this: MileageEditDialog, event: Event): void;
    static onValidateEngineHours(this: MileageEditDialog, event: Event): void;
    private _isValidInput;
    private _getValueStateText;
    private _compareCounter;
    static onClose(this: MileageEditDialog, event: Event): void;
}
