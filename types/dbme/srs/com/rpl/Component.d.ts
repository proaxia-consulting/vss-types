import UIComponent from "dbme/w/lib/core/ui/UIComponent";
import { UISettingsKey } from "./model/Enums";
/**
 * @namespace dbme.srs.com.rpl
 */
export default class Component extends UIComponent {
    UISettingsKey: {
        ShowDateChangeForm: UISettingsKey.ShowDateChangeForm;
        ShowResourceChangeForm: UISettingsKey.ShowResourceChangeForm;
        ShowPasteForm: UISettingsKey.ShowPasteForm;
        ShowRemoveConfirm: UISettingsKey.ShowRemoveConfirm;
        InitialView: UISettingsKey.InitialView;
        ShowWeekNumbers: UISettingsKey.ShowWeekNumbers;
    };
    static metadata: {
        interfaces: string[];
        manifest: string;
    };
    getDBMEComponent(): "RPL";
    init(): void;
    private initTranslations;
}
