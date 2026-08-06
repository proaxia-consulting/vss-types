import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { IAnyTable } from "vss/com/fe/IAppContainer";
import type IAppContainer from "vss/com/fe/IAppContainer";
import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type { TMainConfig } from "vss/com/dama/types/Entity";
import type ticActionsLR from "vss/com/dama/utils/ticActionsLR";
import type ticActionsOVP from "vss/com/dama/utils/ticActionsOVP";
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
