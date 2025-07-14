import UIComponent from "dbme/w/lib/core/ui/UIComponent";
/**
 * @namespace dbme.srs.com.rpl
 */
export default class Component extends UIComponent {
    UISettingsKey: {
        ShowDateChangeForm: "RPL_DROP_INT";
        ShowResourceChangeForm: "RPL_DROP_INT_RES";
        ShowPasteForm: "RPL_PAST_RES";
        ShowRemoveConfirm: "RPL_DELE_INT";
        InitialView: "RPL_INIT_VIEW";
        ShowWeekNumbers: "RPL_SHOW_WEEK";
    };
    static metadata: {
        interfaces: string[];
        manifest: string;
    };
    getDBMEComponent(): "RPL";
    init(): void;
    private initTranslations;
}
