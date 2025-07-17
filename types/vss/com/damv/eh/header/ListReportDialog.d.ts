import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
export default class ListReportDialog extends BaseDialog implements IDialog {
    static onClose(this: ListReportDialog, event: Event): void;
    setAfterLoad(event: Event): void;
    static onServiceOrder(this: ListReportDialog, event: Event): void;
    static onVGMDocumentItem(this: ListReportDialog, event: Event): void;
}
