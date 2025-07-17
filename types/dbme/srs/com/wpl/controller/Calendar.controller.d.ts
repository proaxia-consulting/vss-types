import CalendarController from "dbme/w/lib/core/calendar/CalendarController";
import type List from "sap/m/List";
import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
/**
 * @namespace dbme.srs.com.wpl.controller
 * @controller
 */
export default class Calendar extends CalendarController implements IWPLController {
    constructor(name: string);
    onInit(): void;
    onRouteMatched(oEvent: Event): Promise<{
        [key: string]: string | string[];
        DISPLAY_CHARDT_FROM?: string;
        DISPLAY_CHARDT_TO?: string;
    }>;
    onExit(): void;
    onAfterRendering(): void;
    _getJSONModel(): JSONModel;
    ODataToJSON(): void;
    _getDemandsControl(): List;
    /**
     * Change demands list selection mode
     * @param {sap.ui.base.Event} oEvent
     */
    onCtrlKey(oEvent: Event): void;
    onDemandsSelectionChange(oEvent: Event): void;
    onShowAllResourcesSelect(oEvent: Event): void;
    onBtnReload(oEvent: Event): void;
    private _getShowAllResourcesChb;
    private _getShowAllResourcesFilter;
    /**
     * Returns filters that will be applied to calendar "rows" list binding
     */
    protected _getCalendarFilters(): Promise<Filter[]>;
}
