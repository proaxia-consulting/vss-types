import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
export default class VhcDialog extends BaseDialog implements IDialog {
    setBeforeLoad(event: Event): void;
    static onConfirm(this: VhcDialog, event: Event): void;
    static onCancel(this: VhcDialog, event: Event): void;
}
