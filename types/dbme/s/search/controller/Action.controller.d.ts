import ActionEngine from "dbme/s/lib/class/ActionEngine";
import Controller from "dbme/s/lib/controller/BaseController";
import type { ActionEntity } from "dbme/s/lib/type/IEntity";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import type AppComponent from "dbme/s/search/Component";
type IAppComponent = {
    getActionEngine(): ActionEngine;
} & AppComponent;
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
