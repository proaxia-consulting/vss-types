import type { Button$PressEvent } from "sap/m/Button";
import type { FeedListItem$SenderPressEvent } from "sap/m/FeedListItem";
import { ButtonType } from "sap/m/library";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.upm.ext.controller
 * @controller
 */
export default class UpsellingObjectPageExt extends ControllerExtension {
    static overrides: {
        onInit(this: UpsellingObjectPageExt): void;
        onPageReady(this: UpsellingObjectPageExt & IObjectPageExtension): void;
    };
    onActionButtonPress(this: UpsellingObjectPageExt & IObjectPageExtension, event: Button$PressEvent): void;
    onCommentListUpdateFinished(this: UpsellingObjectPageExt & IObjectPageExtension): void;
    onInitiatorPressed(this: UpsellingObjectPageExt & IObjectPageExtension, event: FeedListItem$SenderPressEvent): void;
    formatActionType(isSuggested: boolean): ButtonType;
    private _prepareControls;
    private _controlsPrepared;
}
