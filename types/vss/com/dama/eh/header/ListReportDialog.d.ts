import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
export default class ListReportDialog extends BaseDialog implements IDialog {
    static onClose(this: ListReportDialog, event: Event): void;
    setAfterLoad(event: Event): void;
    static onServiceOrder(this: ListReportDialog, event: Event): void;
    static onVGMDocumentItem(this: ListReportDialog, event: Event): void;
}
