import Controller from "sap/fe/core/PageController";
import type MessagePopover from "sap/m/MessagePopover";
import type Event from "sap/ui/base/Event";
import type OdataModel from "sap/ui/model/odata/v4/ODataModel";
/**
 * @namespace vss.com.dadm.controller
 */
export default class BaseController extends Controller {
    protected messagePopover?: Promise<MessagePopover>;
    protected getMainModel(): OdataModel;
    protected onMessagePopoverPress(event: Event): void;
    private getMessagePopover;
}
