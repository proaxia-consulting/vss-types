import BaseController from "dbme/w/lib/core/controller/AbstractBase";
import type View from "sap/ui/core/mvc/View";
import type AppComponent from "dbme/srs/com/tdt/Component";
/**
 * @namespace dbme.srs.com.tdt.controller
 * @controller
 */
export default abstract class AbstractController extends BaseController {
    getOwnerComponent: () => AppComponent;
    getView: () => View;
    protected _getRootDecisionTreeItemFilterData(): Record<string, number | string>;
}
