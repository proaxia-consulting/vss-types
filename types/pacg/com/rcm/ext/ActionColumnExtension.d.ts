import type ListItemBase from "sap/m/ListItemBase";
import type { default as ListBase } from "sap/m/ListBase";
import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
/**
 * @nonui5
 * @namespace pacg.com.rcm.ext
 */
export default class ActionColumnExtension {
    private _table;
    private _api;
    private _cartMetaModel;
    private _cart;
    private _mainModel;
    constructor(_table: ListBase, _api: ExtensionAPI);
    initTableEvents(): void;
    bindCartMetaModel(...items: ListItemBase[]): Promise<void>;
}
