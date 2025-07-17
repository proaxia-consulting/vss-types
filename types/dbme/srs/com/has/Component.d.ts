import UIComponent from "dbme/w/lib/core/ui/UIComponent";
import { UISettingsKey } from "dbme/srs/com/has/model/Enums";
/**
 * @namespace dbme.srs.com.has
 */
export default class Component extends UIComponent {
    UISettingsKey: {
        ShowDropCreateForm: UISettingsKey.ShowDropCreateForm;
        ShowAssignCreateForm: UISettingsKey.ShowAssignCreateForm;
        ShowRemoveBtnConfirm: UISettingsKey.ShowRemoveBtnConfirm;
        ShowRemoveAssignmentConfirm: UISettingsKey.ShowRemoveAssignmentConfirm;
        HideCreateResource: UISettingsKey.HideCreateResource;
    };
    static metadata: {
        interfaces: string[];
        manifest: string;
    };
    getDBMEComponent(): "HAS";
    init(): void;
    private initTranslations;
}
