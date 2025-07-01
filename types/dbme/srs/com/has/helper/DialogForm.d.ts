import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
import type { default as Dialog } from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type InputBase from "sap/m/InputBase";
import type UI5Element from "sap/ui/core/Element";
import JSONModel from "sap/ui/model/json/JSONModel";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
/**
 * @namespace dbme.srs.com.has.helper
 * @nonui5
 */
export default class DialogForm extends DependentFragment<Dialog, TreeController> {
    protected oInnerControl?: Dialog;
    protected sFieldGroupId?: string;
    protected load(sourceControl: UI5Element): Promise<Dialog>;
    loaded(sourceControl: UI5Element): Promise<Dialog>;
    onValidate(event?: Event): void;
    validate(): Promise<void>;
    protected getFormElements(): InputBase[];
    protected getFormElementsForValidate(): (InputBase | (InputBase & SmartField))[];
    protected dialogModel(modelName?: "local"): JSONModel;
}
