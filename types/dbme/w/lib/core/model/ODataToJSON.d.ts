import type Filter from "sap/ui/model/Filter";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type JSONModel from "sap/ui/model/json/JSONModel";
import { type FacetFilterListDataType, ListMode } from "sap/m/library";
export type $ODataToJSONValues = {
    key: string;
    text: string;
};
export type $ODataToJSONMap = {
    key: string;
    text: string;
};
type $ODataToJSONBaseSettings = {
    map?: $ODataToJSONMap;
    values?: $ODataToJSONValues[];
};
export type $ODataToJSONFilterSettings = $ODataToJSONBaseSettings & {
    source?: string;
    filters?: Filter[];
    text?: string;
    key?: string;
    type?: FacetFilterListDataType;
    mode?: ListMode;
    seq?: number;
    reload?: boolean;
};
export type $ODataToJSONSettings = $ODataToJSONBaseSettings & {
    source: ODataModel;
    target?: JSONModel;
    path: string;
    filters?: Filter[];
    targetPath?: string;
    async?: boolean;
    reload?: boolean;
};
/**
 * Returns JSONModel target path KEY for given entity set.
 */
export declare function _getEntityKey(sEntitySet: string): string;
/**
 * @namespace dbme.w.lib.core.model
 * @nonui5
 */
export default class ODataToJSON<EntityData> {
    private settings;
    constructor(settings: $ODataToJSONSettings);
    load(): Promise<$ODataToJSONValues[] | EntityData[]>;
}
export {};
