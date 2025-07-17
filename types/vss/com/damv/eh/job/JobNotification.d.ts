import Event from "sap/ui/base/Event";
import { DialogMode, OrderLevel } from "../../model/Enums";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
import UploadSet from "sap/m/upload/UploadSet";
export default class JobNotification extends BaseDialog implements IDialog {
    static uploadSet: UploadSet;
    private _orderLevel;
    setBeforeLoad(event: Event): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    static onSave(this: JobNotification, event: Event): void;
    static onOverflowToolbarPress(this: JobNotification, event?: Event): void;
    static onSelectChanged(this: JobNotification, event: Event): void;
    static onClose(this: JobNotification, event: Event): void;
}
