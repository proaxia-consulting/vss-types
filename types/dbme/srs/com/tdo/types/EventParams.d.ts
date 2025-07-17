import type ListItemBase from "sap/m/ListItemBase";
import type UploadCollectionParameter from "sap/m/UploadCollectionParameter";
export type $TListSelectionChangeParams = {
    listItem: ListItemBase;
    listItems: ListItemBase[];
    selected: boolean;
    selectAll: boolean;
};
export type $TRequestFailedParams = {
    url: string;
    method: string;
    response: unknown;
};
export type $TRouteParams = {
    arguments: Record<string, unknown>;
};
/**
 * @link https://sapui5.hana.ondemand.com/1.71.51/#/api/sap.m.UploadCollection
 */
export type $TBeforeUploadStarts = {
    fileName: string;
    addHeaderParameter(parameter: UploadCollectionParameter): void;
};
type $TTypeMissmatchFile = {
    name: string;
    mimeType: string;
};
export type $TTypeMissmatch = {
    fileType: string;
    mimeType: string;
    files: $TTypeMissmatchFile[];
};
export {};
