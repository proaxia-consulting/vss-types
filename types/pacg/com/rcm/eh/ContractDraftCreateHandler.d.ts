import type { IObjectPageController } from "vss/com/fe/ObjectPage";
export type TRejectionReason = {
    contextsExists?: boolean;
    append?: boolean;
    flush?: boolean;
};
/**
 * - Validate Contract data
 * - Propagate CART items into CreateContract entity
 *
 * @nonui5
 * @namespace pacg.com.rcm.eh
 */
export default class ContractDraftCreateHandler {
    private _ctrl;
    private _api;
    private _dialog;
    constructor(_ctrl: IObjectPageController);
    private _run;
    private _createContractHeader;
    private _createContractItems;
    private _createConfirmDialog;
}
