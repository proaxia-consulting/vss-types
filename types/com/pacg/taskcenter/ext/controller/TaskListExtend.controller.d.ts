import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * overridesToOverride must be enabled in babel settings of transform-ui5
 * @link https://github.com/ui5-community/babel-plugin-transform-modules-ui5
 *
 * @namespace com.pacg.taskcenter.ext.controller
 */
export default class TaskListExtend extends ControllerExtension {
    static overrides: {
        onInit(this: TaskListExtend): void;
        onBeforeRendering(this: TaskListExtend): void;
        onAfterRendering(this: TaskListExtend): void;
    };
    private setViewLayout;
    private setTaskListTable;
    private readViewGroups;
    private _controller;
    private _component;
}
