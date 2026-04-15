import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import EventProvider from "sap/ui/base/EventProvider";
import type { TEventHandlerFunction } from "ui5";
export declare enum EventId {
    reloadActions = "reloadActions"
}
/**
 * @nonui5
 * @namespace pacg.com.rfm.model
 */
export default class RentalActionDetermination extends EventProvider {
    static metadata: {
        events: {
            reloadActions: {};
        };
    };
    static getInstance(): RentalActionDetermination;
    applyActionsFilter(api: IListReportExtensionAPI | IObjectPageExtensionAPI): void;
    attachReloadActions(fnFunction: TEventHandlerFunction, oListener?: object): this;
    detachReloadActions(fnFunction: TEventHandlerFunction, oListener?: object): this;
    private _reloadActionsDropdown;
}
