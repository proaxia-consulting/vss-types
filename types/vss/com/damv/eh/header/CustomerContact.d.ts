import Event from "sap/ui/base/Event";
import Order from "../../controller/Order.controller";
import { FragmentId } from "../../model/Enums";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
import { TOrderEntity } from "../../types/Entity";
export default class CustomerContact extends BaseDialog implements IDialog {
    private controller;
    private CustomerContactDialog;
    private headerCtx;
    private caller;
    constructor(controller: Order, fragmentId: FragmentId);
    open(event: Event): void;
    private getCustomerContactDialog;
    static onClose(this: CustomerContact, event: Event): void;
    static onEmail(this: CustomerContact, event: Event): void;
    static onPhone(this: CustomerContact, event: Event): void;
    static onCellPhone(this: CustomerContact, event: Event): void;
    static getHeader(this: CustomerContact): TOrderEntity;
}
