import type Controller from "sap/ui/core/mvc/Controller";
interface IKeyValueString {
    Id: string;
    Descr: string;
}
export interface IMediaRecorderModel {
    fileName: string;
    objectKey: string;
    objectType: string;
    selectedAudioInput: string;
    selectedVideoInput: string;
    isEnabled: boolean;
    isVideo: boolean;
    isAudio: boolean;
    selectionVisibleAudio: boolean;
    selectionVisibleVideo: boolean;
    isEnabledPlay: boolean;
    isRecordingActive: boolean;
    tAudioInput: IKeyValueString[];
    tVideoInput: IKeyValueString[];
}
export interface IAttachmentConfigMediaType {
    mediaTypeId: string;
    priority: int;
    mimeType: string;
    fileNameExt: string;
    videoCodec: string;
    audioCodec: string;
    activeVideo: boolean;
    activeAudio: boolean;
}
export interface IAttachmentConfig {
    fileNameVidP: string;
    fileNameAudP: string;
    fileNameVidG: string;
    fileNameAudG: string;
    videoResX: number;
    videoResY: number;
    bitRateVid: number;
    bitRateAud: number;
}
export interface IAttachmentUserData {
    devdescAud: string;
    devdescVid: string;
}
export interface IParentController extends Controller {
    getId(): string;
}
export {};
