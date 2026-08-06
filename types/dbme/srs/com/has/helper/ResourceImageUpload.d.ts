import type { Button$PressEvent } from "sap/m/Button";
import type { GenericTile$PressEvent } from "sap/m/GenericTile";
import type Event from "sap/ui/base/Event";
import type FileUploader from "sap/ui/unified/FileUploader";
import type { FileUploader$ChangeEvent, FileUploader$UploadCompleteEvent, FileUploader$UploadStartEvent } from "sap/ui/unified/FileUploader";
import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
declare const ResourceImageUpload: {
    onResourceUploadStart(this: TreeController, oEvent: FileUploader$UploadStartEvent): false | FileUploader;
    onResourceUploadChange(this: TreeController, oEvent: FileUploader$ChangeEvent): void;
    onResourceUploadComplete(this: TreeController, oEvent: FileUploader$UploadCompleteEvent): void;
    onUploadTypeMissmatch(event: Event): void;
    onUploadFileSizeExceed(event: Event): void;
    onFileNameLengthExceed(event: Event): void;
    onUploadTerminated(event: Event): void;
    onBtnResourceImageClose(event: Button$PressEvent): void;
    onBtnResourceImageRemove(this: TreeController, oEvent: GenericTile$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default ResourceImageUpload;
