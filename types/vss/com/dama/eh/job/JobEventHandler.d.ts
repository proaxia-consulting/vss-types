import type { Button$PressEvent } from "sap/m/Button";
import type { Link$PressEvent } from "sap/m/Link";
import type OrderController from "vss/com/dama/controller/Order.controller";
import type { Control$Event } from "vss/com/dama/types/ControllerInterface";
export default class JobEventHandler {
    static onExecuteEvent(this: OrderController, event: Button$PressEvent): void;
    static onEditJob(this: OrderController, event: Button$PressEvent): void;
    static onDeleteJob(this: OrderController, event: Button$PressEvent): void;
    static onJobAttachment(this: OrderController, event: Button$PressEvent): void;
    static onJobNotification(this: OrderController, event: Control$Event): void;
    static onStartJob(this: OrderController, event: Button$PressEvent): Promise<void>;
    static onJobDescriptionLinkPress(this: OrderController, event: Link$PressEvent): void;
    static onPartsAcceptancePress(this: OrderController, event: Button$PressEvent): void;
}
