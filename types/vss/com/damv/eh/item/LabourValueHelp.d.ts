import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import Order from "../../controller/Order.controller";
import { TJobEntity } from "../../types/Entity";
import { FragmentId } from "../../model/Enums";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
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
    static onLiveChange(this: LabourValueHelp, event: Event): void;
    static onSearch(this: LabourValueHelp, event: Event): void;
    private static filterList;
    static onClose(this: LabourValueHelp, event: Event): void;
}
