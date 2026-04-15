import UIComponent from "sap/ui/core/UIComponent";
import type { Router$RouteMatchedEvent } from "sap/ui/core/routing/Router";
/**
 * @namespace dbme.s.search
 */
export default class Component extends UIComponent {
    getCurrentRouteName: () => string;
    setCurrentRouteName: (sName: string) => void;
    static readonly metadata: object;
    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init(): void;
    onRouteMatched(oEvent: Router$RouteMatchedEvent): void;
    getCurrentRoute(): import("sap/ui/core/routing/Route").default;
}
