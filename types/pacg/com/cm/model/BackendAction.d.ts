import type Control from "sap/ui/core/Control";
import type UI5Element from "sap/ui/core/Element";
import type ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
export type TActionScreenData = Record<string, unknown>;
export declare const ActionDialog: {
    fieldIdKey(id: string): string;
    fieldKey(element: UI5Element): string;
};
export declare const ActionPath: {
    fromControlId(id: string, withDots?: boolean): string;
    fromControl(control: Control, withDots?: boolean): string;
    asName(actionPath: string): string;
    noDots(actionPath: string): string;
};
export declare const BackendAction: {
    isActionControlId(id: string): boolean;
    isActionControl(control: Control): boolean;
};
export declare function isDialogAction(metaModel: ODataMetaModel, actionPath: string): boolean;
