import CalendarController from "dbme/w/lib/core/calendar/CalendarController";
import type { IWPLController } from "../types/IController";
import KeyboardHelper from "dbme/w/lib/core/util/Keyboard";
import Filter from "sap/ui/model/Filter";
import Event from "sap/ui/base/Event";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type List from "sap/m/List";
import JSONModel from "sap/ui/model/json/JSONModel";
import type { Route$MatchedEvent } from "sap/ui/core/routing/Route";
import type { Button$PressEvent } from "sap/m/Button";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
/**
 * @namespace dbme.srs.com.wpl.controller
 * @controller
 */
export default class Calendar extends CalendarController implements IWPLController {
    protected _filterBar: SmartFilterBar;
    constructor(sName: string | object[]);
    onInit(): void;
    onRouteMatched(oEvent: Route$MatchedEvent): Promise<{
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
     */
    onCtrlKey(event: Event<{
        isDown: boolean;
    }, KeyboardHelper>): void;
    onDemandsSelectionChange(oEvent: ListBase$SelectionChangeEvent): void;
    onShowAllResourcesSelect(event: Event): void;
    onBtnReload(event: Button$PressEvent): void;
    private _getShowAllResourcesChb;
    private _getShowAllResourcesFilter;
    /**
     * Returns filters that will be applied to calendar "rows" list binding
     */
    protected _getCalendarFilters(): Promise<Filter[]>;
    _getFilter(): SmartFilterBar;
}
