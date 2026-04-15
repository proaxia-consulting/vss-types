import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type { Button$PressEvent } from "sap/m/Button";
import type { FeedListItem$SenderPressEvent } from "sap/m/FeedListItem";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.upm.ext.controller
 * @controller
 */
export default class UpsellingObjectPageExt extends ControllerExtension<ExtensionAPI> {
    static overrides: {
        onInit(this: UpsellingObjectPageExt): void;
        onPageReady(this: UpsellingObjectPageExt & IObjectPageExtension): void;
    };
    onActionButtonPress(this: UpsellingObjectPageExt & IObjectPageExtension, event: Button$PressEvent): void;
    onCommentListUpdateFinished(this: UpsellingObjectPageExt & IObjectPageExtension, event: ListBase$UpdateFinishedEvent): void;
    onInitiatorPressed(this: UpsellingObjectPageExt & IObjectPageExtension, event: FeedListItem$SenderPressEvent): void;
    private _prepareControls;
    private _controlsPrepared;
}
