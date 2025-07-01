import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
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
