import MessagePopover from "sap/m/MessagePopover";
import type Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";
/**
 * @controller
 * @namespace dbme.s.lib.controller
 */
export default class BaseController extends Controller {
    messagePopover?: MessagePopover;
    geti18n(textId: string, args?: string[]): string;
    onMessagePopoverPress(oEvent: Event): void;
    getMessagePopover(): MessagePopover;
}
