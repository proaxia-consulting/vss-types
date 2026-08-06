import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "../BaseDialog";
export default class JobPackage extends BaseDialog implements IDialog {
    private _initFilter;
    private _packageData;
    setBeforeLoad(event: Event): void;
    setAfterLoad(event: Event): void;
    static onSave(this: JobPackage, event: Event): void;
    static onClose(this: JobPackage, event: Event): void;
}
