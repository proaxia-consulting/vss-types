import BaseController from "./BaseController";
/**
 * @namespace com.pacg.disc_appr.controller
 */
export default class Main extends BaseController {
    onInit(): void;
    onApprove(): void;
    onReject(): void;
    private initiate;
    private doAction;
    private handleActionResponse;
    private disableButtons;
    private enableButtons;
}
