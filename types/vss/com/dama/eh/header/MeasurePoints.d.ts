import Event from "sap/ui/base/Event";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
export default class MeasurePoints extends BaseDialog implements IDialog {
    private _Popover;
    private _headerData;
    setAfterLoad(event: Event): void;
    open(event: Event): void;
    private getMeasurePointsPopover;
    static onSave(this: MeasurePoints, event: Event): void;
    static onCancel(this: MeasurePoints, event: Event): void;
}
