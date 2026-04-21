import BaseController from "com/pacg/dpf_pp/controller/BaseController";
import { EDPFApiErrorId } from "com/pacg/dpf_pp/types/types";
/**
 * @namespace com.pacg.dpf_pp.controller
 */
export default class Error extends BaseController {
    onInit(): void;
    onReloadBtn(): void;
    formatErrorDescription(errorId: EDPFApiErrorId): string;
    formatErrorText(errorId: EDPFApiErrorId): string;
    formatErrorImage(errorId: EDPFApiErrorId): string;
}
