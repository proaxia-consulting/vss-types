import type Dialog from "sap/m/Dialog";
import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
import type { DatePicker$ChangeEvent } from "sap/m/DatePicker";
import type { Button$PressEvent } from "sap/m/Button";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
declare const WorkshopWorkingHours: {
    show(this: IModelAwareController, oEvent: Button$PressEvent): Promise<Dialog>;
    select(oEvent: ListBase$SelectionChangeEvent): void;
    onDateChange(oEvent: DatePicker$ChangeEvent): void;
    cancel(oEvent: Button$PressEvent): void;
};
/**
 * @global
 * @namespace dbme.srs.com.tdo.helper
 */
export default WorkshopWorkingHours;
