import BaseController from "dbme/w/lib/core/controller/Base";
import Filter from "sap/ui/model/Filter";
import { BatchGroupId } from "dbme/srs/com/has/model/Enums";
import type Event from "sap/ui/base/Event";
import type TreeControl from "sap/m/Tree";
import { default as FacetFilter } from "sap/m/FacetFilter";
import DatePicker from "sap/m/DatePicker";
import type TreeBinding from "sap/ui/model/TreeBinding";
import type List from "sap/m/List";
import ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type { ITreeController } from "dbme/srs/com/has/types/IController";
import type AppComponent from "dbme/srs/com/has/Component";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
/**
 * @namespace dbme.srs.com.has.controller
 * @controller
 */
export default class Tree extends BaseController implements ITreeController {
    getOwnerComponent: () => AppComponent;
    routeQueryFilter: {
        onRouteMatched(this: import("dbme/w/lib/core/types/IController").ISrsController, event: Route$PatternMatchedEvent | import("dbme/w/lib/core/util/RouteQueryFilter").$RouteMatchedParams, entitySet: string | string[], aIgnoredQueryArgs?: string[], filterControl?: import("sap/ui/comp/smartfilterbar/SmartFilterBar").default | FacetFilter, queryArgsMap?: Map<string, string | undefined>): Promise<{
            [x: string]: string;
        }>;
    };
    _aRouteQueryFilters: Filter[];
    _oQueryArgs: Record<string, string | undefined>;
    helper: {
        dnd: {
            onResourceDragStart(this: Tree, oEvent: import("sap/ui/core/dnd/DragDropInfo").DragDropInfo$DragStartEvent): void;
            onResourceDragEnter(this: Tree, oEvent: import("sap/ui/core/dnd/DragDropInfo").DragDropInfo$DragEndEvent): void;
            onResourceDrop(this: Tree, oEvent: import("sap/ui/core/dnd/DropInfo").DropInfo$DropEvent): void;
        };
        assignmentFormCreate: {
            showForm(this: Tree): void;
            createAssignment(this: Tree, oDialog?: import("sap/m/Dialog").default): void;
            onAssign(this: Tree, event: Event): void;
            onCreate(this: Tree, event: Event): void;
            onFieldChange(this: Tree, event: Event): void;
        };
        assignmentFormEdit: {
            showForm(this: Tree, oNode: import("sap/m/StandardTreeItem").default): void;
            onAssignmentRemove(this: Tree, oEvent: Event): void;
            onAssignmentSave(this: Tree, oEvent: Event): Promise<{
                data: import("dbme/w/lib/core/types/IEntity").HierarchyAssignmentEntity;
                response: import("dbme/c/util/handleReturn").TResponseSuccess;
                message: import("dbme/c/odata/ODataCommand").TODataMessage;
            }>;
            onFieldChange(this: Tree, event: Event): void;
        };
        assignmentContextMenu: {
            onBeforeOpenContextMenu(this: Tree, oEvent: import("sap/m/ListBase").ListBase$BeforeOpenContextMenuEvent): void;
            onAssignmentEdit(this: Tree, oEvent: Event): void;
            onAssignmentRemove(this: Tree, oEvent: Event): void;
        };
        assignments: {
            showDialog(this: Tree, oResource: import("sap/m/StandardListItem").default): void;
            onAssignmentListRemove(this: Tree, oEvent: import("sap/m/ListBase").ListBase$DeleteEvent): void;
            onBtnAssignmentRemoveCommit(this: Tree, oEvent: Event): void;
            removeAssignment(this: Tree, treeItem: import("sap/m/StandardTreeItem").default): void;
            removeAssignmentCommit(this: Tree, oDialog?: import("sap/m/Dialog").default, oTreeItem?: import("sap/m/StandardTreeItem").default): void;
        };
        teamFormEdit: {
            showDialog(this: Tree, oResource: import("sap/m/StandardListItem").default): void;
            onBtnOK(this: Tree, oEvent: Event): Promise<any>;
            save(this: Tree, oDialog: import("sap/m/Dialog").default, oTreeItem?: import("sap/m/StandardTreeItem").default): Promise<any>;
            onBeforeRebindTable(this: Tree, event: import("sap/ui/comp/smarttable/SmartTable").SmartTable$BeforeRebindTableEvent): void;
        };
        image: {
            showDialog(this: Tree, oResourceControl: import("sap/m/StandardListItem").default): void;
        };
        resourceContextMenu: {
            onBeforeOpenContextMenu(this: Tree, oEvent: import("sap/m/ListBase").ListBase$BeforeOpenContextMenuEvent): void;
            onShowResourceAssignmentList(this: Tree, oEvent: Event): void;
            onEditResourceImage(this: Tree, oEvent: Event): void;
            onEditResourceShow(this: Tree, oEvent: Event): void;
            onEditTeamShow(this: Tree, oEvent: Event): void;
            onResourceRemove(this: Tree, oEvent: Event): void;
        };
        resource: {
            onFieldChange(this: Tree, event: Event): void;
            onBtnCreateResourceShow(this: Tree, event: import("sap/m/Button").Button$PressEvent): void;
            onBtnResourceFormCancel(this: Tree, event: import("sap/m/Button").Button$PressEvent): void;
            onBtnResourceFormOK(this: Tree, event: import("sap/m/Button").Button$PressEvent): Promise<void | {
                data: import("dbme/w/lib/core/types/IEntity").ResourceEntity | import("dbme/w/lib/core/types/IEntity").ResourceEntity[];
                response: import("dbme/c/util/handleReturn").TResponseSuccess;
                message: import("dbme/c/odata/ODataCommand").TODataMessage;
            }>;
            showDialog(this: Tree, resourceControl: import("sap/ui/core/Control").default, bCreate?: boolean): void;
        };
        upload: {
            onResourceUploadStart(this: Tree, oEvent: import("sap/ui/unified/FileUploader").FileUploader$UploadStartEvent): false | import("sap/ui/unified/FileUploader").default;
            onResourceUploadChange(this: Tree, oEvent: import("sap/ui/unified/FileUploader").FileUploader$ChangeEvent): void;
            onResourceUploadComplete(this: Tree, oEvent: import("sap/ui/unified/FileUploader").FileUploader$UploadCompleteEvent): void;
            onUploadTypeMissmatch(oEvent: Event): void;
            onUploadFileSizeExceed(oEvent: Event): void;
            onFileNameLengthExceed(oEvent: Event): void;
            onUploadTerminated(oEvent: Event): void;
            onBtnResourceImageClose(oEvent: Event): void;
            onBtnResourceImageRemove(this: Tree, oEvent: import("sap/m/GenericTile").GenericTile$PressEvent): void;
        };
    };
    private _iExpandToLevel;
    private _bInitTreeDisplayDate;
    private _bReloadingTreeFilters;
    _mBatchGroupId: {
        Dummy: BatchGroupId.Dummy;
        Assignment: BatchGroupId.Assignment;
        Resource: BatchGroupId.Resource;
        Team: BatchGroupId.Team;
    };
    private _sLastTreeFilter?;
    private _sLastFilter?;
    onInit(): void;
    onRouteMatched(oEvent: Event): void;
    _getDroppableControl(): TreeControl;
    _getDraggableControl(): List;
    _getJSONModel(): import("sap/ui/model/json/JSONModel").default;
    /**
     * abstract method implementation
     */
    ODataToJSON(): void;
    protected _getDefaultTreeValidOnDate(): Date;
    onExpandAll(oEvent: Event): void;
    onCollapseAll(oEvent: Event): void;
    private _getResourceFilter;
    private _getTreeFilter;
    private _getSearchField;
    private _getSearchFilter;
    private _applyFilters;
    onSearch(oEvent: Event): void;
    onFacetFilterReset(oEvent: Event): void;
    _getTreeValidOnDateField(): DatePicker;
    _getTreeValidOnDateFilter(aFields?: string[]): Filter | undefined;
    private _applyTreeFilters;
    onTreeDisplayDateChange(oEvent?: Event): void;
    onTreeFacetFilterConfirm(oEvent: Event): void;
    onTreeItemSelect(oEvent: Event): void;
    onResourceSelect(oEvent: Event): void;
    private _setAssignEnabled;
    private _setExpandEnabled;
    onBtnReload(oEvent: Event): void;
    private _getChangeGroups;
    refreshDragDropControlBinding(force?: boolean): void;
    getResourceListItemsBinding(): ODataListBinding;
    getTreeItemsBinding(): TreeBinding;
}
