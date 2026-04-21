import type { ISrsController } from "dbme/w/lib/core/types/IController";
import type { Button$PressEvent } from "sap/m/Button";
import type { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import type IconTabFilter from "sap/m/IconTabFilter";
import type Event from "sap/ui/base/Event";
import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
import type { SmartTable$InitialiseEvent } from "sap/ui/comp/smarttable/SmartTable";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import type { RowActionItem$PressEvent } from "sap/ui/table/RowActionItem";
import type Table from "sap/ui/table/Table";
import type { $SmartTableBeforeRebindEventParams } from "ui5";
import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import type { IAfterAction, IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
/**
 * interface IOrderAwareController is required for triggering the SRS Order actions
 *
 * @namespace dbme.srs.com.tdo.controller
 */
export default class Index extends AbstractBase implements ISrsController, IAfterAction, IOrderAwareController {
    _aRouteQueryFilters: Filter[];
    _oQueryArgs: Record<string, string>;
    _oTable?: Table;
    private _aLastTableFilters;
    private _sLastFilter?;
    onInit(): void;
    onRouteMatched(event: Route$PatternMatchedEvent): void;
    private _onRouteMatchedAsync;
    ODataToJSON(): void;
    _getJSONModel(): JSONModel;
    _getTable(): Table;
    private scrollTableToLeft;
    onAfterVariantApply(event: Event): void;
    onSearch(event: Event): void;
    private _getSearchField;
    private _getSearchFilter;
    private _getFilters;
    private _applyFilters;
    private _getTabs;
    _getSelectedTab(): IconTabFilter;
    private _getTabFilter;
    onTabSelect(event: IconTabBar$SelectEvent): void;
    onBtnReload(event: Button$PressEvent): void;
    private _reloadActionButtons;
    onAfterSuccessfulAction(): void;
    onRowPress(event: RowActionItem$PressEvent): boolean;
    onBtnCreate(event: Event): void;
    oBeforeRebindTable(event: Event<$SmartTableBeforeRebindEventParams, SmartTable>): void;
    /**
     * Fix DateTime fields display format, as they are not apply 'style' from SmartTable's customData:dateFormatSettings
     */
    onTableInit(event: SmartTable$InitialiseEvent): void;
    /**
     * interface IOrderAwareController is required for triggering the SRS Order actions
     */
    isCreateOrder(): boolean;
    /**
     * interface IOrderAwareController is required for triggering the SRS Order actions
     */
    getSelectedOrder(): IOrderEntity[];
    /**
     * interface IOrderAwareController is required for triggering the SRS Order actions
     */
    serializeTabs(): {};
    /**
     * interface IOrderAwareController is required for triggering the SRS Order actions
     */
    setSaveEnabled(flag: boolean, asyncUpdate?: boolean): void;
    getFieldGroupIdsForValidate(): string[];
    /**
     * Merge filters with the same path before adding
     */
    private _setLastTableFilters;
}
