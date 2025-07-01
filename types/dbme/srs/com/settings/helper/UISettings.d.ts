import { type IModelAwareController } from "dbme/w/lib/core/types/IController";
import type Event from "sap/ui/base/Event";
import type UI5Element from "sap/ui/core/Element";
import UISettingsDialog from "./UISettingsDialog";
import type Dialog from "sap/m/Dialog";
interface ISettingsController extends IModelAwareController {
    helper: {
        [key: string]: object;
        settingsDialog?: UISettingsDialog;
    };
    _loadUISettings(): Promise<void>;
}
declare const UISettings: {
    getComponent(): import("dbme/w/lib/core/types/IComponent").IDBMEComponent;
    getController(): ISettingsController;
    open(ctrl: ISettingsController, opener: UI5Element): Promise<Dialog>;
    onSettingsComponentCreated(event: Event): void;
};
/**
 * @global
 * @namespace dbme.srs.com.settings.helper
 */
export default UISettings;
