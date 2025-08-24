import type TreeController from "dbme/srs/com/has/controller/Tree.controller";
import type Event from "sap/ui/base/Event";
import type FileUploader from "sap/ui/unified/FileUploader";
import type { FileUploader$ChangeEvent, FileUploader$UploadCompleteEvent, FileUploader$UploadStartEvent } from "sap/ui/unified/FileUploader";
import type { GenericTile$PressEvent } from "sap/m/GenericTile";
declare const ResourceImageUpload: {
    onResourceUploadStart(this: TreeController, oEvent: FileUploader$UploadStartEvent): false | FileUploader;
    onResourceUploadChange(this: TreeController, oEvent: FileUploader$ChangeEvent): void;
    onResourceUploadComplete(this: TreeController, oEvent: FileUploader$UploadCompleteEvent): void;
    onUploadTypeMissmatch(oEvent: Event): void;
    onUploadFileSizeExceed(oEvent: Event): void;
    onFileNameLengthExceed(oEvent: Event): void;
    onUploadTerminated(oEvent: Event): void;
    onBtnResourceImageClose(oEvent: Event): void;
    onBtnResourceImageRemove(this: TreeController, oEvent: GenericTile$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.has.helper
 * @global
 */
export default ResourceImageUpload;
