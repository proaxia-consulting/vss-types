import Controller from "dbme/s/act/doc/controller/BaseController";
import type { UploadSet$AfterItemRemovedEvent, UploadSet$BeforeUploadStartsEvent } from "sap/m/upload/UploadSet";
/**
 * @namespace dbme.s.act.doc.controller
 * @controller
 */
export default class Attachments extends Controller {
    NEW_DOCNR?: string;
    Docnr?: string;
    onInit(): void;
    onBeforeUploadStarts(event: UploadSet$BeforeUploadStartsEvent): void;
    onUploadComplete(event: unknown): void;
    onAttachmentDelete(event: UploadSet$AfterItemRemovedEvent): void;
    setDocnr(Docnr: string): void;
    private _uploadCollection;
    private _uploadCollectionItemsBinding;
}
