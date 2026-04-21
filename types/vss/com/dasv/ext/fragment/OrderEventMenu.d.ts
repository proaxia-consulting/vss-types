import type { Menu$ItemSelectedEvent } from "sap/m/Menu";
import type Context from "sap/ui/model/odata/v4/Context";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param context the context of the page on which the event was fired. `undefined` for list report page.
 * @param selectedContexts the selected contexts of the table rows.
 */
export type OrderEventType = {
    VssEvent: string;
    RapAction: string;
    Description: string;
    AutoSave: boolean;
};
export type OrderEventResponseType = {
    value: OrderEventType[];
};
export declare function OpenMenu(this: IObjectPageExtensionAPI, context: Context | undefined): Promise<void>;
export declare function onMenuSelected(this: IObjectPageExtensionAPI, event: Menu$ItemSelectedEvent): Promise<void>;
