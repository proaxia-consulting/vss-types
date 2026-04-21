import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import { Button$PressEvent } from "sap/m/Button";
import { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import { FeedListItem$SenderPressEvent } from "sap/m/FeedListItem";
import { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
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
