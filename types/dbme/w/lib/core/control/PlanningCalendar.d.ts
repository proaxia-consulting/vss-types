import type CalendarAppointment from "dbme/w/lib/core/control/CalendarAppointment";
import type PlanningCalendarRow from "dbme/w/lib/core/control/PlanningCalendarRow";
import BaseControl from "sap/m/PlanningCalendar";
import type { IContextMenu } from "sap/ui/core/library";
import type Event from "sap/ui/base/Event";
import { CalendarIntervalType as UCalendarIntervalType } from "sap/ui/unified/library";
import type Table from "sap/m/Table";
import Toolbar from "sap/m/Toolbar";
import UI5Element from "sap/ui/core/Element";
import type PlanningCalendarView from "sap/m/PlanningCalendarView";
import StandardListItem from "sap/m/StandardListItem";
import type { IPlanningCalendar, TDateBoundaries } from "dbme/w/lib/core/types/ICalendar";
import PlanningCalendarRenderer from "sap/m/PlanningCalendarRenderer";
declare enum CalIntervalType {
    OneMonth = "OneMonth",
    Week = "Week"
}
type CalendarIntervalType = UCalendarIntervalType | CalIntervalType;
interface ITimeline extends UI5Element {
    getCells(): UI5Element[];
    getIntervalType(): CalendarIntervalType;
    getStartDate(): Date;
    getAggregation(aggregation: string): UI5Element[];
}
interface IPlanningCalendarRowHeader extends StandardListItem {
    _convertViewSwitchToSelect(): void;
}
type TRowListItemCells = [IPlanningCalendarRowHeader, ITimeline];
interface IPlanningCalendarRowListItem extends StandardListItem {
    getCells(): TRowListItemCells;
    getTimeline(): ITimeline;
    getHeader(): IPlanningCalendarRowHeader;
}
/**
 * @namespace dbme.w.lib.core.control
 */
export default class PlanningCalendar extends BaseControl implements IPlanningCalendar {
    protected _oInfoToolbar: Toolbar;
    static readonly renderer: typeof PlanningCalendarRenderer;
    static readonly metadata: {
        properties: {
            /**
             * Override sap.m.PlanningCalendar's defaultValue
             */
            maxDate: {
                type: string;
                group: string;
                defaultValue: Date;
            };
        };
        aggregations: {
            /**
             * Rows of the <code>PlanningCalendar</code>.
             */
            rows: {
                type: string;
                multiple: boolean;
                singularName: string;
            };
            appointmentContextMenu: {
                type: string;
                multiple: boolean;
            };
        };
        events: {
            headerDblClick: {
                parameters: {
                    date: {
                        type: string;
                    };
                };
            };
            beforeOpenAppointmentContextMenu: {
                parameters: {
                    appointment: {
                        type: string;
                    };
                    menu: {
                        type: string;
                    };
                };
            };
            appointmentDblClick: {
                parameters: {
                    appointment: {
                        type: string;
                    };
                };
            };
        };
    };
    getAppointmentContextMenu: () => IContextMenu;
    getMaxDate: () => Date;
    fireBeforeOpenAppointmentContextMenu: (params: object) => void;
    fireAppointmentDblClick: (params: object) => void;
    fireHeaderDblClick: (params: object) => void;
    protected _getView: (key: string) => PlanningCalendarView;
    protected _getHeader: () => IPlanningCalendarRowHeader;
    protected _getIntervals: (view: PlanningCalendarView) => number;
    setAppointmentContextMenu(oContextMenu: IContextMenu): this;
    destroyAppointmentContextMenu(): this;
    /**
     * Called by CalendarAppointment
     */
    onAppointmentContextMenu(oAppointment: CalendarAppointment, oEvent: Event): void;
    onAppointmentDblClick(oAppointment: CalendarAppointment, oEvent: Event): void;
    onBeforeRendering(event: JQuery.Event): void;
    init(): void;
    /**
     * Override standard method
     */
    protected _createPlanningCalendarListItem(oRow: PlanningCalendarRow): IPlanningCalendarRowListItem;
    protected _enableControlDrop(oRow: PlanningCalendarRow, oListItem: IPlanningCalendarRowListItem): void;
    protected _getIntervalPlaceholderDateBoundaries(oIntervalPlaceholder: CalendarAppointment): {
        startDate: Date;
        endDate: Date;
    };
    protected _addControlDropInfo(oTargetRow: PlanningCalendarRow, oTargetTimeline: ITimeline, sGroupName: string): void;
    getInternalTable(): Table;
    rowsLoaded(): Promise<PlanningCalendarRow[]>;
    getSelectedView(): PlanningCalendarView;
    getShowSubIntervals(): boolean;
    getIntervalPeriod(): number;
    getDateBoundaries(): TDateBoundaries;
    getStartDateBySelectedView(): Date;
    getSelectedAppointments(): CalendarAppointment[];
    getAppointments(): CalendarAppointment[];
    getStartDate(): Date;
}
export {};
