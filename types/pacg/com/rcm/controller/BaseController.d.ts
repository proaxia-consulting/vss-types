import PageController from "sap/fe/core/PageController";
import type AppComponent from "pacg/com/rcm/Component";
import type Model from "sap/ui/model/Model";
/**
 * @controller
 * @namespace pacg.com.rcm.controller
 */
export default abstract class BaseController extends PageController {
    getAppComponent: () => AppComponent;
    onInit(): void;
    getModel(sName?: string): Model;
}
