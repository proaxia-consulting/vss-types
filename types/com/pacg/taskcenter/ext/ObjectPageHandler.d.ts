import type { Button$PressEvent } from "sap/m/Button";
import type { FeedListItemAction$PressEvent } from "sap/m/FeedListItemAction";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type Event from "sap/ui/base/Event";
import type { IObjectPageExtension, IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const ObjectPageHandler: {
    onCActRefresh(this: IObjectPageExtensionAPI): void;
    onCActAddComment(this: IObjectPageExtensionAPI): void;
    onActionButton(this: IObjectPageExtension, event: Button$PressEvent): void;
    onInitiatorPressed(this: IObjectPageExtensionAPI, event: Event): void;
    onDownloadSelectedButton(this: IObjectPageExtensionAPI): void;
    onManageAttachmentsButton(this: IObjectPageExtensionAPI, event: Button$PressEvent): Promise<void>;
    onSelectAllAttButton(this: IObjectPageExtensionAPI): void;
    onUnselectAllAttButton(this: IObjectPageExtensionAPI): void;
    onFeedListItemAction(this: IObjectPageExtensionAPI, event: FeedListItemAction$PressEvent): void;
    onAttachmentImageListUpdated(this: IObjectPageExtensionAPI, event: ListBase$UpdateFinishedEvent): void;
    onCommentListUpdateFinished(this: IObjectPageExtensionAPI, event: ListBase$UpdateFinishedEvent): void;
};
/**
 * Set of static method handlers for Task Center Object Page UI
 *
 * @namespace com.pacg.taskcenter.ext
 */
export default ObjectPageHandler;
