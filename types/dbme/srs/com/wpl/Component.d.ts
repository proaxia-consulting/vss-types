import { DBMEComponent, PlanningMode } from "dbme/w/lib/core/library";
import UIComponent from "dbme/w/lib/core/ui/UIComponent";
import { UISettingsKey } from "./model/Enums";
/**
 * @namespace dbme.srs.com.wpl
 */
export default class Component extends UIComponent {
    PlanningMode: {
        Manual: PlanningMode.Manual;
        Rescheduling: PlanningMode.Rescheduling;
    };
    UISettingsKey: {
        ShowCreateForm: UISettingsKey.ShowCreateForm;
        ShowDateChangeForm: UISettingsKey.ShowDateChangeForm;
        ShowResourceChangeForm: UISettingsKey.ShowResourceChangeForm;
        ShowPasteForm: UISettingsKey.ShowPasteForm;
        ShowRemoveConfirm: UISettingsKey.ShowRemoveConfirm;
        InitialView: UISettingsKey.InitialView;
        ShowWeekNumbers: UISettingsKey.ShowWeekNumbers;
        PlanningMode: UISettingsKey.PlanningMode;
        ShowAllResources: UISettingsKey.ShowAllResources;
    };
    static metadata: {
        interfaces: string[];
        manifest: string;
    };
    getDBMEComponent(): DBMEComponent;
    init(): void;
    private initTranslations;
}
