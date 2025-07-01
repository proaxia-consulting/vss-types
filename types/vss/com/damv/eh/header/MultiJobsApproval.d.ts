import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
import { DialogMode, OrderLevel } from "../../model/Enums";
export default class MultiJobsApproval extends BaseDialog implements IDialog {
    setBeforeLoad(event: Event): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    static onExecute(this: MultiJobsApproval, event: Event): void;
    static onSearch(this: MultiJobsApproval, event: Event): void;
    static onCancel(this: MultiJobsApproval, event: Event): void;
}
