import type Context from "sap/ui/model/odata/v4/Context";
import { HandoverExtension } from "pacg/com/hdr/ext/HandoverExtension";
export declare function reload(contextInfo: string): void;
/**
 * @nonui5
 */
export declare class HandoverReload extends HandoverExtension {
    reloadDeliveryItemDeferred(contextInfo: string, ...context: Context[]): void;
}
