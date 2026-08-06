import type { Button$PressEvent } from "sap/m/Button";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
/**
 * @nonui5
 * @namespace pacg.com.cm.eh
 */
export default class SaveHandler {
    static onSave(this: IObjectPageController, event: Button$PressEvent): void;
}
