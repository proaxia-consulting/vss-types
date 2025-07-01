import type { ICalendarController } from "dbme/w/lib/core/types/IController";
import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
import type { TResponseSuccess } from "dbme/c/util/handleReturn";
import type { TMessage } from "dbme/c/Log";
export type TResult = {
    entity: object;
    response: TResponseSuccess;
    message: TMessage;
};
/**
 * @namespace dbme.w.lib.core.calendar.model
 * @nonui5
 */
export default class SaveDataCommand {
    oCtrl: ICalendarController;
    private oModel;
    private oIntervalHelper;
    private sEntitySetCreate;
    constructor(oCtrl: ICalendarController);
    private _getEntitySet;
    private mapIntervals;
    onSaveData(aApt: IntervalEntity[]): Promise<TResult>;
    getValidProperties(): Promise<{
        entitySet: string;
        properties: string[];
    }>;
    private _getMessageTemplate;
}
