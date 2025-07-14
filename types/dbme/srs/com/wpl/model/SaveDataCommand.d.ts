import BaseSaveDataCommand from "dbme/w/lib/core/calendar/model/SaveDataCommand";
import type { IntervalEntity } from "dbme/w/lib/core/types/IEntity";
import type { IWPLController } from "dbme/srs/com/wpl/types/IController";
/**
 * @nonui5
 * @namespace dbme.srs.com.wpl.model
 */
export default class SaveDataCommand extends BaseSaveDataCommand {
    oCtrl: IWPLController;
    constructor(oCtrl: IWPLController);
    onSaveData(aApt: IntervalEntity[]): Promise<import("dbme/w/lib/core/calendar/model/SaveDataCommand").TResult>;
}
