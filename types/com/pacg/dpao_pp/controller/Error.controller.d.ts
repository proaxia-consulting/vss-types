import BaseController from "./BaseController";
import { EDpaoApiErrorId } from "../types";
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
