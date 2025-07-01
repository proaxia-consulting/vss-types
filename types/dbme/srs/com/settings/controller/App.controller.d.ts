import SrsController from "dbme/w/lib/core/controller/Base";
import type AppComponent from "../Component";
import type NavContainer from "sap/m/NavContainer";
import Event from "sap/ui/base/Event";
import type { UIAppSettingsEntity as UIAppSettingsEntityBase } from "dbme/w/lib/core/types/IEntity";
import Page from "sap/m/Page";
interface INavContainerAwareController extends SrsController {
    getNavControl(): NavContainer;
}
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default class App extends SrsController implements INavContainerAwareController {
    getOwnerComponent: () => AppComponent;
    static formatter: {
        settingValue(entity: UIAppSettingsEntityBase): string | boolean | Date;
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
        jsDateTime: typeof import("dbme/c/format/DateFormat").jsDateTime;
    };
    private _iPageIndex;
    private _navControl?;
    onInit(): void;
    ODataToJSON(): void;
    /**
     * override protected visibility
     */
    _loadUISettings(): Promise<void>;
    getNavControl(): NavContainer;
    onBreadcrumbsLinkPress(oEvent: Event): void;
    onToggleUserSettings(oEvent: Event): void;
    onSettingsItemPress(oEvent: Event): void;
    getCurrentPage(): Page;
    getPage(iIndex: number): Page;
    onPageNavButtonPress(oEvent: Event): void;
    /**
     * get list from 1st page & apply DBM|E component filter
     */
    private _initPage;
    private _createModel;
    private _createPage;
    /**
     * @see onInit
     */
    private _createFilters;
}
export {};
