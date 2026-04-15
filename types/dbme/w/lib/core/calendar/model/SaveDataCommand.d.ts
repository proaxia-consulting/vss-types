import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
/**
 * @nonui5
 * @namespace dbme.w.lib.core.calendar.model
 */
export default class SaveDataCommand {
    oCtrl: ICalendarController;
    private oModel;
    private oIntervalHelper;
    private sEntitySetCreate;
    constructor(oCtrl: ICalendarController);
    private _getEntitySet;
    private mapIntervals;
    onSaveData(aApt: IntervalEntity[]): Promise<void>;
    getValidProperties(): Promise<{
        entitySet: string;
        properties: string[];
    }>;
    private _getMessageDisplay;
    private _getMessageTemplate;
}
