import type IconTabFilter from "sap/m/IconTabFilter";
import type Event from "sap/ui/base/Event";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import type { Router$RouteMatchedEvent } from "sap/ui/core/routing/Router";
import JSONModel from "sap/ui/model/json/JSONModel";
import type ODataContextBinding from "sap/ui/model/odata/v2/ODataContextBinding";
import type { ODataModel$RequestFailedEvent } from "sap/ui/model/odata/v2/ODataModel";
import AbstractOrderDemands from "dbme/srs/com/tdo/controller/AbstractOrderDemands.controller";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
/**
 * @namespace dbme.srs.com.tdo.controller
 */
export default class Details extends AbstractOrderDemands implements IDemandsAwareController {
    private sOrderId?;
    private _bDemandTableRowsCreated;
    private _entityTypeForInvalidate;
    onInit(): void;
    private _getModelChangeGroups;
    onRequestFailed(oEvt: ODataModel$RequestFailedEvent): void;
    ODataToJSON(): void;
    _getJSONModel(): JSONModel;
    onRouteMatched(oEvent: Router$RouteMatchedEvent | Route$PatternMatchedEvent): void;
    private _initBinding;
    onOrderDataReceived(oEvent: Event<{
        data: IOrderEntity;
    }, ODataContextBinding>): Promise<IconTabFilter[]>;
    private _getDemandTableData;
    private _createDemandTableRows;
    private _findParameterControlForDemand;
    onBtnEdit(event: Event): void;
    onBtnSave(event: Event): void;
    private _toggleEdit;
    onFieldChange(event: Event): void;
    private _getToolbar;
    private _destroyActionButtons;
    private _reloadActionButtons;
    onBtnGoToPlanner(event: Event): void;
    /**
     * Cancel order edit
     */
    onBtnCancel(event: Event): void;
    onBtnReload(oEvent?: Event): void;
    onAfterSuccessfulAction(): void;
    /**
     * - flush OData model changes
     * - make order non-editable
     * - remove demands table content
     */
    _destroy(bUnbind?: boolean, sOrderId?: string): void;
    protected _destroyTabs(): void;
    reloadSaveEnabled(): Promise<void>;
    onExit(): void;
    onPageNavBack(oEvent: Event): void;
    onOrderAgreementChange(oEvent: Event): void;
    onTabSelect(oEvent: Event): void;
    /**
     * interface IOrderAwareController
     */
    isCreateOrder(): boolean;
    /**
     * AbstractOrder method implementation
     */
    getFieldGroupIdsForValidate(): string[];
    _checkSummary(): Promise<void>;
}
