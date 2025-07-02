import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import type Context from "sap/ui/model/odata/v4/Context";
import VoiceRecognitionForLongText from "../VoiceRecognitionForLongText";
interface IHandoverObjectPageExtension extends IObjectPageExtension {
    _voiceRecognition?: VoiceRecognitionForLongText;
}
/**
 * @controller
 */
export default class HandoverObjectPageExtension extends ControllerExtension {
    static overrides: {
        onInit(this: IHandoverObjectPageExtension): void;
        onPageReady(this: IHandoverObjectPageExtension, state: unknown): void;
        onExit(this: IHandoverObjectPageExtension): void;
        editFlow: {
            onBeforeDelete(this: IHandoverObjectPageExtension, mParameters?: {
                contexts?: Context[];
            }): Promise<void>;
            onBeforeSave(this: IHandoverObjectPageExtension, mParameters?: {
                contexts?: Context[];
            }): Promise<void>;
        };
    };
}
export {};
