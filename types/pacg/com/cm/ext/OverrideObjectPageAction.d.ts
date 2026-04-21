import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * @nonui5
 * @namespace pacg.com.cm.ext
 */
export default class OverrideObjectPageAction {
    private _api;
    private _actions;
    private _headerTitle;
    constructor(_api: IObjectPageExtensionAPI, _actions?: ("com.sap.gateway.srvd.pacg.rso_cm.v0001.ShipToAddrMaintain" | "com.sap.gateway.srvd.pacg.rso_cm.v0001.QuickRentalProcess")[]);
    init(reload?: boolean): this;
    /**
     * (Re)create action buttons
     */
    overridePress(): void;
    private _actionButtons;
    private _isActionButton;
}
