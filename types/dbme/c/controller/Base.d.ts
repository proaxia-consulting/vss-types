import Controller from "sap/ui/core/mvc/Controller";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
/**
 * @name dbme.c.controller.Base
 * @controller
 */
export default class Base extends Controller {
    /**
     * allow to call super.onInit() in child controllers
     */
    onInit(): void;
    _getModel(): ODataModel;
}
