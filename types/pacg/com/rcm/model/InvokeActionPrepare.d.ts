import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
/**
 * Invoke validation @link https://help.sap.com/docs/ABAP_PLATFORM_2020/fc4c71aa50014fd1b43721701471913d/707c7e93ecab48ea9e6b9c3c893a792e.html?locale=en-US
 *
 * @nonui5
 * @namespace pacg.com.rcm.model
 */
export default class InvokeActionPrepare {
    private _api;
    private _context;
    constructor(_api: IObjectPageExtensionAPI);
    invoke(): Promise<void>;
}
