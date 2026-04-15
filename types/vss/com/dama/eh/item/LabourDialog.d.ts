import Event from "sap/ui/base/Event";
import { TItemIn } from "../../service/actionCommandService";
import { TJobEntity } from "../../types/Entity";
import { ItemType } from "../../model/Enums";
import LabourValueHelp from "./LabourValueHelp";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
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
