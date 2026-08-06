import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type { Input$LiveChangeEvent } from "sap/m/Input";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type { Select$ChangeEvent } from "sap/m/Select";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
declare const ObjectPageHandler: {
    onSelectionChange(this: ExtensionAPI, event: ListBase$SelectionChangeEvent): void;
    onStorageLocationChange(this: ExtensionAPI, event: Select$ChangeEvent): void;
    formatQuantity(value: number | null): number | "";
    onQuantityChange(this: IObjectPageExtension, event: Input$LiveChangeEvent): void;
    onPostOP(this: ExtensionAPI): Promise<void>;
};
/**
 * Set of static method handlers
 *
 * @namespace vss.com.gi.ext
 */
export default ObjectPageHandler;
