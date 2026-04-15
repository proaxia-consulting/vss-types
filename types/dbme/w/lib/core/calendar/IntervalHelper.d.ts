import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
/**
 * @namespace dbme.w.lib.core.calendar
 * @nonui5
 * @global
 */
export default class IntervalHelper {
    oCtrl: IModelAwareController;
    private static _instance;
    private oData;
    constructor(oCtrl: IModelAwareController);
    isAllDay(oIntervalData: IntervalEntity): boolean;
    setData(): Promise<this>;
}
