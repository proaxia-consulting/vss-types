import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import { ListBase$ItemPressEvent } from "sap/m/ListBase";
export default class VhcDialog extends BaseDialog implements IDialog {
    setBeforeLoad(event: Event): void;
    static onConfirm(this: VhcDialog, event: ListBase$ItemPressEvent): void;
    static onCancel(this: VhcDialog, event: Event): void;
}
