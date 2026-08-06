import type PageController from "sap/fe/core/PageController";
import type Dialog from "sap/m/Dialog";
import { type TActionEntity } from "vss/com/daol/model/Enums";
export type IActionHandler = {
    run: () => void;
    onDestroy: () => void;
};
export type ActionHandlerFactorySettings = {
    actionData: TActionEntity;
    dialog?: Dialog;
};
/**
 * @namespace vss.com.daol.util
 * @class
 */
export default class ActionHandlerFactory {
    private static _handlerMap;
    static get(controller: PageController, settings: ActionHandlerFactorySettings): IActionHandler;
    static destroyHandlers(): void;
}
