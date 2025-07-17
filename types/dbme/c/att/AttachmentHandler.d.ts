import type Dialog from "sap/m/Dialog";
import type { IParentController } from "dbme/c/att/types";
export interface IAttachmentOpenAttachmentPopupParams {
    parentController?: IParentController;
    objectType: string;
    objectKey: string;
    changeable?: boolean;
    onSave?: () => void;
    onCancel?: () => void;
}
/**
 * @namespace dbme.c.att
 */
export default class AttachmentHandler {
    private static _this;
    private _params;
    private _attachmentModel;
    private _mediaRecorder;
    private _dialog;
    private _attachmentContainer;
    private _attachmentComponent;
    /**
     * Constructor
     */
    private constructor();
    /**
     * Create instance
     */
    static getInstance(): AttachmentHandler;
    /**
     * Create instance and open the attachment popup
     */
    static openAttachmentPopup(params: IAttachmentOpenAttachmentPopupParams): void;
    /**
     * Open the attachment popup
     */
    open(params: IAttachmentOpenAttachmentPopupParams): Promise<Dialog | void>;
    /**
     * Initialize JSON  model
     */
    private _initializeModel;
    /**
     * Handle Save button
     */
    onSave(): void;
    /**
     * Handle Cancel button
     */
    onCancel(): void;
    /**
     * Initialize the popup
     */
    private _init;
    /**
     * Open popup
     */
    openPopup(): void;
    /**
     * Refresh the attachments list
     */
    private _listRefresh;
    /**
     * Initialize the popup
     */
    private _initDialog;
    /**
     * Build the content of the popup
     */
    private _buildDialog;
    /**
     * Handle Video Record button
     */
    onRecordVideo(): void;
    /**
     * Handle Audio Record button
     */
    onRecordAudio(): void;
    /**
     * Handle Video/Audio Record button
     */
    private _attachmentPopupRecord;
    /**
     * Create the component handling the attachments
     */
    private _createAttachmentComponent;
}
