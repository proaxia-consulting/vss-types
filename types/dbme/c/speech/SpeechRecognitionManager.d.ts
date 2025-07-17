import Device from "sap/ui/Device";
export interface ISpeechRecognitionController {
    abortRecording(): void;
    enableControl(): void;
    disableControl(): void;
    onRecordingStart(): void;
    onRecordingResult(): void;
    onRecordingEnd(): void;
    onRecordingError(event: SpeechRecognitionErrorEvent): void;
    isRecording(): boolean;
}
/**
 * Singleton helper class for Speech Recognition WEB API.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
 * @author Serafin Prusik
 * @nonui5
 */
export default class SpeechRecognitionManager {
    private static instance;
    private _device;
    private _active;
    private _recognition;
    private _finalTranscript;
    private _interimTranscript;
    private _isSupported;
    private _currentOwner;
    private _registeredControls;
    static getInstance(): SpeechRecognitionManager;
    constructor();
    /**
     * Register control to use with Speech Recognition. Only one control can use Speech Recognition at a time
     * @param control control to register
     * @returns
     */
    registerControl(control: ISpeechRecognitionController): this;
    /**
     * Remove control from Speech Recognition registry. Only one control can use Speech Recognition at a time
     * @param control control to deregister
     * @returns
     */
    deregisterControl(control: ISpeechRecognitionController): this;
    /**
     * Start recording speech
     * @param caller calling control automatically aborts current recording
     */
    start(caller: ISpeechRecognitionController): void;
    /**
     * Stops current speech recording
     */
    stop(): void;
    abort(): void;
    isActive(): boolean;
    getFinalTranscript(): string;
    getCurrentTranscript(): string;
    isSupported(): boolean;
    clearTranscript(): void;
    private removeCurrentOwner;
    private setCurrentOwner;
    getCurrentOwner(): ISpeechRecognitionController;
    getDevice(): Device;
}
