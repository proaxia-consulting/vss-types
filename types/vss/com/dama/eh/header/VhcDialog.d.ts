import type { ListBase$ItemPressEvent } from "sap/m/ListBase";
import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export default class VhcDialog extends BaseDialog implements IDialog {
    setBeforeLoad(event: Control$Event): void;
    static onConfirm(this: VhcDialog, event: ListBase$ItemPressEvent): void;
    static onCancel(this: VhcDialog, event: Event): void;
}
