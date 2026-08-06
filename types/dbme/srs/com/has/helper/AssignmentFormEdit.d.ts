import type { Button$PressEvent } from "sap/m/Button";
import type StandardTreeItem from "sap/m/StandardTreeItem";
import type Event from "sap/ui/base/Event";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
declare const AssignmentFormEdit: {
    showForm(this: TreeController, oNode: StandardTreeItem): void;
    onAssignmentRemove(this: TreeController, event: Button$PressEvent): void;
    onAssignmentSave(this: TreeController, event: Button$PressEvent): Promise<{
        data: import("dbme/w/lib/core/types/IEntity").HierarchyAssignmentEntity;
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/Log").TMessage | (import("dbme/c/util/handleReturn").TResponseDetails & {
            title?: string;
            hasError?: boolean;
            hasWarning?: boolean;
        });
    }>;
    onFieldChange(this: TreeController, event: Event): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default AssignmentFormEdit;
