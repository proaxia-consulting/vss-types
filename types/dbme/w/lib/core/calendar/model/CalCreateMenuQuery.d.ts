import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { AbsenceTypeEntity, IntervalTypeEntity, ReservationTypeEntity } from "dbme/w/lib/core/types/IEntity";
type TMenuItem = {
    [key: string]: boolean | string | number | TMenuItem[];
    items?: TMenuItem[];
};
type TMenuData = {
    items: TMenuItem[];
};
type TRawData = {
    absence: AbsenceTypeEntity[];
    reservation: ReservationTypeEntity[];
    interval: IntervalTypeEntity[];
};
/**
 * @namespace dbme.w.lib.core.calendar.model
 * @nonui5
 */
export default class CalCreateMenuQuery {
    protected oCtrl: ICalendarController;
    protected oData: TMenuData;
    constructor(oCtrl: ICalendarController);
    getData(): Promise<TMenuData>;
    protected map(oSource: TRawData): TMenuData;
}
export {};
