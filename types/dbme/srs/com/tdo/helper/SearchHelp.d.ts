import type { SmartField$InnerControlsCreatedEvent } from "sap/ui/comp/smartfield/SmartField";
import type { IFormAware, IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type Input from "sap/m/Input";
import type ValueHelpDialog from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
import type Table from "sap/ui/table/Table";
import type { Button$PressEvent } from "sap/m/Button";
import type { Input$ValueHelpRequestEvent } from "sap/m/Input";
import type { Dialog$BeforeCloseEvent } from "sap/m/Dialog";
type THandlers = {
    inputValueHelpRequest?: CallableFunction;
    dialogBeforeClose?: CallableFunction;
    searchHelpInit?: (input: Input, dialog: ValueHelpDialog, handlers?: THandlers) => void | Promise<unknown>;
    searchHelpCriteria?: (dialog: ValueHelpDialog, sourceData: object, allowedProperties?: string[], disabledFields?: string[]) => Promise<unknown>;
};
interface IController extends IOrderAwareController, IFormAware {
}
/**
 * Common helper for SmartField search-help.
 * @see DemandTemplate.onPrefResourceSearchHelpCriteria
 */
declare const SearchHelp: {
    onBtnVehicleNumberClear(oEvent: Button$PressEvent): void;
    onBtnCustomerNumberClear(oEvent: Button$PressEvent): void;
    getDefaultHandlers(this: IController): THandlers;
    onInnerControlsCreated(this: IController, event: SmartField$InnerControlsCreatedEvent, mHandlers?: THandlers): void;
    onFieldValueHelpRequest(this: IController, event: Input$ValueHelpRequestEvent, mHandlers?: THandlers): Promise<ValueHelpDialog>;
    onSearchHelpInit(this: IController, input: Input, dialog: ValueHelpDialog, mHandlers?: THandlers): void;
    onBeforeSearchHelpDialogClose(this: IController, event: Dialog$BeforeCloseEvent, table: Table): string[] | false;
    setSearchCriteriaFromOrderData(this: IController, dialog: ValueHelpDialog, sourceData: object, allowedDialogProperties?: string[], disabledFields?: string[]): Promise<Record<string, unknown>>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default SearchHelp;
