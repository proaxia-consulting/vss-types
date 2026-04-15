import type SmartField from "sap/ui/comp/smartfield/SmartField";
import type VerticalLayout from "sap/ui/layout/VerticalLayout";
import type CreateApt from "dbme/srs/com/tdo/controller/CreateApt.controller";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
declare const DateFormTemplate: {
    setWorkingHoursStepForPicker(this: IOrderAwareController, oField: SmartField, aWorkshop?: string[]): Promise<SmartField>;
    getDateForm(this: CreateApt, bRecalc?: boolean): Promise<VerticalLayout>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DateFormTemplate;
