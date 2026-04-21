import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
import type ResourceModel from "sap/ui/model/resource/ResourceModel";
export declare function validateQuantities(contexts: Context[], i18nModel: ResourceModel): boolean;
export declare const checkQuantitiesDifference: (contexts: Context[]) => boolean;
export declare const confirmQuantityDifference: (i18nModel: ResourceModel) => Promise<unknown>;
export declare const checkItems: (api: ExtensionAPI) => boolean;
