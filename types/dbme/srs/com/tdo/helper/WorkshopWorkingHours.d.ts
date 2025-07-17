import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
declare const WorkshopWorkingHours: {
    show(this: IModelAwareController, oEvent: Event): Promise<Dialog>;
    select(oEvent: Event): void;
    onDateChange(oEvent: Event): void;
    cancel(oEvent: Event): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default WorkshopWorkingHours;
