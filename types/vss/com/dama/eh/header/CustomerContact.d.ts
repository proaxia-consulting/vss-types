import type Event from "sap/ui/base/Event";
import type Order from "vss/com/dama/controller/Order.controller";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { FragmentId } from "vss/com/dama/model/Enums";
import type { IDialog } from "vss/com/dama/types/ControllerInterface";
import type { TOrderEntity } from "vss/com/dama/types/Entity";
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
