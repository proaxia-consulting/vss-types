import type IController from "dbme/srs/com/tdo/controller/Details.controller";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { default as UploadSet, UploadSet$AfterItemRemovedEvent, UploadSet$BeforeUploadStartsEvent, UploadSet$FileSizeExceededEvent, UploadSet$FileTypeMismatchEvent, UploadSet$UploadCompletedEvent, UploadSet$UploadTerminatedEvent } from "sap/m/upload/UploadSet";
import type { UploadSetItem$OpenPressedEvent } from "sap/m/upload/UploadSetItem";
declare const Attachment: {
    onBeforeUploadStarts(this: IController, event: UploadSet$BeforeUploadStartsEvent): void;
    onUploadComplete(this: IController, event: UploadSet$UploadCompletedEvent): void;
    onUploadTypeMissmatch(this: IController, event: UploadSet$FileTypeMismatchEvent): void;
    onUploadFileSizeExceed(this: IController, event: UploadSet$FileSizeExceededEvent): void;
    onUploadTerminated(this: IController, event: UploadSet$UploadTerminatedEvent): void;
    onAttachmentDelete(this: IController, event: UploadSet$AfterItemRemovedEvent): void;
    onAttachmentPress(this: IController, event: UploadSetItem$OpenPressedEvent): void;
    getAttachmetList(this: IDemandsAwareController, oSectionData?: {}): Promise<UploadSet>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default Attachment;
