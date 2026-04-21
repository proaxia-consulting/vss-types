import BaseController from "com/pacg/dpf_pp/controller/BaseController";
import { EPaymentResultStatus } from "com/pacg/dpf_pp/types/types";
/**
 * @namespace com.pacg.dpf_pp.controller
 */
export default class Failure extends BaseController {
    onInit(): void;
    onReturnButtonPress(): void;
    formatFailureTitle(paymentStatusId: EPaymentResultStatus): string;
    formatFailureDescription(paymentStatusId: EPaymentResultStatus): string;
}
