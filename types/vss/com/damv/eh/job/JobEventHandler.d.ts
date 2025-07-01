import type Event from "sap/ui/base/Event";
import type OrderController from "../../controller/Order.controller";
export default class JobEventHandler {
    static onExecuteEvent(this: OrderController, event: Event): void;
    static onEditJob(this: OrderController, event: Event): void;
    static onDeleteJob(this: OrderController, event: Event): void;
    static onJobAttachment(this: OrderController, event: Event): void;
    static onJobNotification(this: OrderController, event: Event): void;
    static onStartJob(this: OrderController, event: Event): Promise<void>;
    static onJobDescriptionLinkPress(this: OrderController, event: Event): void;
}
