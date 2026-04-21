import type Controller from "sap/ui/core/mvc/Controller";
type IKeyValueString = {
    Id: string;
    Descr: string;
};
export type IMediaRecorderModel = {
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
};
export type IAttachmentConfigMediaType = {
    mediaTypeId: string;
    priority: int;
    mimeType: string;
    fileNameExt: string;
    videoCodec: string;
    audioCodec: string;
    activeVideo: boolean;
    activeAudio: boolean;
};
export type IAttachmentConfig = {
    fileNameVidP: string;
    fileNameAudP: string;
    fileNameVidG: string;
    fileNameAudG: string;
    videoResX: number;
    videoResY: number;
    bitRateVid: number;
    bitRateAud: number;
};
export type IAttachmentUserData = {
    devdescAud: string;
    devdescVid: string;
};
export type IParentController = {
    getId(): string;
} & Controller;
export {};
