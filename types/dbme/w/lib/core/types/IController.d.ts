import type Controller from "sap/ui/core/mvc/Controller";
import type BaseController from "dbme/c/controller/Base";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { IDBMEComponent, IDBMEComponentBase } from "dbme/w/lib/core/types/IComponent";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type Filter from "sap/ui/model/Filter";
import type { PlanningModeType } from "dbme/w/lib/core/calendar/Enums";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import type Dialog from "sap/m/Dialog";
import type UI5Element from "sap/ui/core/Element";
import type { IPlanningCalendar } from "dbme/w/lib/core/types/ICalendar";
import type SaveDataCommand from "dbme/w/lib/core/calendar/model/SaveDataCommand";
import type AptForm from "dbme/w/lib/core/calendar/AptForm";
import type DependentFragment from "dbme/w/lib/core/util/DependentFragment";
import type CalApt from "dbme/w/lib/core/calendar/CalApt";
import type Keyboard from "dbme/w/lib/core/util/Keyboard";
import type FacetFilter from "sap/m/FacetFilter";
import type RouteQueryFilter from "dbme/w/lib/core/util/RouteQueryFilter";
import type Menu from "sap/ui/unified/Menu";
import type View from "sap/ui/core/mvc/View";
import type HierarchyAssignment from "dbme/w/lib/core/controllerextensions/HierarchyAssignment";
export type $UXFCSettings = {
    Label: Record<string, string>;
    Hidden: Record<string, boolean>;
    Mandatory: Record<string, boolean>;
    Readonly: Record<string, boolean>;
};
export type $UISettings = {
    [key: string]: string | boolean | number | Date | Record<string, unknown> | undefined;
    Visibility?: Record<string, boolean>;
    C_X_CAL_AVB_REQUEST_COUNT?: number;
    C_X_CAL_AVB_WAIT_INTERVAL?: number;
};
export interface IBaseController extends Controller {
    hierarchyAssignment: HierarchyAssignment;
    getOwnerComponent(): IDBMEComponentBase;
}
export interface UISettingsHelperInterface {
    open(ctrl: BaseController, opener: UI5Element): Promise<Dialog>;
}
export interface IModelAwareController extends BaseController {
    getView: () => View;
    getOwnerComponent(): IDBMEComponent;
    _getModel(): ODataModel;
    _getJSONModel(oData?: object, modelName?: string, async?: boolean): JSONModel;
    _getKnownFields(entityset: string): string[];
    _jsonDataLoaded(): Promise<JSONModel | undefined>;
    _ODataToJSON<TResult>(sRemotePath: string, bForce?: boolean, aFilters?: Filter[], oTargetModel?: JSONModel): Promise<TResult[]>;
    UISettings: $UISettings;
}
export type $CalendarQueryArgs = {
    [key: string]: string | undefined;
    DISPLAY_CHARDT_FROM?: string;
};
export type TCalendarHelper = {
    [key: string]: object | undefined;
    aptDetailsDialogHandler?: DependentFragment<Dialog>;
    aptForm?: AptForm;
    createMenuHandler?: DependentFragment<Menu>;
    form: typeof CalApt;
    saveDataModel?: SaveDataCommand;
    keyboard?: Keyboard;
};
export interface ISrsController extends IModelAwareController {
    routeQueryFilter?: typeof RouteQueryFilter;
    _oQueryArgs: {
        [key: string]: string | undefined;
    };
    _aRouteQueryFilters: Filter[];
    _getFilter?: (entitySet?: string) => SmartFilterBar | FacetFilter;
}
export interface ICalendarController extends ISrsController {
    helper: TCalendarHelper;
    _view: {
        [key: string]: string;
        details: string;
        rplcreate: string;
        rpledit: string;
        wplcreate: string;
        wpledit: string;
    };
    _batchGroupId: {
        [key: string]: string;
        Apt: string;
    };
    _oQueryArgs: $CalendarQueryArgs;
    _getFilter(): SmartFilterBar;
    _applyFilters(bForce?: boolean): Promise<void>;
    _getCalendar(): IPlanningCalendar;
    _getPlanningMode(): PlanningModeType;
    _invalidateHelpers(): void;
    _setHasSelectedIntervals(bFlag?: boolean): void;
}
