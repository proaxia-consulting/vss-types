import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export default class JobPackage extends BaseDialog implements IDialog {
    private _initFilter;
    private _packageData;
    setBeforeLoad(event: Control$Event): void;
    setAfterLoad(event: Event): void;
    static onSave(this: JobPackage, event: Event): void;
    static onClose(this: JobPackage, event: Event): void;
}
