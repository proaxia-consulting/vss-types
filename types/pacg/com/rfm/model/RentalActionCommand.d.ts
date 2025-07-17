import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { TActionEntity, TScreenData } from "../types/Entity";
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
