import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
import type Dialog from "sap/m/Dialog";
import type { Button$PressEvent } from "sap/m/Button";
import type Context from "sap/ui/model/Context";
declare const DemandDialog: {
    load(this: ISrsController, sectionCtx: Context): Promise<Dialog>;
    onDemandDialogCancel(event: Button$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DemandDialog;
