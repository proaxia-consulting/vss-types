import Controller from "dbme/c/controller/Base";
import JSONModel from "sap/ui/model/json/JSONModel";
import { jsDateTime } from "dbme/c/format/DateFormat";
import Filter from "sap/ui/model/Filter";
import type Dialog from "sap/m/Dialog";
import Button, { type Button$PressEvent } from "sap/m/Button";
import { ConfirmDialogFunction } from "dbme/w/lib/core/control/ConfirmDialogFactory";
import type { $UISettings, IBaseController, IModelAwareController } from "dbme/w/lib/core/types/IController";
import type { IDBMEComponent } from "dbme/w/lib/core/types/IComponent";
import type Menu from "sap/ui/unified/Menu";
import { type $ODataToJSONValues } from "dbme/w/lib/core/model/ODataToJSON";
import type { FacetFilter$ResetEvent } from "sap/m/FacetFilter";
import type { Select$ChangeEvent } from "sap/m/Select";
import type FioriLaunchpadContainer from "sap/ushell/Container";
import type View from "sap/ui/core/mvc/View";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import HierarchyAssignment from "dbme/w/lib/core/controllerextensions/HierarchyAssignment";
/**
 * @namespace dbme.w.lib.core.controller
 * @controller
 */
export default abstract class Base extends Controller implements IBaseController, IModelAwareController {
    getView: () => View;
    getOwnerComponent: () => IDBMEComponent;
    static metadata: {
        abstract: boolean;
    };
    /**
     * @deprecated in views - use core:require with single formatter
     */
    formatter: {
        SplitCommaToInt(sValue: string): number[];
        parseBoolean(sValue: string): boolean;
        matchingStatusToValueState(sValue: string): import("sap/ui/core/library").ValueState;
        dateLocal: typeof import("dbme/c/format/DateFormat").dateLocal;
        dateString: typeof import("dbme/c/format/DateFormat").dateString;
        dateTimeString: typeof import("dbme/c/format/DateFormat").dateTimeString;
        duration: typeof import("dbme/c/format/DateFormat").duration;
        getLocalByUTCDate: typeof import("dbme/c/format/DateFormat").getLocalByUTCDate;
        getUTCDate: typeof import("dbme/c/format/DateFormat").getUTCDate;
        jsDate: typeof import("dbme/c/format/DateFormat").jsDate;
        jsDateTime: typeof jsDateTime;
    };
    /**
     * @deprecated in views - use core:require with single formatter
     */
    groupUtils: {
        escapeGroup(oContext: import("sap/ui/model/Context").default): string;
    };
    /**
     * @deprecated in views - use core:require with single formatter
     */
    type: object;
    UISettings: $UISettings;
    /**
     * Indicator: Is nested route?
     */
    protected _bIsNested: boolean;
    protected _oRouteParams: Record<string, unknown>;
    protected _oJSONModel: JSONModel;
    /**
     * @deprecated Use dbme.c.util.FioriLaunchpad.getLaunchpadContainer()
     */
    protected _oFioriContainer?: FioriLaunchpadContainer;
    protected _mKnownFields: Map<string, string[]>;
    protected _navForwardMenu: Menu;
    protected _aJSONDataPromise: Promise<unknown>[];
    hierarchyAssignment: HierarchyAssignment;
    abstract ODataToJSON(): void;
    constructor(name: string);
    onInit(): void;
    _getModel(): ODataModel;
    _getJSONModel(initialData?: {}, modelName?: "local"): JSONModel;
    /**
     * @deprecated Use oDialog.getBindingContext().getObject() instead
     */
    protected _getDialogFormData(oDialog: Dialog, bEnabled: boolean, bVisible: boolean): unknown;
    /**
     * @deprecated Determine invalid dialog fields by checking field.getValueState() === ValueState.Error
     */
    protected _validateDialogForm(oDialog: Dialog): boolean;
    /**
     * Initialize facet filters data
     */
    protected _loadFiltersFromOData(sPath?: string): Promise<$ODataToJSONValues[]>[];
    /**
     * @deprecated Use dbme.c.odata.ODataQuery or new JSONModel(url) instead! Set JSONModel properties directly!
     *
     * Copy received data from ODataModel to JSONModel
     */
    _ODataToJSON<TResult>(sRemotePath: string, bForce?: boolean, aFilters?: Filter[], oTargetModel?: JSONModel): Promise<TResult[]>;
    protected _getJSONDataPromises(): Promise<unknown>[];
    _jsonDataLoaded(): Promise<JSONModel | undefined>;
    /**
     * @deprecated Use dbme.w.lib.core.control.ConfirmDialogFactory.create instead
     */
    protected _getConfirmDialog(fnOnConfirmButtonPress: ConfirmDialogFunction, aArguments?: unknown[]): Dialog;
    onDialogCancel(oDialog: Dialog | Button$PressEvent | Button, bAllPaths?: boolean): void;
    onPageNavBack(oEvent: Button$PressEvent): void;
    onPageNavForward(oEvent: Button$PressEvent): void;
    onFacetFilterReset(oEvent: FacetFilter$ResetEvent): void;
    protected _loadUISettings(): Promise<void>;
    onShowUserSettings(oEvent: Button$PressEvent): void;
    _getKnownFields(entitySet: string): string[];
    /**
     * @deprecated Use this.hierarchyAssignment.getModel() instead!
     */
    getHASModel(): JSONModel;
    /**
     * @deprecated Use this.hierarchyAssignment.onChange instead!
     */
    onRootHierarchyAssignmentChange(event: Select$ChangeEvent): void;
}
