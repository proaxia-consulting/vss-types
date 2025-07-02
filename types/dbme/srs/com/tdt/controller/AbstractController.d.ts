import type AppComponent from "../Component";
import BaseController from "dbme/w/lib/core/controller/AbstractBase";
import type View from "sap/ui/core/mvc/View";
/**
 * @namespace dbme.srs.com.tdt.controller
 * @controller
 */
export default abstract class AbstractController extends BaseController {
    getOwnerComponent: () => AppComponent;
    getView: () => View;
    protected _getRootDecisionTreeItemFilterData(): Record<string, unknown>;
}
