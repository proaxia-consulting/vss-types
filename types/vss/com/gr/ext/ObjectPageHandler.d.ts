import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type { Input$LiveChangeEvent } from "sap/m/Input";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type { SearchField$SearchEvent } from "sap/m/SearchField";
import type { Select$ChangeEvent } from "sap/m/Select";
import type { Button$ClickEvent } from "sap/ui/webc/main/Button";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
declare const ObjectPageHandler: {
    onSearchMaterial(this: IObjectPageExtension, event: SearchField$SearchEvent): void;
    onSelectionChange(this: ExtensionAPI, event: ListBase$SelectionChangeEvent): void;
    formatQuantity(value: number | null): number | "";
    onQuantityChange(this: ExtensionAPI, event: Input$LiveChangeEvent): void;
    onScanMaterial(this: ExtensionAPI, event: Button$ClickEvent): void;
    onStorageLocationChange(this: ExtensionAPI, event: Select$ChangeEvent): void;
    onPostOP(this: ExtensionAPI): Promise<void>;
};
/**
 * Set of static method handlers
 *
 * @namespace vss.com.gr.ext
 */
export default ObjectPageHandler;
