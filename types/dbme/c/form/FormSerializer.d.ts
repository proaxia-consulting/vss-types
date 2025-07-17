import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type Control from "sap/ui/core/Control";
declare const FormSerializer: {
    serializeArray(form: SmartForm): Control[];
    serializeObject(form: SmartForm): Record<string, Control>;
    serializeMap(form: SmartForm): Map<string, Control>;
};
/**
 * @namespace dbme.c.form
 * @global
 */
export default FormSerializer;
