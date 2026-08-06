import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export default class Recall extends BaseDialog implements IDialog {
    setBeforeLoad(event: Control$Event): void;
    static onSave(this: Recall, event: Event): void;
    static onClose(this: Recall, event: Event): void;
}
