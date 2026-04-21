import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
export default class Recall extends BaseDialog implements IDialog {
    setBeforeLoad(event: Event): void;
    static onSave(this: Recall, event: Event): void;
    static onClose(this: Recall, event: Event): void;
}
