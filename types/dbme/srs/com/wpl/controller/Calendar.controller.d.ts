import CalendarController from "dbme/w/lib/core/calendar/CalendarController";
import KeyboardHelper from "dbme/w/lib/core/util/Keyboard";
import type { $RouteMatchedParams } from "dbme/w/lib/core/util/RouteQueryFilter";
import type { Button$PressEvent } from "sap/m/Button";
import type List from "sap/m/List";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import Event from "sap/ui/base/Event";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import type { Route$MatchedEvent } from "sap/ui/core/routing/Route";
import Filter from "sap/ui/model/Filter";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
/**
 * @namespace dbme.srs.com.wpl.controller
 * @controller
 */
export default class Calendar extends CalendarController implements IWPLController {
    /** @override Override with WPL helper */
    routeQueryFilter: {
        onRouteMatched(this: import("dbme/w/lib/core/types/IController").ISrsController, event: $RouteMatchedParams, entitySet: string | string[], aIgnoredQueryArgs?: string[], filterControl?: SmartFilterBar, queryArgsMap?: Map<string, string | undefined>): Promise<{
            [x: string]: string;
        }>;
    };
    protected _filterBar: SmartFilterBar;
    constructor(name: string | object[]);
    onInit(): void;
    onRouteMatched(event: Route$MatchedEvent): Promise<{
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
    onDemandsSelectionChange(event: ListBase$SelectionChangeEvent): void;
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
