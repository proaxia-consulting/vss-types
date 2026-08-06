import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { TActionEntity, TScreenData } from "pacg/com/rfm/types/Entity";
/**
 * @nonui5
 * @namespace pacg.com.rfm.model
 */
export default class RentalActionCommand {
    private api;
    private actionData;
    private screenData?;
    private selectedCtx;
    private selectedData;
    constructor(api: IListReportExtensionAPI | IObjectPageExtensionAPI, actionData: TActionEntity, screenData?: TScreenData);
    run(): Promise<void>;
}
