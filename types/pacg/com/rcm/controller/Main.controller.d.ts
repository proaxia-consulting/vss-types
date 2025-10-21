import BaseController from "pacg/com/rcm/controller/BaseController";
import type UIComponent from "sap/ui/core/UIComponent";
/**
 * @controller
 * @namespace pacg.com.rcm.controller
 */
export default class Main extends BaseController {
    getOwnerComponent: () => UIComponent;
    onInit(): void;
    onExit(): void;
    private _navigationRedirect;
}
