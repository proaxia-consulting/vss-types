import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import { IObjectPageExtension } from "vss/com/fe/ObjectPage";
import { ButtonType } from "sap/m/library";
import { Button$PressEvent } from "sap/m/Button";
/**
 * @namespace vss.com.upm.ext.controller
 * @controller
 */
export default class ItemObjectPageExt extends ControllerExtension<ExtensionAPI> {
    static overrides: {
        onInit(this: ItemObjectPageExt & IObjectPageExtension): void;
        onPageReady(this: ItemObjectPageExt & IObjectPageExtension): void;
    };
    onOperationButtonPress(event: Button$PressEvent): void;
    formatOperationType(operationType: string): ButtonType.Accept | ButtonType.Emphasized | ButtonType.Reject;
    private _prepareControls;
    private _controlsPrepared;
}
