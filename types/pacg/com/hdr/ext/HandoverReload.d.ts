import { HandoverExtension } from "./HandoverExtension";
import type Context from "sap/ui/model/odata/v4/Context";
export declare function reload(contextInfo: string): void;
/**
 * @nonui5
 */
export declare class HandoverReload extends HandoverExtension {
    reloadDeliveryItemDeferred(contextInfo: string, ...context: Context[]): void;
}
