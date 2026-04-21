import type List from "sap/m/List";
import type { ManagedObject$ModelContextChangeEvent } from "sap/ui/base/ManagedObject";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import AbstractController from "dbme/w/lib/core/vehicle/tdt/controller/AbstractController";
import type { BreadCrumbLocalEntity } from "dbme/w/lib/core/vehicle/tdt/type/IEntity";
/**
 * @namespace dbme.w.lib.core.vehicle.tdt.controller
 * @controller
 */
export default class Index extends AbstractController {
    private _bindingPath?;
    private _filterControl?;
    private _itemsList?;
    private _itemsListBinding?;
    private _localModel;
    helper: {
        list: {
            onBindingChange(this: Index, event: import("sap/ui/base/Event").default<{
                reason: string;
            }, ODataListBinding>): void;
            onUpdateFinished(this: Index, event: import("sap/m/ListBase").ListBase$UpdateFinishedEvent): void;
            onListItemPress(this: Index, event: import("sap/m/ListItemBase").ListItemBase$PressEvent): void;
            onListItemInputSelect(this: Index, event: import("sap/ui/base/Event").default<Record<string, unknown>, import("sap/m/RadioButton").default | import("sap/m/CheckBox").default>): void;
        };
        navigation: {
            onNavigteBack(this: Index, event: import("sap/m/Button").Button$PressEvent): void;
            onNavigteToPage(this: Index, event: import("sap/m/Link").Link$PressEvent | BreadCrumbLocalEntity["Current"]): void;
        };
        smartFilter: {
            applyFiltersFromData(this: Index, data: Record<string, unknown>, replace?: boolean): Promise<void>;
            applyFilters(this: Index, ...filter: import("sap/ui/model/Filter").default[]): Promise<void>;
            onSearch(this: Index, event: import("sap/ui/base/Event").default<Record<string, unknown>, SmartFilterBar>): void;
            onClear(this: Index, event: import("sap/ui/base/Event").default<Record<string, unknown>, SmartFilterBar>): void;
        };
    };
    onInit(): void;
    onRouteMatched(event: Route$PatternMatchedEvent): void;
    onModelContextChange(event: ManagedObject$ModelContextChangeEvent): void;
    getBreadCrumbs(): BreadCrumbLocalEntity;
    setBreadCrumbs(bc: BreadCrumbLocalEntity): void;
    getFilter(): SmartFilterBar;
    getItemsList(): List;
    getItemsListBinding(): ODataListBinding | undefined;
    setItemsListBinding(binding: ODataListBinding): this;
    private _initLocalModel;
    private _updateBreadCrumbs;
}
