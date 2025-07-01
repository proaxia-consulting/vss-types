import type IndexController from "dbme/w/lib/core/vehicle/tdt/controller/Index.controller";
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
    onListItemInputSelect(this: IndexController, event: Event<Record<string, unknown>, RadioButton | CheckBox>): void;
};
/**
 * @namespace dbme.w.lib.core.vehicle.tdt.helper
 */
export default DecisionTreeItemsListHelper;
