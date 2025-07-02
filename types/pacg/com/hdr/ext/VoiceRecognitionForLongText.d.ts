import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { HandoverExtension } from "./HandoverExtension";
/**
 * @nonui5
 * @namespace pacg.com.hdr.ext
 */
export default class VoiceRecognitionForLongText extends HandoverExtension {
    private static instance;
    static getInstance(api: IObjectPageExtensionAPI): VoiceRecognitionForLongText;
    static removeInstance(): void;
    private constructor();
    protected run(): void;
    private _initControls;
    refresh(): Promise<void>;
    private _tableFields;
}
