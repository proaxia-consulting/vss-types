import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import IconTabFilter from "sap/m/IconTabFilter";
import type Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Table from "sap/ui/table/Table";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { IOrderAwareController, IAfterAction } from "dbme/srs/com/tdo/types/IController";
import type { ISrsController } from "dbme/w/lib/core/types/IController";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
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
    onRouteMatched(event: Route$PatternMatchedEvent): Promise<void>;
    private _onRouteMatchedAsync;
    ODataToJSON(): void;
    _getJSONModel(): JSONModel;
    _getTable(): Table;
    private scrollTableToLeft;
    onAfterVariantApply(oEvent: Event): void;
    onSearch(oEvent: Event): void;
    private _getSearchField;
    private _getSearchFilter;
    private _getFilters;
    private _applyFilters;
    private _getTabs;
    _getSelectedTab(): IconTabFilter;
    private _getTabFilter;
    onTabSelect(oEvent: Event): void;
    onBtnReload(event: Event): void;
    private _reloadActionButtons;
    onAfterSuccessfulAction(): void;
    onRowPress(oEvent: Event): boolean;
    onBtnCreate(oEvent: Event): void;
    oBeforeRebindTable(oEvent: Event): void;
    /**
     * Fix DateTime fields display format, as they are not apply 'style' from SmartTable's customData:dateFormatSettings
     */
    onTableInit(oEvent: Event): void;
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
