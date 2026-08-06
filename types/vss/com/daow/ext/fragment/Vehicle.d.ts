import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type { Field$ChangeEvent } from "sap/fe/macros/field/FieldAPI";
import type { Table$SelectionChangeEvent } from "sap/fe/macros/table/TableAPI";
import type { Button$PressEvent } from "sap/m/Button";
/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider
 */
export declare function onChangeCustomer(this: ExtensionAPI, event: Field$ChangeEvent): void;
export declare function onVehicleCreatePress(this: ExtensionAPI, event: Button$PressEvent): Promise<void>;
export declare function onMileageUpdatePress(this: ExtensionAPI, event: Button$PressEvent): Promise<void>;
export declare function onReassignmentPressed(this: ExtensionAPI, event: Button$PressEvent): Promise<void>;
export declare function onSelectionChange(this: ExtensionAPI, event: Table$SelectionChangeEvent): Promise<void>;
