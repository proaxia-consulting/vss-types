import Controller from "sap/fe/core/PageController";
import type { Table$SelectionChangeEvent } from "sap/fe/macros/table/TableAPI";
/**
 * @namespace dbme.c.org.ext.main
 * @controller
 */
export default class Main extends Controller {
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf dbme.c.org.main.Main
     */
    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     * @memberOf dbme.c.org.main.Main
     */
    onBeforeRendering(): void;
    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     * @memberOf dbme.c.org.main.Main
     */
    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     * @memberOf dbme.c.org.main.Main
     */
    onExit(): void;
    onBeforeRebind(event: Event): void;
    private _rebindForm;
    onChangeSelection(event: Table$SelectionChangeEvent): void;
}
