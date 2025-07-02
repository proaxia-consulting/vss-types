import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Event from "sap/ui/base/Event";
import StandardTreeItem from "sap/m/StandardTreeItem";
declare const AssignmentFormEdit: {
    showForm(this: TreeController, oNode: StandardTreeItem): void;
    onAssignmentRemove(this: TreeController, oEvent: Event): void;
    onAssignmentSave(this: TreeController, oEvent: Event): Promise<{
        data: import("dbme/w/lib/core/types/IEntity").HierarchyAssignmentEntity;
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    onFieldChange(this: TreeController, event: Event): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default AssignmentFormEdit;
