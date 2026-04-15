import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import VoiceRecognitionForLongText from "pacg/com/hdr/ext/VoiceRecognitionForLongText";
type IHandoverObjectPageExtension = {
    _voiceRecognition?: VoiceRecognitionForLongText;
} & IObjectPageExtension;
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
