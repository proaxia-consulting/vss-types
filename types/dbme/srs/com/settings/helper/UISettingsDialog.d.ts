import { type IModelAwareController } from "dbme/w/lib/core/types/IController";
import DependentFragment from "dbme/w/lib/core/util/DependentFragment";
import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
/**
 * @nonui5
 */
export default class UISettingsDialog extends DependentFragment<Dialog, IModelAwareController> {
    constructor(ctrl: IModelAwareController);
    onSettingsComponentCreated(event: Event): void;
}
