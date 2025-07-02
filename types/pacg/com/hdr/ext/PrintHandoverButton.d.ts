import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type Event from "sap/ui/base/Event";
import { HandoverExtension } from "./HandoverExtension";
/**
 * @namespace pacg.com.hdr.ext
 * @nonui5
 */
export default class PrintHandoverButton extends HandoverExtension {
    protected run(): void;
    private _createPrintButton;
}
export declare function onPrint(this: IObjectPageExtensionAPI, event: Event): Promise<void>;
