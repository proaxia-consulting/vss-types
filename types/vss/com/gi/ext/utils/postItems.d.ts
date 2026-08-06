import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
export declare const postItems: (extension: ExtensionAPI, contexts: Context[]) => Promise<void>;
export declare const refreshAfterPost: (extension: ExtensionAPI) => Promise<void>;
