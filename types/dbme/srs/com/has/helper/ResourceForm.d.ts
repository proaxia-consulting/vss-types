import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type { ResourceEntity } from "dbme/w/lib/core/types/IEntity";
import type Event from "sap/ui/base/Event";
import type { Button$PressEvent } from "sap/m/Button";
import type Control from "sap/ui/core/Control";
declare const ResourceForm: {
    onFieldChange(this: TreeController, event: Event): void;
    onBtnCreateResourceShow(this: TreeController, event: Button$PressEvent): void;
    onBtnResourceFormCancel(this: TreeController, event: Button$PressEvent): void;
    onBtnResourceFormOK(this: TreeController, event: Button$PressEvent): Promise<void | {
        data: ResourceEntity | ResourceEntity[];
        response: import("dbme/c/util/handleReturn").TResponseSuccess;
        message: import("dbme/c/odata/ODataCommand").TODataMessage;
    }>;
    showDialog(this: TreeController, resourceControl: Control, bCreate?: boolean): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default ResourceForm;
