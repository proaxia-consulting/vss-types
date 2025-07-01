import type { IListReportExtensionAPI, IFilterBar } from "vss/com/fe/ListReport";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type IAppComponent from "vss/com/fe/IAppComponent";
import type { IAnyTable } from "vss/com/fe/IAppContainer";
import type IAppContainer from "vss/com/fe/IAppContainer";
import type UIComponent from "sap/ui/core/UIComponent";
import type ICart from "vss/com/rcl/cart/ICart";
import type MenuButton from "sap/m/MenuButton";
export interface IAppContainerExtended extends IAppContainer {
    get cart(): ICart;
    set cart(cart: ICart);
}
/**
 * @namespace vss.com.rcl.utils
 */
export default class Container implements IAppContainerExtended {
    private static _instance;
    private _table?;
    private _listReportAPI?;
    private _objectPageAPI?;
    private _com?;
    private _mainList?;
    private _mainFilter?;
    private _cart?;
    private _actionDropdown?;
    static getInstance(reload?: boolean): Container;
    get com(): UIComponent;
    set com(com: UIComponent);
    get listReportAPI(): IListReportExtensionAPI;
    set listReportAPI(api: IListReportExtensionAPI);
    get objectPageAPI(): IObjectPageExtensionAPI;
    set objectPageAPI(api: IObjectPageExtensionAPI);
    get table(): IAnyTable;
    set table(table: IAnyTable);
    get mainList(): IAppComponent;
    set mainList(com: IAppComponent);
    get cart(): ICart;
    set cart(cart: ICart);
    get mainFilter(): IFilterBar;
    set mainFilter(filter: IFilterBar);
    get actionDropdown(): MenuButton;
    set actionDropdown(control: MenuButton);
}
