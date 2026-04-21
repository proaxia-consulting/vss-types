import type Event from "sap/ui/base/Event";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type LabourValueHelp from "vss/com/dama/eh/item/LabourValueHelp";
import { ItemType } from "vss/com/dama/model/Enums";
import type { TItemIn } from "vss/com/dama/service/actionCommandService";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
import type { TJobEntity } from "vss/com/dama/types/Entity";
export default class LabourDialog extends BaseDialog implements IDialog {
    private _jobCtx;
    private _itemType;
    private _itemIn?;
    LabourValueHelp: LabourValueHelp;
    setItemCtx(itemType: ItemType, jobCtx: TJobEntity, itemIn?: TItemIn): void;
    open(event: Event): void;
    private getLabourDialog;
    static onSearch(this: LabourDialog, event: Event): void;
    static onSave(this: LabourDialog, event: Event): void;
    static onClose(this: LabourDialog, event: Event): void;
    static onLaborVH(this: LabourDialog, event: Event): void;
}
