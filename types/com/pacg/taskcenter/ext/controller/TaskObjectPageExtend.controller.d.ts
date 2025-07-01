import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * overridesToOverride must be enabled in babel settings of transform-ui5
 * @link https://github.com/ui5-community/babel-plugin-transform-modules-ui5
 *
 * @namespace com.pacg.taskcenter.ext.controller
 */
export default class TaskObjectPageExtend extends ControllerExtension {
    static overrides: {
        onInit(this: TaskObjectPageExtend): void;
        onPageReady(this: TaskObjectPageExtend): void;
    };
    private _callMarkVisited;
    private _setNavigationActions;
    private _prepareControls;
    private _controller;
    private _component;
    private _navigationActions;
    private _infoSectionCtrl;
}
