import BaseController from "com/pacg/dpao_pp/controller/BaseController";
import { EDpaoApiErrorId } from "com/pacg/dpao_pp/types";
/**
 * @namespace com.pacg.dpao_pp.controller
 */
export default class Error extends BaseController {
    onInit(): void;
    onReloadBtn(): void;
    onReturnBtn(): void;
    formatErrorDescription(errorId: EDpaoApiErrorId): string;
    formatErrorText(errorId: EDpaoApiErrorId): string;
    formatErrorIcon(errorId: EDpaoApiErrorId): string;
}
