import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
declare const AssignmentFormCreate: {
    showForm(this: TreeController): void;
    createAssignment(this: TreeController, oDialog?: Dialog): void;
    onAssign(this: TreeController, event: Event): void;
    onCreate(this: TreeController, event: Event): void;
    onFieldChange(this: TreeController, event: Event): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 */
export default AssignmentFormCreate;
