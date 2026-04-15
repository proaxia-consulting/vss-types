import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * overridesToOverride must be enabled in babel settings of transform-ui5
 * @link https://github.com/ui5-community/babel-plugin-transform-modules-ui5
 *
 * @namespace com.pacg.taskcenter.ext.controller
 */
export default class TaskListExtend extends ControllerExtension {
    static overrides: {
        onInit(this: TaskListExtend & IListReportExtension): void;
        onBeforeRendering(this: TaskListExtend & IListReportExtension): void;
        onAfterRendering(this: TaskListExtend & IListReportExtension): void;
        routing: {
            onBeforeBinding(this: TaskListExtend & IListReportExtension, context: object, parameters: object): void;
            onAfterBinding(this: TaskListExtend & IListReportExtension, context: object, parameters: object): void;
        };
    };
    private _checkOrgDataAssigned;
    private _setTaskListView;
    private _getAppComponent;
    private _readViewLayoutId;
    private _readViewGroups;
    private _setIconTabs;
    private _tabView;
    private _filterBar;
}
