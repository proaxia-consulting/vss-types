import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
/**
 * @namespace com.pacg.dpao_pp.controller
 */
export default class Main extends BaseController {
    private timerId;
    private paymentTypePanel;
    onInit(): void;
    onAfterRendering(): void;
    private loadPaymentTypes;
    onCancelBtn(): void;
    onPaymentTypeSelected(event: Event): void;
    onPaymentTypeListUpdated(event: Event): void;
    private startPayment;
    private startTimer;
    private stopTimer;
}
