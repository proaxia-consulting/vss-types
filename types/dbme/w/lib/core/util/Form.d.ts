import type DatePicker from "sap/m/DatePicker";
import type InputBase from "sap/m/InputBase";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type UI5Element from "sap/ui/core/Element";
type TFormField = SmartField | InputBase | DatePicker;
type TFieldValue = string | Date | number | boolean;
export type TSerializedForm = Record<string, TFormField>;
export type TFormData = Record<string, TFieldValue>;
declare const FormUtil: {
    /**
     * Get form elements
     */
    getElements(oForm: UI5Element, aElementName?: string | string[], bCheckEnabled?: boolean, bCheckVisible?: boolean): TFormField[];
    /**
     * @deprecated use dbme.c.form.FormSerializer for SmartForm
     *
     * Returns form fields as an object. Adjust attributes to filter visible/enabled elements.
     */
    serializeObject(oForm: UI5Element, bCheckEnabled?: boolean, bCheckVisible?: boolean): TSerializedForm;
    /**
     * @deprecated Get form data from binding context instead!
     */
    getData(oForm: UI5Element, bCheckEnabled?: boolean, bCheckVisible?: boolean): TFormData;
    /**
     * @deprecated Replace with view.fireValidateFieldGroup
     */
    clearValueState(aElements: UI5Element | TFormField[], bClearText?: boolean): void;
    /**
     * @deprecated Determine invalid fields by checking field.getValueState() === ValueState.Error
     */
    validate(aElements: UI5Element | TFormField[], clearValueState?: boolean): TFormField[];
    setSmartFieldValue(field: SmartField, value: unknown, asyncUpdate?: boolean): void;
    /**
     * @deprecated Use dbme.c.util.fieldLoaded instead!
     */
    smartFieldLoaded(oSmartField: SmartField, bWaitForItems?: boolean, timeout?: number): Promise<SmartField>;
    smartFormLoaded(oSmartForm: SmartForm): Promise<SmartField[]>;
};
/**
 * @name dbme.w.lib.core.util.Form
 * @global
 */
export default FormUtil;
