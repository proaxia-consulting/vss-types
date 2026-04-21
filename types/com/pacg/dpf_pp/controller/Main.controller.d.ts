import BaseController from "com/pacg/dpf_pp/controller/BaseController";
import { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
/**
 * @namespace com.pacg.dpf_pp.controller
 */
export default class Main extends BaseController {
    onInit(): void;
    onAfterRendering(): void;
    onPaymentTypeSelected(event: ListBase$SelectionChangeEvent): void;
    formatTimer(value: number): string;
    private processPaymentTypes;
    private selectPaymentType;
    private getPaymentTypeFromListItem;
    private startTimer;
    private stopTimer;
    private _timerId;
    private _paymentTypePanel;
    private _paymentTypeList;
    private _paymentOptionsContainer;
}
