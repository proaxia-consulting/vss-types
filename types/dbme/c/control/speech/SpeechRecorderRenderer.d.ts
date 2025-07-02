import type RenderManager from "sap/ui/core/RenderManager";
import type SpeechRecorder from "dbme/c/control/speech/SpeechRecorder";
declare const SpeechRecorderRenderer: {
    apiVersion: number;
    render: (rm: RenderManager, control: SpeechRecorder) => void;
};
/**
 * @namespace dbme.c.control.speech
 */
export default SpeechRecorderRenderer;
