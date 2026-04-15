import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type Table from "sap/m/Table";
import type Event from "sap/ui/base/Event";
import type Order from "vss/com/dama/controller/Order.controller";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import { type FragmentId, DialogMode, ItemPartIssueAction, OrderLevel } from "vss/com/dama/model/Enums";
import type { TJobIn } from "vss/com/dama/service/actionCommandService";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export default class PartsAcceptanceDialog extends BaseDialog implements IDialog {
    protected _orderCtrl: Order;
    protected fragmentId: FragmentId;
    _jobEntity: TJobIn;
    private _table?;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    confirmButtonVisible(value: boolean): void;
    cancelButtonVisible(value: boolean): void;
    enableConfirmButton(value: boolean): void;
    enableCancelButton(value: boolean): void;
    getTable(): Table;
    static onClose(this: PartsAcceptanceDialog, event: Event): void;
    static onAction(this: PartsAcceptanceDialog, event: Event, action: ItemPartIssueAction): Promise<void>;
    static onConfirm(this: PartsAcceptanceDialog, event: Event, action: ItemPartIssueAction): Promise<void>;
    static onCancel(this: PartsAcceptanceDialog, event: Event): Promise<void>;
    static onSelectionChange(this: PartsAcceptanceDialog, event: ListBase$SelectionChangeEvent): void;
    refreshTableItemsBindings(this: PartsAcceptanceDialog): Promise<void>;
    setBeforeLoad(event: Control$Event, dialogMode: DialogMode): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    private _initUiModel;
}
