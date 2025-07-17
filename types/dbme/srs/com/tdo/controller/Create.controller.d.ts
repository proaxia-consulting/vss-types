import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
import type Event from "sap/ui/base/Event";
import type SmartField from "sap/ui/comp/smartfield/SmartField";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type { default as SmartTable } from "sap/ui/comp/smarttable/SmartTable";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import type Context from "sap/ui/model/Context";
import Filter from "sap/ui/model/Filter";
import AbstractOrder from "dbme/srs/com/tdo/controller/AbstractOrder.controller";
import type { IOrderEntity, TVehicleCustomerEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { SerializedTabsType } from "dbme/srs/com/tdo/types/ITabsAware";
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default class Create extends AbstractOrder {
    _oFormCtx: Context;
    _oQueryArgs: Record<string, string>;
    _aRouteQueryFilters: Filter[];
    protected _formObject?: Map<string, SmartField>;
    protected _pendingOrderFieldsBatchUpdate?: boolean;
    /** Automatically trigger create order, after successful form validation */
    private _autoCreateOrder;
    protected _hierarchyAssignmentData?: HierarchyAssignmentEntity;
    protected _orderTypes: string[];
    protected _formDefaults?: TVehicleCustomerEntity;
    onInit(): void;
    /**
     * override abstract method
     */
    ODataToJSON(): void;
    onRouteMatched(event: Route$PatternMatchedEvent): void;
    protected _onRouteMatched(): void;
    protected _initForm(): Promise<void>;
    _getJSONModel(): import("sap/ui/model/json/JSONModel").default;
    protected _getDefaultData(allFields?: boolean): Promise<Record<string, unknown>>;
    onSearch(event?: Event): void;
    _getTable(): SmartTable;
    _getForm(): SmartForm;
    _getSearchFilter(): Filter | null;
    getImmutableFormFields(): string[];
    /**
     * Propagate selected row data into form
     */
    onSearchResultSelectionChange(event: ListBase$SelectionChangeEvent): void;
    onBtnCreate(event: Event): void;
    _createOrder(): void;
    onRefresh(event?: Event): void;
    onBeforeRebindSearchResults(event: Event): void;
    onFieldChange(event: Event): void;
    reloadSaveEnabled(): Promise<void>;
    onExit(): void;
    /**
     * interface IOrderAwareController
     */
    isCreateOrder(): boolean;
    /**
     * interface IOrderAwareController
     */
    getSelectedOrder(): IOrderEntity[];
    /**
     * interface IOrderAwareController
     */
    serializeTabs(): SerializedTabsType;
    /**
     * AbstractOrder method implementation
     */
    getFieldGroupIdsForValidate(): string[];
    protected _serializeForm(): Map<string, SmartField>;
    protected _beforeMassFormFieldsUpdate(resetBatchUpdate?: boolean): void;
    protected _afterMassFormFieldsUpdate(): Promise<void>;
    protected _createFormContext(): Promise<Context>;
    protected _initialize(afterHierarchyChange?: boolean): Promise<void>;
    protected _setFormDefaults(formDefaults: Record<string, unknown>, ignoredFields?: string[]): Promise<void>;
    protected _defaultOrderType(): Promise<string>;
    protected _loadOrderTypes(reload?: boolean): Promise<string[]>;
}
