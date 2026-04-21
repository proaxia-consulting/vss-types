import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type UI5Element from "sap/ui/core/Element";
import UISettingsDialog from "dbme/w/lib/core/settings/helper/UISettingsDialog";
import { type IModelAwareController } from "dbme/w/lib/core/types/IController";
type ISettingsController = {
    helper: {
        [key: string]: object;
        settingsDialog?: UISettingsDialog;
    };
    _loadUISettings(): Promise<void>;
} & IModelAwareController;
declare const UISettings: {
    getComponent(): import("../../types/IComponent").IDBMEComponent;
    getController(): ISettingsController;
    open(ctrl: ISettingsController, opener: UI5Element): Promise<Dialog>;
    onSettingsComponentCreated(event: Event): void;
};
/**
 * @global
 * @namespace dbme.w.lib.core.settings.helper
 */
export default UISettings;
