import type IAppComponent from "vss/com/fe/IAppComponent";
import type { IRoutingService } from "vss/com/fe/IAppComponent";
import type IAppContainer from "vss/com/fe/IAppContainer";
import AppComponentAbstract from "vss/com/rcl/component/AppComponentAbstract";
import type { $EventTyped } from "ui5";
import type AppComponent from "sap/fe/core/AppComponent";
import type PageController from "sap/fe/core/PageController";
export type AppComponent$ControllerRegisteredParams = {
    key: string;
    controller: PageController;
};
export type AppComponent$ControllerRegisteredEvent = $EventTyped<AppComponent$ControllerRegisteredParams, AppComponent>;
/**
 * @namespace pacg.com.rcm
 */
export default class Component extends AppComponentAbstract implements IAppComponent {
    fireControllerRegistered: (params: AppComponent$ControllerRegisteredParams) => void;
    getRoutingService: () => IRoutingService;
    static metadata: {
        manifest: string;
        events: {
            controllerRegistered: {
                parameters: {
                    key: {
                        type: string;
                    };
                    controller: {
                        type: string;
                    };
                };
            };
        };
    };
    private _controllerRegistry;
    constructor(settings?: object);
    getAppContainer(): IAppContainer;
    init(): void;
    exit(): void;
    registerController(controller: PageController, key?: string): void;
    getRegisteredController(key: string): PageController;
    attachControllerRegistered(eventHandler: CallableFunction, listener?: object): this;
}
