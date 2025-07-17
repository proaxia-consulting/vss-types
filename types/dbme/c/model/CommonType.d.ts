import type Control from "sap/ui/core/Control";
import type ResponsiveTable from "sap/m/Table";
import type Table from "sap/ui/table/Table";
import type FacetFilter from "sap/m/FacetFilter";
import type FilterBar from "sap/ui/comp/filterbar/FilterBar";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
/** @deprecated Use Record<string, unknown> instead */
export type TObject = Record<string, unknown>;
export type IAnyTable = ResponsiveTable | Table;
export type IAnyFilterControl = FacetFilter | FilterBar;
/** @deprecated Use SmartField instead */
export type IAnyField = SmartField;
export interface IValidateException {
    violatedConstraints: string[];
}
export declare function isValidateException(err: unknown): err is IValidateException;
export interface IItemsContainer extends Control {
    getItems(): Control[];
}
export interface IContentContainer extends Control {
    getContent(): Control[];
}
