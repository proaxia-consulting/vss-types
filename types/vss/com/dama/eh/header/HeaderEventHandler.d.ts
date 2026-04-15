import type { Button$PressEvent } from "sap/m/Button";
import type { Link$PressEvent } from "sap/m/Link";
import type ObjectIdentifier from "sap/m/ObjectIdentifier";
import type { Switch$ChangeEvent } from "sap/m/Switch";
import type Event from "sap/ui/base/Event";
import type OrderController from "vss/com/dama/controller/Order.controller";
import type { Control$Event } from "vss/com/dama/types/ControllerInterface";
/**
 * @namespace vss.com.dama.eh.header
 */
export declare function onMileageUpdate(this: OrderController, event: Event): void;
export declare function onTestDriveChanged(this: OrderController, event: Switch$ChangeEvent): void;
export declare function onVhcLink(this: OrderController, event: Event): void;
export declare function onRecallLink(this: OrderController, event: Event): void;
export declare function onWarrantyLink(this: OrderController, event: Event): void;
export declare function onServiceHistoryLink(this: OrderController, event: Event): void;
export declare function onServiceIntervalLink(this: OrderController, event: Event): void;
export declare function onVGMDocumentLink(this: OrderController, event: Event): void;
export declare function onOrderIdPress(this: OrderController, event: Event<{}, ObjectIdentifier>): void;
export declare function onAddJob(this: OrderController, event: Event): void;
export declare function onAddPackage(this: OrderController, event: Event): void;
export declare function onAssignTeam(this: OrderController, event: Event): void;
export declare function onCustomerContact(this: OrderController, event: Event): void;
export declare function onHeaderNotification(this: OrderController, event: Event): void;
export declare function onLinkList(this: OrderController, event: Event): void;
export declare function onLinkListItem(this: OrderController, event: Button$PressEvent): void;
export declare function onMultipleJobApproval(this: OrderController, event: Control$Event): void;
export declare function onHeaderDescriptionLinkPress(this: OrderController, event: Link$PressEvent): void;
export declare function onAdditionalAction(this: OrderController, event: Button$PressEvent): void;
export declare function onAdditionalActionItem(this: OrderController, event: Button$PressEvent): void;
