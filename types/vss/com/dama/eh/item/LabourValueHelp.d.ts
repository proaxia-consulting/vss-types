import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import Order from "vss/com/dama/controller/Order.controller";
import { TJobEntity } from "vss/com/dama/types/Entity";
import { TableSelectDialog$ConfirmEvent, TableSelectDialog$LiveChangeEvent, TableSelectDialog$SearchEvent } from "sap/m/TableSelectDialog";
import { FragmentId } from "vss/com/dama/model/Enums";
import { IDialog } from "vss/com/dama/types/ControllerInterface";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
export default class LabourValueHelp extends BaseDialog implements IDialog {
    orderCtrl: Order;
    private selectDialog;
    private headerData;
    private LabourDialog;
    initFilters: Filter;
    jobCtx: TJobEntity;
    constructor(orderCtrl: Order, fragmentId: FragmentId);
    open(eventCtx: Event): void;
    private getLabourValueHelp;
    static onLiveChange(this: LabourValueHelp, event: TableSelectDialog$LiveChangeEvent): void;
    static onSearch(this: LabourValueHelp, event: TableSelectDialog$SearchEvent): void;
    private static filterList;
    static onClose(this: LabourValueHelp, event: TableSelectDialog$ConfirmEvent): void;
}
