import type { Button$PressEvent } from "sap/m/Button";
import SelectDialog from "sap/m/SelectDialog";
import type Context from "sap/ui/model/Context";
import type { IFormAware, IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
type IController = {} & IOrderAwareController & IFormAware;
declare const OASUser: {
    createDialog(this: IController, orderContext: Context, fnClose: CallableFunction): SelectDialog;
    onBtnOASUser(this: IController, event: Button$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default OASUser;
