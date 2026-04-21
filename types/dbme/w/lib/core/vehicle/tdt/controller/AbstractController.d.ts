import type View from "sap/ui/core/mvc/View";
import BaseController from "dbme/w/lib/core/controller/AbstractBase";
import type AppComponent from "dbme/w/lib/core/vehicle/tdt/Component";
/**
 * @namespace dbme.w.lib.core.vehicle.tdt.controller
 * @controller
 */
export default abstract class AbstractController extends BaseController {
    getOwnerComponent: () => AppComponent;
    getView: () => View;
    protected _getRootDecisionTreeItemFilterData(): Record<string, unknown>;
}
