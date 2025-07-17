import type { Input$ValueHelpRequestEvent } from "sap/m/Input";
import type Controller from "sap/ui/core/mvc/Controller";
/**
 * this === $controller
 */
declare const OrderValueHelpHandler: {
    clear(): Promise<void>;
    onValueHelpRequest(this: Controller, event: Input$ValueHelpRequestEvent): void;
};
/**
 * @namespace dbme.f.timeclocking.eh
 */
export default OrderValueHelpHandler;
