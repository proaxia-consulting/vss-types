import type AppComponent from "dbme/s/search/Component";
import Controller from "dbme/s/lib/controller/BaseController";
import ActionEngine from "dbme/s/lib/class/ActionEngine";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import type { ActionEntity } from "dbme/s/lib/type/IEntity";
interface IAppComponent extends AppComponent {
    getActionEngine(): ActionEngine;
}
/**
 * @namespace dbme.s.search.controller
 * @controller
 */
export default class Action extends Controller {
    getOwnerComponent: () => IAppComponent;
    onInit(): void;
    onRouteMatched(event: Route$PatternMatchedEvent): void;
    onMetadataLoaded(action: string, objects: string): void;
    loadActionComponent(compUsage: string): void;
    exeuteAction(action: ActionEntity, objects: string): void;
    private _componentContainer;
    private _model;
}
export {};
