import PageController from "sap/fe/core/PageController";
import type { Button$PressEvent } from "sap/m/Button";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type { Tree$ToggleOpenStateEvent } from "sap/m/Tree";
import type AppComponent from "vss/com/rcl/eqs/Component";
import type { InvokablePageController } from "vss/com/rcl/types/IController";
export type $TreeItemOnActionButtonEvent = {
    event?: Button$PressEvent;
};
/**
 * @namespace vss.com.rcl.eqs.controller
 * @controller
 */
export default class Tree extends PageController implements InvokablePageController {
    getAppComponent: () => AppComponent;
    private _settings;
    private _treeModel?;
    constructor();
    onInit(): void;
    invokeStart(): void;
    onExit(): void;
    onToggleOpenState(event?: Tree$ToggleOpenStateEvent): void;
    onTreeUpdateFinished(event: ListBase$UpdateFinishedEvent): void;
    getModel(): import("sap/ui/model/odata/v4/ODataModel").default;
    private _getControllerKey;
    private _prepareModel;
    private _resetTreeModelData;
    private _getTree;
    private _getTreeModel;
}
