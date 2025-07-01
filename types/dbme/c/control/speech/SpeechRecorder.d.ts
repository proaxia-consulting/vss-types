import Control, { type $ControlSettings } from "sap/ui/core/Control";
import { type ISpeechRecognitionController } from "dbme/c/speech/SpeechRecognitionManager";
import type { $EventTyped as Event } from "ui5";
import { type PropertyBindingInfo } from "sap/ui/base/ManagedObject";
export type $SpeechRecorderSettings = $ControlSettings & {
    /**
     * Can be triggered by calling method `abortRecording`.
     * @param event sap.ui.base.Event
     * @returns
     */
    abort?: (event: Event) => void;
    /**
     * As this control should not be visible by default, bind this property to user configuration.
     */
    userEnabled: boolean | PropertyBindingInfo;
    /**
     * Fired when recording button has been pressed.
     * @param event
     * @returns
     */
    recordPress?: (event: SpeechRecorder$RecordPress) => void;
    /**
     * Fired when voice recording has been started and the control is listening for voice input.
     * @param event
     * @returns
     */
    recordingStarted?: (event: SpeechRecorder$RecordingStarted) => void;
    /**
     * Fired when voice recording has succesfully finished
     * @param event
     * @returns
     */
    recordingFinished?: (event: SpeechRecorder$RecordingFinished) => void;
    /**
     * Fired each time speech recognition API recognized a word. Can be hooked to text field to show speech recognition in real-time.
     * @param event
     * @returns
     */
    result?: (event: SpeechRecorder$Result) => void;
    /**
     * Fired when voice recording ended with an error.
     * @param event
     * @returns
     */
    error?: (event: SpeechRecorder$Error) => void;
    recordEnabled?: boolean;
};
export declare const SpeechRecorderEvents: {
    readonly abort: "abort";
    readonly error: "error";
    readonly recordingFinished: "recordingFinished";
    readonly recordingStarted: "recordingStarted";
    readonly recordPress: "recordPress";
    readonly result: "result";
};
export declare const SpeechRecorderEventParameters: {
    readonly abort: {};
    readonly error: {
        readonly error: "string";
        readonly message: "string";
    };
    readonly recordingFinished: {
        readonly transcript: "string";
    };
    readonly recordingStarted: {
        readonly control: "object";
    };
    readonly recordPress: {};
    readonly result: {
        readonly result: "string";
    };
};
export type SpeechRecorder$RecordPressParameters = {};
export type SpeechRecorder$ResultParameters = {
    result: string;
};
export type SpeechRecorder$ErrorParameters = {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
};
export type SpeechRecorder$RecordingStartedParameters = {
    control: object;
};
export type SpeechRecorder$RecordingFinishedParameters = {
    transcript: string;
};
export type SpeechRecorder$RecordPress = Event<SpeechRecorder$RecordPressParameters, SpeechRecorder>;
export type SpeechRecorder$Result = Event<SpeechRecorder$ResultParameters, SpeechRecorder>;
export type SpeechRecorder$RecordingStarted = Event<SpeechRecorder$RecordingFinishedParameters, SpeechRecorder>;
export type SpeechRecorder$RecordingFinished = Event<SpeechRecorder$RecordingFinishedParameters, SpeechRecorder>;
export type SpeechRecorder$Error = Event<SpeechRecorder$ErrorParameters, SpeechRecorder>;
/**
 * Control providing speech-to-text recording. Control automatically checks if Speech Recognition is supported and hides itself if it's not.
 * @description IMPORTANT!!! - Usage of browser SpeechRecognition API in proaxia's projects has been marked as an experimental feature. It should not be enabled by default. Apps that want to use it should bind 'userEnabled' parameter with global configuration parameter the end user can switch explicitly on.
 * @see dbme.c.speech.SpeechRecognition
 * @namespace dbme.c.control.speech
 */
export default class SpeechRecorder extends Control implements ISpeechRecognitionController {
    static readonly metadata: {
        properties: {
            userEnabled: {
                type: string;
                defaultValue: any;
                bindable: boolean;
            };
            recordEnabled: {
                type: string;
                defaultValue: boolean;
            };
        };
        aggregations: {
            _recordButton: {
                type: string;
                multiple: boolean;
                visibility: string;
            };
        };
        events: {
            abort: {
                parameters: {};
            };
            error: {
                parameters: {
                    readonly error: "string";
                    readonly message: "string";
                };
            };
            recordingStarted: {
                parameters: {
                    readonly control: "object";
                };
            };
            recordingFinished: {
                parameters: {
                    readonly transcript: "string";
                };
            };
            recordPress: {
                parameters: {};
            };
            result: {
                parameters: {
                    readonly result: "string";
                };
            };
        };
    };
    static renderer: {
        apiVersion: number;
        render: (rm: import("sap/ui/core/RenderManager").default, control: SpeechRecorder) => void;
    };
    private _recordButton;
    private _isRecording;
    private _transcript;
    private _finalTranscript;
    isRecording(): boolean;
    constructor(mSettings?: $SpeechRecorderSettings);
    init(): void;
    onBeforeRendering(oEvent: jQuery.Event): void | undefined;
    abortRecording(): void;
    enableControl(): void;
    disableControl(): void;
    onRecordingStart(): void;
    onRecordingResult(): void;
    onRecordingEnd(): void;
    onRecordingError(event: SpeechRecognitionErrorEvent): void;
    reset(): void;
    getRecordEnabled(): boolean;
    setRecordEnabled(bEnabled: boolean): this;
    getUserEnabled(): boolean;
    setUserEnabled(bEnabled: boolean | undefined | null): this;
    private _onRecordPress;
    private _speechButtonToggle;
}
