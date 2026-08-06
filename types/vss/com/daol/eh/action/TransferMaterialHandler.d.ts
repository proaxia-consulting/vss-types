import type PageController from "sap/fe/core/PageController";
import type Dialog from "sap/m/Dialog";
import type UI5Element from "sap/ui/core/Element";
import type Context from "sap/ui/model/odata/v4/Context";
import { type TActionEntity } from "vss/com/daol/model/Enums";
import type { IActionHandler } from "vss/com/daol/util/ActionHandlerFactory";
/**
 * Transfer Material action handler
 * @namespace vss.com.daol.eh.action
 */
export default class TransferMaterialHandler implements IActionHandler {
    protected _controller: PageController;
    protected _actionData: TActionEntity;
    protected _dialog: Dialog;
    protected _fragmentsMap?: Map<string, UI5Element>;
    protected _itemContext: Context;
    constructor(_controller: PageController, _actionData: TActionEntity, _dialog: Dialog);
    run(): void;
    /**
     * Overrides default Fiori dialog created from Behavior Action metadata
     * @returns
     */
    private _overrideDialog;
    getDialog(): Dialog;
    onDialogAfterClose(): void;
    onDestroy(): void;
}
