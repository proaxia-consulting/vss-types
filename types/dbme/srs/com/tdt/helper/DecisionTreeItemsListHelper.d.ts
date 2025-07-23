import type CheckBox from "sap/m/CheckBox";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type { ListItemBase$PressEvent } from "sap/m/ListItemBase";
import type RadioButton from "sap/m/RadioButton";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type { $EventTyped as Event } from "ui5";
import type IndexController from "dbme/srs/com/tdt/controller/Index.controller";
declare const DecisionTreeItemsListHelper: {
    onBindingChange(this: IndexController, event: Event<{
        reason: string;
    }, ODataListBinding>): void;
    onUpdateFinished(this: IndexController, event: ListBase$UpdateFinishedEvent): void;
    onListItemPress(this: IndexController, event: ListItemBase$PressEvent): void;
    onListItemInputSelect(this: IndexController, event: Event<{}, RadioButton | CheckBox>): void;
};
export default DecisionTreeItemsListHelper;
