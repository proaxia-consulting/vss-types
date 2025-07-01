import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
export default class Recall extends BaseDialog implements IDialog {
    setBeforeLoad(event: Event): void;
    static onSave(this: Recall, event: Event): void;
    static onClose(this: Recall, event: Event): void;
}
