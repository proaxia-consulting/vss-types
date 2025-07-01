import Dialog from "sap/m/Dialog";
import BaseController from "./BaseController.controller";
/**
 * @namespace vss.com.dadm.\\\\\\\\\\controller
 */
export default class PriorityController extends BaseController {
    private onRejectHandler;
    private onSaveHandler;
    private dialog;
    onInit(): void;
    prepare(dialog: Dialog): void;
    registerOnReject(handler: () => void): void;
    registerOnSave(handler: (demand: Promise<string>) => void): void;
    private onReject;
    private onAccept;
}
