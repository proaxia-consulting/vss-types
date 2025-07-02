import type IndexController from "../controller/Index.controller";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type Event from "sap/ui/base/Event";
import { ListItemBase$PressEvent } from "sap/m/ListItemBase";
import type RadioButton from "sap/m/RadioButton";
import type CheckBox from "sap/m/CheckBox";
declare const DecisionTreeItemsListHelper: {
    onBindingChange(this: IndexController, event: Event<{
        reason: string;
    }, ODataListBinding>): void;
    onUpdateFinished(this: IndexController, event: ListBase$UpdateFinishedEvent): void;
    onListItemPress(this: IndexController, event: ListItemBase$PressEvent): void;
    onListItemInputSelect(this: IndexController, event: Event<{}, RadioButton | CheckBox>): void;
};
export default DecisionTreeItemsListHelper;
