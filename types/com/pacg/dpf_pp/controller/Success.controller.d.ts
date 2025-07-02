import BaseController from "./BaseController";
/**
 * @namespace com.pacg.dpf_pp.controller
 */
export default class Success extends BaseController {
    onInit(): void;
    onReturnButtonPress(): void;
    private onMatched;
    private onDisplay;
    formatSuccessTitle(paymentConfirmed: boolean): string;
    formatSuccessDescription(paymentConfirmed: boolean): string;
    private _returnBtn;
}
