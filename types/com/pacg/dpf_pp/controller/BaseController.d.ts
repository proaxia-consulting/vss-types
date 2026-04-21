import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "com/pacg/dpf_pp/Component";
import Model from "sap/ui/model/Model";
import Router from "sap/ui/core/routing/Router";
import JSONModel from "sap/ui/model/json/JSONModel";
import Payment from "com/pacg/dpf_pp/model/Payment";
/**
 * @namespace com.pacg.dpf_pp.controller
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
     * @param {string} sName The model name
     * @returns The model instance
     */
    getModel(sName?: string): Model | undefined;
    /**
     * Convenience method for setting the view model in every controller of the application.
     * @param {object} oModel The model instance
     * @param {string} sName The model name
     * @returns The current base controller instance
     */
    setModel(oModel: Model, sName?: string): BaseController;
    /**
     * Convenience method for getting DPF Payment processor instance
     * @param {string} transactionId Id of the current DPF transaction
     * @returns {Promise<Payment>} DPF Payment processor instance (singleton)
     */
    getPayment(transactionId?: string): Promise<Payment>;
    /**
     * Convenience method for triggering the navigation to a specific target.
     * @public
     * @param {string} sName Route name
     * @param {object} oParameters Navigation parameters
     * @param {boolean} bReplace Defines if the hash should be replaced (no browser history entry)
     *     or set (browser history entry)
     */
    navTo(sName: string, oParameters?: object, bReplace?: boolean): void;
    /**
     * Convenience method for displaying specific target without changing the route
     * @public
     * @param {string} sName Target name
     * @param {object} oData Additional data for target
     * @returns {Promise<any>} Promise resolved to this or target object information
     */
    displayTarget(sName: string, oData?: object): Promise<unknown>;
    /**
     * Convenience event handler for navigating back.
     */
    onNavBack(): void;
    /**
     * Convenience method for navigating to error page and error reporting
     * @param {Error} err Error instance; error.cause property is used as DPF Error Id
     */
    handleError(err: Error): void;
    /**
     * Convenience method for main transaction model access
     */
    getMainModel(): JSONModel;
}
