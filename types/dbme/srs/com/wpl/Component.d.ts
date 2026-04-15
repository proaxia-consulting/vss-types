import UIComponent from "dbme/w/lib/core/ui/UIComponent";
/**
 * @namespace dbme.srs.com.wpl
 */
export default class Component extends UIComponent {
    PlanningMode: {
        Manual: "M";
        Rescheduling: "R";
    };
    UISettingsKey: {
        ShowCreateForm: "WPL_ALLC_DEM";
        ShowDateChangeForm: "WPL_DROP_DEM";
        ShowResourceChangeForm: "WPL_DROP_DEM_RES";
        ShowPasteForm: "WPL_PAST_RES";
        ShowRemoveConfirm: "WPL_DELE_DEM";
        InitialView: "WPL_INIT_VIEW";
        ShowWeekNumbers: "WPL_SHOW_WEEK";
        PlanningMode: "WPL_PLANNING_MODE";
        ShowAllResources: "WPL_SHOW_RES_ALL";
    };
    static metadata: {
        interfaces: string[];
        manifest: string;
    };
    getDBMEComponent(): "WPL";
    init(): void;
    private initTranslations;
}
