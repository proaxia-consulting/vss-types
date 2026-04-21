import type Event from "sap/ui/base/Event";
import type OrderController from "vss/com/dama/controller/Order.controller";
import { Button$PressEvent } from "sap/m/Button";
export default class JobEventHandler {
    static onExecuteEvent(this: OrderController, event: Event): void;
    static onEditJob(this: OrderController, event: Event): void;
    static onDeleteJob(this: OrderController, event: Event): void;
    static onJobAttachment(this: OrderController, event: Event): void;
    static onJobNotification(this: OrderController, event: Event): void;
    static onStartJob(this: OrderController, event: Button$PressEvent): Promise<void>;
    static onJobDescriptionLinkPress(this: OrderController, event: Event): void;
}
