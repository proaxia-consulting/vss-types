import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import Event from "sap/ui/base/Event";
/**
 * @nonui5
 * @namespace pacg.com.rfm.ext
 */
export default class ObjectPageToolbarExtensions {
    private _api;
    private _actionDetermination;
    private _pageLayout;
    private _headerTitle;
    constructor(_api: IObjectPageExtensionAPI);
    init(reload?: boolean): this;
    /**
     * (Re)create action buttons
     */
    reloadActions(event?: Event): void;
    detachEvents(): this;
    private _requestActions;
    private _findActionButton;
    private _actionButtons;
    private _isStandardActionButton;
    private _isCustomActionButton;
    private _isInitializedActionButton;
    private _actionButtonData;
}
