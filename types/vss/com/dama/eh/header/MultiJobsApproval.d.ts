import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import { DialogMode, OrderLevel } from "vss/com/dama/model/Enums";
import { SelectDialog$SearchEvent } from "sap/m/SelectDialog";
export default class MultiJobsApproval extends BaseDialog implements IDialog {
    setBeforeLoad(event: Event): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    static onExecute(this: MultiJobsApproval, event: Event): void;
    static onSearch(this: MultiJobsApproval, event: SelectDialog$SearchEvent): void;
    static onCancel(this: MultiJobsApproval, event: Event): void;
}
