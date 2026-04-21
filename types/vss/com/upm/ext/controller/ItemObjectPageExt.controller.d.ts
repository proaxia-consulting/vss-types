import type { Button$PressEvent } from "sap/m/Button";
import type { FeedListItem$SenderPressEvent } from "sap/m/FeedListItem";
import { ButtonType } from "sap/m/library";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
/**
 * @namespace vss.com.upm.ext.controller
 * @controller
 */
export default class ItemObjectPageExt extends ControllerExtension {
    static overrides: {
        onInit(this: ItemObjectPageExt & IObjectPageExtension): void;
        onPageReady(this: ItemObjectPageExt & IObjectPageExtension): void;
    };
    onOperationButtonPress(this: ItemObjectPageExt & IObjectPageExtension, event: Button$PressEvent): void;
    onInitiatorPressed(this: ItemObjectPageExt & IObjectPageExtension, event: FeedListItem$SenderPressEvent): void;
    formatOperationType(operationType: string): ButtonType;
    private _prepareControls;
    private _controlsPrepared;
}
