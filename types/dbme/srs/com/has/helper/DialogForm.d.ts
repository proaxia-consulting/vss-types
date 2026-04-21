import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
import type { default as Dialog } from "sap/m/Dialog";
import type InputBase from "sap/m/InputBase";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
import type { Control$ValidateFieldGroupEvent } from "sap/ui/core/Control";
import type UI5Element from "sap/ui/core/Element";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
/**
 * @namespace dbme.srs.com.has.helper
 * @nonui5
 */
export default class DialogForm extends DependentFragment<Dialog, TreeController> {
    protected oInnerControl?: Dialog;
    protected sFieldGroupId?: string;
    protected load(sourceControl: UI5Element): Promise<Dialog>;
    loaded(sourceControl: UI5Element): Promise<Dialog>;
    onValidate(event?: Control$ValidateFieldGroupEvent): void;
    validate(): Promise<void>;
    protected getFormElements(): InputBase[];
    protected getFormElementsForValidate(): (InputBase | (InputBase & SmartField))[];
    protected dialogModel(modelName?: "local"): JSONModel;
}
