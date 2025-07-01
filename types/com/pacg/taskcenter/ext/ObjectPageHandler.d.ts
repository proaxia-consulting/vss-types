import Event from "sap/ui/base/Event";
import type { IObjectPageController, IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * Set of static method handlers for Task Center Object Page UI
 *
 * @namespace com.pacg.taskcenter.ext
 */
export default class ObjectPageHandler {
    static onCActRefresh(this: IObjectPageExtensionAPI): void;
    static onCActAddComment(this: IObjectPageExtensionAPI): void;
    static onActionButton(this: IObjectPageController, event: Event): void;
    static onInitiatorPressed(this: IObjectPageExtensionAPI, event: Event): void;
    static onDownloadSelectedButton(this: IObjectPageExtensionAPI): void;
    static onManageAttachmentsButton(this: IObjectPageExtensionAPI): void;
    private static onAttachmentsSave;
    static onSelectAllAttButton(this: IObjectPageExtensionAPI): void;
    static onUnselectAllAttButton(this: IObjectPageExtensionAPI): void;
    static onFeedListItemAction(this: IObjectPageExtensionAPI, event: Event): void;
    static onAttachmentImageListUpdated(this: IObjectPageExtensionAPI, event: Event): void;
    static onCommentListUpdateFinished(this: IObjectPageExtensionAPI, event: Event): void;
    private static _refreshObjectPage;
}
