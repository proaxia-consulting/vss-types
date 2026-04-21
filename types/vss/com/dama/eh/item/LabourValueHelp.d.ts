import type { Button$PressEvent } from "sap/m/Button";
import type { TableSelectDialog$ConfirmEvent, TableSelectDialog$LiveChangeEvent, TableSelectDialog$SearchEvent } from "sap/m/TableSelectDialog";
import Filter from "sap/ui/model/Filter";
import type Order from "vss/com/dama/controller/Order.controller";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import { FragmentId } from "vss/com/dama/model/Enums";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
import type { TJobEntity } from "vss/com/dama/types/Entity";
export default class LabourValueHelp extends BaseDialog implements IDialog {
    orderCtrl: Order;
    private selectDialog;
    private headerData;
    private LabourDialog;
    initFilters: Filter;
    jobCtx: TJobEntity;
    constructor(orderCtrl: Order, fragmentId: FragmentId);
    open(eventCtx: Button$PressEvent): void;
    private getLabourValueHelp;
    static onLiveChange(this: LabourValueHelp, event: TableSelectDialog$LiveChangeEvent): void;
    static onSearch(this: LabourValueHelp, event: TableSelectDialog$SearchEvent): void;
    private static filterList;
    static onClose(this: LabourValueHelp, event: TableSelectDialog$ConfirmEvent): void;
}
