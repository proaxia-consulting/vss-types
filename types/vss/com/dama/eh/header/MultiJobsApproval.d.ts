import type { SelectDialog$SearchEvent } from "sap/m/SelectDialog";
import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { DialogMode, OrderLevel } from "vss/com/dama/model/Enums";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export default class MultiJobsApproval extends BaseDialog implements IDialog {
    setBeforeLoad(event: Control$Event): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    static onExecute(this: MultiJobsApproval, event: Event): void;
    static onSearch(this: MultiJobsApproval, event: SelectDialog$SearchEvent): void;
    static onCancel(this: MultiJobsApproval, event: Event): void;
}
