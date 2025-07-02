import BaseController from "./BaseController";
import { EPaymentResultStatus } from "../types/types";
/**
 * @namespace com.pacg.dpf_pp.controller
 */
export default class Failure extends BaseController {
    onInit(): void;
    onReturnButtonPress(): void;
    formatFailureTitle(paymentStatusId: EPaymentResultStatus): string;
    formatFailureDescription(paymentStatusId: EPaymentResultStatus): string;
}
