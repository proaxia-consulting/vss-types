import UIComponent from "dbme/w/lib/core/ui/UIComponent";
import type Route from "sap/ui/core/routing/Route";
import { ComponentEvent } from "dbme/srs/com/tdo/model/Enums";
import type Controller from "sap/ui/core/mvc/Controller";
import type { Router$RouteMatchedEvent } from "sap/ui/core/routing/Router";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
/**
 * @namespace dbme.srs.com.tdo
 */
export default class Component extends UIComponent {
    /**
     * used in nested components
     */
    readonly Event: {
        ScreenSectionTableItemsLoaded: ComponentEvent.ScreenSectionTableItemsLoaded;
        ScreenSectionTableSelectionChange: ComponentEvent.ScreenSectionTableSelectionChange;
    };
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
    getCurrentRouteName: () => string;
    setCurrentRouteName: (sName: string) => void;
    getCurrentController: () => Controller;
    setCurrentController: (ctrl?: Controller) => void;
    protected _loadedModel: Map<string, ODataModel>;
    getDBMEComponent(): "TDO";
    init(): void;
    onRouteMatched(oEvent: Router$RouteMatchedEvent): void;
    getCurrentRoute(): Route;
    getTestModel(): Promise<ODataModel>;
    destroy(bSuppressInvalidate?: boolean): void;
}
