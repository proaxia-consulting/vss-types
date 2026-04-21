import type ObjectIdentifier from "sap/m/ObjectIdentifier";
import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
export default class ListReportDialog extends BaseDialog implements IDialog {
    static onClose(this: ListReportDialog, event: Event): void;
    setAfterLoad(event: Event): void;
    static onServiceOrder(this: ListReportDialog, event: Event<{}, ObjectIdentifier>): void;
    static onVGMDocumentItem(this: ListReportDialog, event: Event<{}, ObjectIdentifier>): void;
}
