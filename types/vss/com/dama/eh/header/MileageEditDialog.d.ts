import type { Button$PressEvent } from "sap/m/Button";
import type { InputBase$ChangeEvent } from "sap/m/InputBase";
import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
export default class MileageEditDialog extends BaseDialog implements IDialog {
    private _Popover;
    private headerCtx;
    open(event: Button$PressEvent): void;
    private getMileageEditDialog;
    static onSave(this: MileageEditDialog, event: Event): void;
    static onValidateMileage(this: MileageEditDialog, event: InputBase$ChangeEvent): void;
    static onValidateEngineHours(this: MileageEditDialog, event: InputBase$ChangeEvent): void;
    private _isValidInput;
    private _getValueStateText;
    private _compareCounter;
    static onClose(this: MileageEditDialog, event: Event): void;
}
