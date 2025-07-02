import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";
import Model from "sap/ui/model/Model";
import Router from "sap/ui/core/routing/Router";
/**
 * @namespace com.pacg.disc_appr.controller
 */
export default abstract class BaseController extends Controller {
    /**
     * Convenience method for accessing the component of the controller's view.
     * @returns The component of the controller's view
     */
    getOwnerComponent(): AppComponent;
    /**
     * Convenience method to get the components' router instance.
     * @returns The router instance
     */
    getRouter(): Router;
    /**
     * Convenience method for getting the view model by name in every controller of the application.
     * @param [sName] The model name
     * @returns The model instance
     */
    getModel(sName?: string): Model;
    /**
     * Convenience method for setting the view model in every controller of the application.
     * @param oModel The model instance
     * @param [sName] The model name
     * @returns The current base controller instance
     */
    setModel(oModel: Model, sName?: string): BaseController;
    /**
     * Convenience method for triggering the navigation to a specific target.
     * @public
     * @param sName Target name
     * @param [oParameters] Navigation parameters
     * @param [bReplace] Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
     */
    navTo(sName: string, oParameters?: object, bReplace?: boolean): void;
    /**
     * Convenience event handler for navigating back.
     * It there is a history entry we go one step back in the browser history
     * If not, it will replace the current entry of the browser history with the main route.
     */
    onNavBack(): void;
    /**
     * Central method for displaying error page
     * @public
     * @param [message] Error message
     */
    handleError(errMessage: string): void;
}
