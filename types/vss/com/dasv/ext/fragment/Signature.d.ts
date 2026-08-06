import type { SignPadPanel$ChangeEvent } from "dbme/c/control/signature/SignPadPanel";
import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type { Button$PressEvent } from "sap/m/Button";
/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider.
 */
export declare function onValueClear(this: ExtensionAPI, event: Button$PressEvent): void;
export declare function onCustomerSignatureValueChange(this: ExtensionAPI, event: SignPadPanel$ChangeEvent): void;
