import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
declare const DemandLongText: {
    edit(this: ISrsController, oEvent: Event): Promise<Dialog>;
    show(this: ISrsController, oEvent: Event): Promise<Dialog>;
    submit(oEvent: Event): void;
    cancel(oEvent: Event): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DemandLongText;
