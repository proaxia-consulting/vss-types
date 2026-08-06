import type { Button$PressEvent } from "sap/m/Button";
import type Panel from "sap/m/Panel";
import type Event from "sap/ui/base/Event";
import type Order from "vss/com/dama/controller/Order.controller";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { DialogMode, FragmentId, OrderLevel } from "vss/com/dama/model/Enums";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export type TUiModel = {
    currentDate: string;
    signatureModel: {
        technincian: Tsignature;
        customer: Tsignature;
    };
    userPersonnal: TechnicianDetails;
};
export type Tsignature = {
    imageType: string;
    base64: string;
};
type TechnicianDetails = {
    employeeName: string;
    personalNumber: string;
    plantName: string;
    salesOrgName: string;
};
export default class JobListSignatureDialog extends BaseDialog implements IDialog {
    protected _orderCtrl: Order;
    protected fragmentId: FragmentId;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    checkSignatureIsValid(): void;
    getPanel(panelId: string): Panel;
    setBeforeLoad(event: Control$Event, dialogMode: DialogMode): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode, orderLevel?: OrderLevel): void;
    private _initUiModel;
    static onClose(this: JobListSignatureDialog, event: Event): void;
    static onConfirm(this: JobListSignatureDialog, event: Button$PressEvent): void;
}
export {};
