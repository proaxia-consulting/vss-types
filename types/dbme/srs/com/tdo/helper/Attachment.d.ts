import type { UploadSet$AfterItemRemovedEvent, UploadSet$BeforeItemAddedEvent, UploadSet$BeforeUploadStartsEvent, UploadSet$FileSizeExceededEvent, UploadSet$FileTypeMismatchEvent, UploadSet$UploadCompletedEvent, UploadSet$UploadTerminatedEvent, default as UploadSet } from "sap/m/upload/UploadSet";
import type { UploadSetItem$OpenPressedEvent } from "sap/m/upload/UploadSetItem";
import type IController from "dbme/srs/com/tdo/controller/Details.controller";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
declare const Attachment: {
    /**
     * @description This event fires before item has been added to `items` aggregation.
     * Using `return` does not stop item from being added nor upload request from being sent.
     * Use `event.preventDefault()` to stop further event actions.
     */
    onBeforeItemAdded(this: IController, event: UploadSet$BeforeItemAddedEvent): void;
    /**
     * @description This event fires after item has been added to `items` aggregation. Halting upload at this point will result in inconsistent attachment items state between frontend and backend.
     * Using `return` does not stop upload request from being sent.
     * Use `event.preventDefault()` to stop further event actions.
     * @see `dbme.srs.com.tdo.helper.Attachment.onBeforeItemAdded`
     */
    onBeforeUploadStarts(this: IController, event: UploadSet$BeforeUploadStartsEvent): void;
    onUploadComplete(this: IController, event: UploadSet$UploadCompletedEvent): void;
    onUploadFileTypeMissmatch(this: IController, event: UploadSet$FileTypeMismatchEvent): void;
    onUploadMediaTypeMissmatch(this: IController, event: UploadSet$FileTypeMismatchEvent): void;
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
