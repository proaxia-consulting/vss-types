import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { IPlanningCalendar } from "dbme/w/lib/core/types/ICalendar";
import type { IntervalEntity, ResourceRoleEntity } from "dbme/w/lib/core/types/IEntity";
/**
 * @namespace dbme.w.lib.core.calendar.model
 * @nonui5
 */
export default class ResourceRolesQuery {
    protected oCtrl: ICalendarController;
    protected bDisplayErrors: boolean;
    protected oCalendar: IPlanningCalendar;
    constructor(oCtrl: ICalendarController, bDisplayErrors?: boolean);
    getResourceRoles(oSourceData: IntervalEntity): Promise<ResourceRoleEntity[]>;
}
