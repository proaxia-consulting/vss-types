import BaseController from "dbme/w/lib/core/controller/Base";
import type DatePicker from "sap/m/DatePicker";
import type { default as FacetFilter } from "sap/m/FacetFilter";
import type List from "sap/m/List";
import type TreeControl from "sap/m/Tree";
import type Event from "sap/ui/base/Event";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import Filter from "sap/ui/model/Filter";
import type TreeBinding from "sap/ui/model/TreeBinding";
import type ODataListBinding from "sap/ui/model/odata/v2/ODataListBinding";
import type AppComponent from "dbme/srs/com/has/Component";
import { BatchGroupId } from "dbme/srs/com/has/model/Enums";
import type { ITreeController } from "dbme/srs/com/has/types/IController";
/**
 * @namespace dbme.srs.com.has.controller
 * @controller
 */
export default class Tree extends BaseController implements ITreeController {
    getOwnerComponent: () => AppComponent;
    routeQueryFilter: {
        fillControllerFilters(settings: import("dbme/w/lib/core/util/RouteQueryFilter").$RouteQueryFilterSettings): Promise<{
            [x: string]: string;
        }>;
        onRouteMatched(this: import("dbme/w/lib/core/types/IController").ISrsController, event: Route$PatternMatchedEvent | import("dbme/w/lib/core/util/RouteQueryFilter").$RouteMatchedParams, entitySet: string | string[], aIgnoredQueryArgs?: string[], filterControl?: import("sap/ui/comp/smartfilterbar/SmartFilterBar").default | FacetFilter, queryArgsMap?: Map<string, string | undefined>, useUrl?: boolean): Promise<{
            [x: string]: string;
        }>;
    };
    /**
     * @deprecated Do not use in HAS!
     */
    _aRouteQueryFilters: Filter[];
    /**
     * @deprecated Do not use in HAS!
     */
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
            onAssignmentRemove(this: Tree, event: import("sap/m/Button").Button$PressEvent): void;
            onAssignmentSave(this: Tree, event: import("sap/m/Button").Button$PressEvent): Promise<{
                data: import("dbme/w/lib/core/types/IEntity").HierarchyAssignmentEntity;
                response: import("dbme/c/util/handleReturn").TResponseSuccess;
                message: import("dbme/c/Log").TMessage | (import("dbme/c/util/handleReturn").TResponseDetails & {
                    title?: string;
                    hasError?: boolean;
                    hasWarning?: boolean;
                });
            }>;
            onFieldChange(this: Tree, event: Event): void;
        };
        assignmentContextMenu: {
            onBeforeOpenContextMenu(this: Tree, event: import("sap/m/ListBase").ListBase$BeforeOpenContextMenuEvent): void;
            onAssignmentEdit(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
            onAssignmentRemove(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
        };
        assignments: {
            showDialog(this: Tree, oResource: import("sap/m/StandardListItem").default): void;
            onAssignmentListRemove(this: Tree, oEvent: import("sap/m/ListBase").ListBase$DeleteEvent): void;
            onBtnAssignmentRemoveCommit(this: Tree, event: import("sap/m/Button").Button$PressEvent): void;
            removeAssignment(this: Tree, treeItem: import("sap/m/StandardTreeItem").default): void;
            removeAssignmentCommit(this: Tree, oDialog?: import("sap/m/Dialog").default, oTreeItem?: import("sap/m/StandardTreeItem").default): void;
        };
        teamFormEdit: {
            showDialog(this: Tree, oResource: import("sap/m/StandardListItem").default): void;
            onBtnOK(this: Tree, oEvent: import("sap/m/Button").Button$PressEvent): Promise<void>;
            save(this: Tree, oDialog: import("sap/m/Dialog").default, oTreeItem?: import("sap/m/StandardTreeItem").default): Promise<void>;
            onBeforeRebindTable(this: Tree, event: import("sap/ui/comp/smarttable/SmartTable").SmartTable$BeforeRebindTableEvent): void;
        };
        image: {
            showDialog(this: Tree, oResourceControl: import("sap/m/StandardListItem").default): void;
        };
        resourceContextMenu: {
            onBeforeOpenContextMenu(this: Tree, event: import("sap/m/ListBase").ListBase$BeforeOpenContextMenuEvent): void;
            onShowResourceAssignmentList(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
            onEditResourceImage(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
            onEditResourceShow(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
            onEditTeamShow(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
            onResourceRemove(this: Tree, event: import("sap/ui/unified/MenuItemBase").MenuItemBase$SelectEvent): void;
        };
        resource: {
            onFieldChange(this: Tree, event: Event): void;
            onBtnCreateResourceShow(this: Tree, event: import("sap/m/Button").Button$PressEvent): void;
            onBtnResourceFormCancel(this: Tree, event: import("sap/m/Button").Button$PressEvent): void;
            onBtnResourceFormOK(this: Tree, event: import("sap/m/Button").Button$PressEvent): Promise<void | {
                data: import("dbme/w/lib/core/types/IEntity").ResourceEntity | import("dbme/w/lib/core/types/IEntity").ResourceEntity[];
                response: import("dbme/c/util/handleReturn").TResponseSuccess;
                message: import("dbme/c/Log").TMessage | (import("dbme/c/util/handleReturn").TResponseDetails & {
                    title?: string;
                    hasError?: boolean;
                    hasWarning?: boolean;
                });
            }>;
            showDialog(this: Tree, resourceControl: import("sap/ui/core/Control").default, bCreate?: boolean): void;
        };
        upload: {
            onResourceUploadStart(this: Tree, oEvent: import("sap/ui/unified/FileUploader").FileUploader$UploadStartEvent): false | import("sap/ui/unified/FileUploader").default;
            onResourceUploadChange(this: Tree, oEvent: import("sap/ui/unified/FileUploader").FileUploader$ChangeEvent): void;
            onResourceUploadComplete(this: Tree, oEvent: import("sap/ui/unified/FileUploader").FileUploader$UploadCompleteEvent): void;
            onUploadTypeMissmatch(event: Event): void;
            onUploadFileSizeExceed(event: Event): void;
            onFileNameLengthExceed(event: Event): void;
            onUploadTerminated(event: Event): void;
            onBtnResourceImageClose(event: import("sap/m/Button").Button$PressEvent): void;
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
    onRouteMatched: (oEvent: Event) => void;
    _getDroppableControl(): TreeControl;
    _getDraggableControl(): List;
    _getJSONModel(): import("sap/ui/model/json/JSONModel").default;
    /**
     * abstract method implementation
     */
    ODataToJSON(): void;
    protected _getDefaultTreeValidOnDate(): Date;
    onExpandAll(event: Event): void;
    onCollapseAll(event: Event): void;
    private _getResourceFilter;
    private _getTreeFilter;
    private _getSearchField;
    private _getSearchFilter;
    private _applyFilters;
    onSearch(event: Event): void;
    onFacetFilterReset(event: Event): void;
    _getTreeValidOnDateField(): DatePicker;
    _getTreeValidOnDateFilter(aFields?: string[]): Filter | undefined;
    private _applyTreeFilters;
    onTreeDisplayDateChange(event?: Event): void;
    onTreeFacetFilterConfirm(event: Event): void;
    onTreeItemSelect(event: Event): void;
    onResourceSelect(event: Event): void;
    private _setAssignEnabled;
    private _setExpandEnabled;
    onBtnReload(oEvent: Event): void;
    private _getChangeGroups;
    refreshDragDropControlBinding(force?: boolean): void;
    getResourceListItemsBinding(): ODataListBinding;
    getTreeItemsBinding(): TreeBinding;
}
