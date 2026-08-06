import type CheckBox from "sap/m/CheckBox";
import type { CheckBox$SelectEvent } from "sap/m/CheckBox";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type { ListItemBase$PressEvent } from "sap/m/ListItemBase";
import type RadioButton from "sap/m/RadioButton";
import type { RadioButton$SelectEvent } from "sap/m/RadioButton";
import type Event from "sap/ui/base/Event";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type IndexController from "dbme/w/lib/core/vehicle/tdt/controller/Index.controller";
declare const Button: {
    readonly CheckBox: "CheckBox";
    readonly Radio: "RadioButton";
};
type ButtonType = (typeof Button)[keyof typeof Button];
declare const DecisionTreeItemsListHelper: {
    onBindingChange(this: IndexController, event: Event<{
        reason: string;
    }, ODataListBinding>): void;
    onUpdateFinished(this: IndexController, event: ListBase$UpdateFinishedEvent): void;
    onListItemPress(this: IndexController, event: ListItemBase$PressEvent): void;
    onCheckboxSelect(this: IndexController, event: CheckBox$SelectEvent): void;
    onRadioButtonSelect(this: IndexController, event: RadioButton$SelectEvent): void;
    onListItemInputSelect(this: IndexController, event: Event<{}, RadioButton | CheckBox>, controlType: ButtonType): void;
    onButtonSelect(this: IndexController, contextPath: string, buttonType: ButtonType, value: boolean): void;
};
export default DecisionTreeItemsListHelper;
