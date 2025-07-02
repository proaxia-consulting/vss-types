import type HBox from "sap/m/HBox";
import type PlanningCalendar from "sap/m/PlanningCalendar";
import type CalendarAppointment from "sap/ui/unified/CalendarAppointment";
/**
 * @since 1.6.21    Bridge for sap.m.PlanningCalendar to support sap.m.ListBase interface methods
 *
 * @namespace dbme.srs.com.tdo.helper
 */
export default class AllocPropCalBridge {
    private oBox;
    private oTb;
    private oCal;
    constructor(oBox: HBox);
    getId(): string;
    getCalendar(): PlanningCalendar;
    getItems(): CalendarAppointment[];
    getSelectedItems(): CalendarAppointment[];
    getSelectedItem(): CalendarAppointment | undefined;
    removeSelections(): this;
    fireSelectionChange(vData: unknown): this;
    destroy(): void;
    destroyItems(): this;
    isDestroyed(): boolean;
    isDestroyStarted(): boolean;
}
