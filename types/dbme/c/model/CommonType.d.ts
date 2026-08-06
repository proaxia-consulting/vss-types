import type FacetFilter from "sap/m/FacetFilter";
import type ResponsiveTable from "sap/m/Table";
import type FilterBar from "sap/ui/comp/filterbar/FilterBar";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
import type Control from "sap/ui/core/Control";
import type Table from "sap/ui/table/Table";
/** @deprecated Use Record<string, unknown> instead */
export type TObject = Record<string, unknown>;
export type IAnyTable = ResponsiveTable | Table;
export type IAnyFilterControl = FacetFilter | FilterBar;
/** @deprecated Use SmartField instead */
export type IAnyField = SmartField;
export type IValidateException = {
    violatedConstraints: string[];
};
export declare function isValidateException(err: unknown): err is IValidateException;
export type IItemsContainer = {
    getItems(): Control[];
} & Control;
export type IContentContainer = {
    getContent(): Control[];
} & Control;
