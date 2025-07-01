import type JSONModel from "sap/ui/model/json/JSONModel";
import type { IAttachmentConfig, IAttachmentUserData } from "dbme/c/att/types";
export declare enum MediaType {
    video = "V",
    audio = "A"
}
type TOnMediaStreamAvailable = (mediaStream: MediaStream) => void;
type TOnMediaStreamRelease = () => void;
/**
 * @namespace dbme.c.att
 */
export default class AVAttHandler {
    private _mediaType;
    private _mediaStream;
    private _mediaRecorder;
    private _tRecordedBlobs;
    private _attachmentConfig;
    private _attachmentUserData;
    private _mediaRecorderModel;
    private _onMediaStreamAvailable;
    private _onMediaStreamRelease;
    private _mediaVideoRequested;
    private _mediaAudioRequested;
    /**
     * Constructor
     */
    constructor();
    /**
     * Initialize
     */
    init(mediaRecorderModel: JSONModel, onMediaStreamAvailable: TOnMediaStreamAvailable, onMediaStreamRelease: TOnMediaStreamRelease): void;
    /**
     * Set configuration
     */
    setConfig(attachmentConfig: IAttachmentConfig): void;
    /**
     * Set user data
     */
    setUserData(attachmentUserData: IAttachmentUserData): void;
    /**
     * Set media type (video or audio)
     */
    setMediaType(mediaType: MediaType): void;
    /**
     * Get media type (video or audio)
     */
    getMediaType(): MediaType;
    /**
     * Get Media Recorder
     * We do this call before doing the enumeration of the devices because this call triggers the popup towards the user
     * if he agrees the camera or the microphone to be used by the app
     * (trigger the call - return the promise)
     */
    getMediaRecorder_areq(): Promise<MediaStream | undefined>;
    /**
     * Get Media Recorder
     * We do this call before doing the enumeration of the devices because this call triggers the popup towards the user
     * if he agrees the camera or the microphone to be used by the app
     * (trigger the call - return the promise)
     */
    getMediaRecorder_aproc(stream: MediaStream | undefined): void;
    /**
     * Get list of audio / video devices
     * (trigger the call - return the promise)
     */
    enumerateDevices_areq(): Promise<MediaDeviceInfo[] | undefined>;
    /**
     * Process the list of audio / video devices - store them for further processing
     */
    enumerateDevices_aproc(mediaDeviceInfo: MediaDeviceInfo[]): void;
    /**
     * Initialize media recorder
     */
    mediaRecorderInit(): void;
    /**
     * Start recording
     */
    recordingStart(onFinished: (data: Blob) => void): void;
    /**
     * Release media recorder (release the device)
     */
    mediaRecorderRelease(): void;
    /**
     * Stop recording
     */
    recordingStop(): void;
    /**
     * Download the audio / video recorder
     */
    download(): void;
    /**
     * Prepare the file name
     */
    private _prepareFileName;
    /**
     * Upload the audio / video to the server using CV_ATTACHMENT_SRC odata
     */
    upload(): Promise<void>;
}
export {};
