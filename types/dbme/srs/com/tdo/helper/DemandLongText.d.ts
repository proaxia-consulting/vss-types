import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
import type Dialog from "sap/m/Dialog";
import type { Button$PressEvent } from "sap/m/Button";
declare const DemandLongText: {
    edit(this: ISrsController, oEvent: Button$PressEvent): Promise<Dialog>;
    show(this: ISrsController, oEvent: Button$PressEvent): Promise<Dialog>;
    submit(oEvent: Button$PressEvent): void;
    cancel(oEvent: Button$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DemandLongText;
