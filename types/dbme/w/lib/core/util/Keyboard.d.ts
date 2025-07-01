import ManagedObject from "sap/ui/base/ManagedObject";
/**
 * @namespace dbme.w.lib.core.util
 * @global
 */
export default class Keyboard extends ManagedObject {
    static metadata: {
        publicMethods: string[];
        properties: {
            ctrlKeyDown: {
                type: string;
                default: boolean;
            };
        };
        events: {
            ctrlKey: {
                isDown: {
                    type: string;
                };
                ui: {
                    type: string;
                };
            };
        };
    };
    private _keyDownHandler;
    private _keyUpHandler;
    private _ctrlTimeout?;
    attachCtrlKey: (fnHandler: CallableFunction, listener?: object) => void;
    detachCtrlKey: (fnHandler: CallableFunction, listener?: object) => void;
    fireCtrlKey: (params: object) => void;
    setCtrlKeyDown: (isDown: boolean) => void;
    isCtrlKeyDown: () => boolean;
    init(): void;
    private _setCtrlKeyDown;
    destroy(): void;
}
