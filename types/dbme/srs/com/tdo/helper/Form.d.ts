import type SmartField from "sap/ui/comp/smartfield/SmartField";
import Filter from "sap/ui/model/Filter";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type { SmartField$ChangeEvent } from "sap/ui/comp/smartfield/SmartField";
import type ListBinding from "sap/ui/model/ListBinding";
import type { IFormAware, IOrderAwareController, ISrsController } from "dbme/srs/com/tdo/types/IController";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type MultiComboBox from "sap/m/MultiComboBox";
type TFilterKeys = Record<string, Filter> | Record<string, unknown>;
interface IController extends IOrderAwareController, IFormAware {
    _reloadTabs?: CallableFunction;
}
declare const Form: {
    applyFieldItemsFilter(field: SmartField | MultiComboBox, filters: Filter | Filter[]): Promise<ListBinding>;
    setFieldItemsFilter(smartForm: SmartForm, vFilterKeys: string[] | TFilterKeys, sTarget: string, checkVisibility?: boolean): Promise<ListBinding>;
    /**
     * Side-effects for field value change
     */
    onFormFieldChange(this: IController, event: SmartField$ChangeEvent, performValidate?: boolean, throwExceptions?: boolean): Promise<void>;
    reloadRegion(this: IController, smartForm: SmartForm): Promise<void | ListBinding>;
    /**
     * Set Country field value by selected Region
     */
    reloadCountry(oSmartForm: SmartForm): boolean;
    reloadModel(this: ISrsController, smartForm: SmartForm): Promise<void | ListBinding>;
    reloadBrand(this: ISrsController, smartForm: SmartForm): Promise<void | ListBinding>;
    reloadLocation(this: ISrsController, smartForm: SmartForm, orderData: IOrderEntity): Promise<void | ListBinding>;
};
export declare function filterInvalidFields(...fields: SmartField[]): SmartField[];
/**
 * Returns SmartFields for which at least one given fieldGroupId matches
 */
export declare function findFields(this: ISrsController, fieldGroupId: string | string[]): SmartField[];
export declare function findInvalidFields(this: ISrsController, fieldGroupId: string[]): SmartField[];
export declare function fieldValidate(field: SmartField, throwExceptions?: boolean): Promise<void>;
export declare function setSmartFieldValueFromData(this: IController, aFields: SmartField[], mFormData: Record<string, unknown>, asyncUpdate?: boolean): void;
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default Form;
