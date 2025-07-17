import BaseController from "dbme/w/lib/core/controller/Base";
import { type PlanningModeType } from "dbme/w/lib/core/calendar/Enums";
import Filter from "sap/ui/model/Filter";
import type { $CalendarQueryArgs, ICalendarController, TCalendarHelper } from "dbme/w/lib/core/types/IController";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import type SearchField from "sap/m/SearchField";
import type { IPlanningCalendar } from "dbme/w/lib/core/types/ICalendar";
import type Event from "sap/ui/base/Event";
import type { PlanningCalendar$RowSelectionChangeEvent } from "sap/m/PlanningCalendar";
import { BatchRequestGroupId } from "dbme/w/lib/core/calendar/model/Enums";
import type { $RouteMatchedParams } from "dbme/w/lib/core/util/RouteQueryFilter";
/**
 * @namespace dbme.w.lib.core.calendar
 * @controller
 */
export default abstract class CalendarController extends BaseController implements ICalendarController {
    routeQueryFilter: {
        onRouteMatched(this: import("dbme/w/lib/core/types/IController").ISrsController, event: import("sap/ui/core/routing/Route").Route$PatternMatchedEvent | $RouteMatchedParams, entitySet: string | string[], aIgnoredQueryArgs?: string[], filterControl?: SmartFilterBar | import("sap/m/FacetFilter").default, queryArgsMap?: Map<string, string | undefined>): Promise<{
            [x: string]: string;
        }>;
    };
    helper: TCalendarHelper;
    _view: {
        details: string;
        rplcreate: string;
        rpledit: string;
        wplcreate: string;
        wpledit: string;
    };
    _aRouteQueryFilters: Filter[];
    _oQueryArgs: $CalendarQueryArgs;
    _batchGroupId: {
        Apt: BatchRequestGroupId;
    };
    protected reloadResourceAvailabilityTimeout?: NodeJS.Timeout;
    protected _oCalendar?: IPlanningCalendar;
    protected _sLastFilter?: string;
    onInit(): void;
    protected _setBusy(bFlag: boolean): void;
    protected _getModelChangeGroups(): {
        "*": {
            groupId: BatchRequestGroupId;
            single: boolean;
        };
    };
    onRequestFailed(oEvt: Event): void;
    onRouteMatched(event: Event): Promise<{
        [key: string]: string | string[];
        DISPLAY_CHARDT_FROM?: string;
        DISPLAY_CHARDT_TO?: string;
    }>;
    protected _onRouteMatchedAsync(routeParams: $RouteMatchedParams): Promise<{
        [key: string]: string | string[];
        DISPLAY_CHARDT_FROM?: string;
        DISPLAY_CHARDT_TO?: string;
    }>;
    _getCalendar(): IPlanningCalendar;
    protected _getDefaultStartDate(): Date;
    _getFilter(entitySet?: string): SmartFilterBar;
    protected _getSearchField(): SearchField;
    protected _getSearchFilter(): Filter;
    onSearch(oEvent: Event): void;
    onAppointmentSelect(oEvent: Event): void;
    _setHasSelectedIntervals(bFlag?: boolean): void;
    onRowSelectionChange(oEvent: PlanningCalendar$RowSelectionChangeEvent): void;
    onAfterRendering(): void;
    onStartDateChange(oEvent: Event): void;
    onViewChange(oEvent: Event): void;
    /**
     * Abstract method implementation; Called by this._getJSONModel
     * @see BaseController._getJSONModel()
     */
    ODataToJSON(): void;
    /**
     * Returns filters that will be applied to calendar "rows" list binding
     */
    protected _getCalendarFilters(): Promise<Filter[]>;
    _applyFilters(bForce?: boolean): Promise<void>;
    protected _applySpecialDatesFilters(): void;
    _getPlanningMode(): PlanningModeType;
    onBtnReload(oEvent: Event): void;
    onFacetFilterConfirm(oEvent: Event): void;
    _invalidateHelpers(): void;
    reloadResourceAvailability(): void;
}
