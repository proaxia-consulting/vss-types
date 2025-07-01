import Event from "sap/ui/base/Event";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
export default class MeasurePoints extends BaseDialog implements IDialog {
    private _Popover;
    private _headerData;
    setAfterLoad(event: Event): void;
    open(event: Event): void;
    private getMeasurePointsPopover;
    static onSave(this: MeasurePoints, event: Event): void;
    static onCancel(this: MeasurePoints, event: Event): void;
}
