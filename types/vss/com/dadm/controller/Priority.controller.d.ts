import type Dialog from "sap/m/Dialog";
import Controller from "sap/ui/core/mvc/Controller";
/**
 * @namespace vss.com.dadm.controller
 */
export default class PriorityController extends Controller {
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
