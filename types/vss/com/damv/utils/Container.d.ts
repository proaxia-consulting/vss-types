import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import IAppContainer, { IAnyTable } from "vss/com/fe/IAppContainer";
import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import { TMainConfig } from "../types/Entity";
import ticActionsLR from "./ticActionsLR";
import ticActionsOVP from "./ticActionsOVP";
/**
 * @namespace vss.com.dama.utils
 */
export default class Container implements IAppContainer {
    private _mainModel;
    private _ticActions;
    private _ticActionsOrder;
    private _table?;
    private _listReportAPI?;
    private _objectPageAPI?;
    private _mainConfig?;
    get listReportAPI(): IListReportExtensionAPI;
    set listReportAPI(api: IListReportExtensionAPI);
    get objectPageAPI(): IObjectPageExtensionAPI;
    set objectPageAPI(api: IObjectPageExtensionAPI);
    get table(): IAnyTable;
    set table(table: IAnyTable);
    get ticActions(): ticActionsLR;
    set ticActions(ticActions: ticActionsLR);
    get ticActionsOrder(): ticActionsOVP;
    set ticActionsOrder(ticActions: ticActionsOVP);
    get mainModel(): ODataModel;
    set mainModel(model: ODataModel);
    get mainConfig(): Promise<TMainConfig>;
    set mainConfig(mainConfig: Promise<TMainConfig>);
}
