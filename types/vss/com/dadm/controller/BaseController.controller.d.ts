import Controller from "sap/fe/core/PageController";
import OdataModel from "sap/ui/model/odata/v4/ODataModel";
import Event from "sap/ui/base/Event";
import MessagePopover from "sap/m/MessagePopover";
/**
 * @namespace vss.com.dadm.controller
 */
export default class BaseController extends Controller {
    protected messagePopover: Promise<MessagePopover>;
    protected getMainModel(): OdataModel;
    protected onMessagePopoverPress(event: Event): void;
    private getMessagePopover;
}
