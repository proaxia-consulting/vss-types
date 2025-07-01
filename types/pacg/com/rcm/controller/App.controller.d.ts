import Controller from "sap/fe/core/rootView/Fcl.controller";
import type XMLView from "sap/ui/core/mvc/XMLView";
import type FlexibleColumnLayout from "sap/f/FlexibleColumnLayout";
/**
 * @controller
 * @namespace pacg.com.rcm.controller
 */
export default class App extends Controller {
    getView: () => XMLView;
    onInit(): void;
    onExit(): void;
    getFclControl(): FlexibleColumnLayout;
    private initCart;
}
