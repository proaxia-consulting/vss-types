import type { IFormAware, IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import SelectDialog from "sap/m/SelectDialog";
import type Context from "sap/ui/model/Context";
import type { Button$PressEvent } from "sap/m/Button";
interface IController extends IOrderAwareController, IFormAware {
}
declare const OASUser: {
    createDialog(this: IController, oOrderContext: Context, fnClose: CallableFunction): SelectDialog;
    onBtnOASUser(this: IController, oEvent: Button$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default OASUser;
