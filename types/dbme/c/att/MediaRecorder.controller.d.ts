import { MediaType } from "dbme/c/att/AVAttHandler";
import type { IParentController } from "dbme/c/att/types";
type TSaveCallback = () => void;
/**
 * @name dbme.c.att.MediaRecorderController.controller
 * @controller
 */
export default class MediaRecorderController {
    private _parentController;
    private _saveCallback;
    private _attConfig;
    private _attUserData;
    private _avAttHandler;
    private _mediaRecorderModel;
    private _dialog;
    private _htmlCtrlVideoRec;
    private _htmlCtrlVideoPrev;
    private _htmlCtrlAudioRec;
    private _htmlCtrlAudioPrev;
    /**
     * Constructor
     */
    constructor(_parentController: IParentController | undefined, _saveCallback: TSaveCallback);
    /**
     * Initialize JSON model
     */
    private _initializeModel;
    /**
     * Initialize the attachment handler
     */
    private _initializeAttachmentHandler;
    /**
     * Handle Save button
     */
    private onSave;
    /**
     * Handle Cancel button
     */
    private onCancel;
    /**
     * Open popup
     */
    openPopup(): void;
    /**
     * Initialize popup
     */
    init(mediaType: MediaType, objectType: string, objectKey: string): Promise<void>;
    /**
     * Initialize the dialog (once only)
     */
    private _buildDialog;
    /**
     * Handle selection of the device
     */
    private _onMediaRecorderDeviceChanged;
    /**
     * Save the selected devices in the backend
     */
    private _saveDeviceSelected;
    /**
     * Build UI Controls
     */
    private _buildUIControls;
    /**
     * Prepare the file name
     */
    private _prepareFileName;
    /**
     * Initialize the dialog
     */
    private _initDialog;
    /**
     * Init UI Controls
     */
    private _initUIControls;
    /**
     * Get Video control - recording
     */
    private _getVideoRec;
    /**
     * Get Audio control - recording
     */
    private _getAudioRec;
    /**
     * Get Video control - preview
     */
    private _getVideoPrev;
    /**
     * Get Audio control - preview
     */
    private _getAudioPrev;
    /**
     * Initalize Media Recorder
     */
    private _mediaRecorderInit;
    /**
     * Handle recording stop
     */
    private onRecordingStop;
    /**
     * Handle recording start
     */
    private onRecordingStart;
    /**
     * Play recording
     */
    onPlay(): void;
    /**
     * Download the recording
     */
    onDownload(): void;
}
export {};
