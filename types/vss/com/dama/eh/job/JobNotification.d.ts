import type { Select$ChangeEvent } from "sap/m/Select";
import UploadSet from "sap/m/upload/UploadSet";
import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import { OrderLevel } from "vss/com/dama/model/Enums";
import type { DialogMode } from "vss/com/dama/model/Enums";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export default class JobNotification extends BaseDialog implements IDialog {
    static uploadSet: UploadSet;
    private _orderLevel;
    setBeforeLoad(event: Control$Event): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    static onSave(this: JobNotification, event: Event): void;
    static onOverflowToolbarPress(this: JobNotification, event?: Event): void;
    static onSelectChanged(this: JobNotification, event: Select$ChangeEvent): void;
    static onClose(this: JobNotification, event: Event): void;
}
