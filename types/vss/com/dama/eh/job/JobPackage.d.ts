import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
export default class JobPackage extends BaseDialog implements IDialog {
    private _initFilter;
    setBeforeLoad(event: Event): void;
    setAfterLoad(event: Event): void;
    static onSave(this: JobPackage, event: Event): void;
    static onClose(this: JobPackage, event: Event): void;
}
