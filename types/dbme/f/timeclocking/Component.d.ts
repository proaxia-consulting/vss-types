import UIComponent from "sap/ui/core/UIComponent";
import type Controller from "sap/ui/core/mvc/Controller";
import type { Router$RouteMatchedEvent } from "sap/ui/core/routing/Router";
/**
 * @namespace dbme.f.timeclocking
 */
export default class Component extends UIComponent {
    getCurrentRouteName: () => string;
    setCurrentRouteName: (sName: string) => void;
    getCurrentController: () => Controller;
    setCurrentController: (ctrl?: Controller) => void;
    static metadata: {
        manifest: string;
        properties: {
            currentRouteName: {
                type: string;
                defaultValue: string;
            };
            currentController: {
                type: string;
                defaultValue: unknown;
            };
        };
    };
    private _contentDensityClass;
    init(): void;
    onRouteMatched(event: Router$RouteMatchedEvent): void;
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     *
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass(): string;
}
