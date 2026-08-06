import type CheckBox from "sap/m/CheckBox";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type { ListItemBase$PressEvent } from "sap/m/ListItemBase";
import type RadioButton from "sap/m/RadioButton";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type { $EventTyped as Event } from "ui5";
import type IndexController from "dbme/srs/com/tdt/controller/Index.controller";
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
    onCheckboxSelect(this: IndexController, event: Event<{}, CheckBox>): void;
    onRadioButtonSelect(this: IndexController, event: Event<{}, RadioButton>): void;
    onListItemInputSelect(this: IndexController, event: Event<{}, RadioButton | CheckBox>, controlType: ButtonType): void;
    onButtonSelect(this: IndexController, contextPath: string, buttonType: ButtonType, value: boolean): void;
};
export default DecisionTreeItemsListHelper;
