import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { TUserOrgData } from "vss/com/daol/model/EntitySet";
/**
 * @namespace vss.com.daol.ext
 */
export default class UserOrgDataDialog {
    static open(extApi: IListReportExtensionAPI): Promise<TUserOrgData>;
    static getUserOrgData(): Promise<TUserOrgData>;
    private static _formatOrgData;
    private static _createDialog;
    private static _dialogP;
    private static _dialog;
    private static _component;
    private static _resolve;
    private static _reject;
    private static _handler;
    static onExit(): void;
}
