import BaseController from "dbme/w/lib/core/controller/Base";
import type { Button$PressEvent } from "sap/m/Button";
/**
 * @name dbme.srs.controller.Index
 * @controller
 */
export default class Index extends BaseController {
    ODataToJSON(): void;
    onPress(oEvent: Button$PressEvent): void;
}
