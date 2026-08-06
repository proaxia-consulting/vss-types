import type { Button$PressEvent } from "sap/m/Button";
import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
export default class MeasurePoints extends BaseDialog implements IDialog {
    private _Popover;
    private _headerData;
    setAfterLoad(event: Event): void;
    open(event: Button$PressEvent): void;
    private getMeasurePointsPopover;
    static onSave(this: MeasurePoints, event: Event): void;
    static onCancel(this: MeasurePoints, event: Event): void;
}
