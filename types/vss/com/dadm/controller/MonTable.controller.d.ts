import BaseController from "./BaseController.controller";
/**
 * @namespace vss.com.dadm.\\\\\\\\\\controller
 */
export default class MonTable extends BaseController {
    private formatter;
    private dndHandler;
    private allocLogic;
    private availController;
    private availabilityPopover;
    private priorityDialogPromise;
    private priorityDialog;
    private demandPopover;
    private priorityController;
    private teamPopover;
    private contextMenu;
    onInit(): void;
    private onRouteMatched;
    private onColumnsReceived;
    private dispatchMonitorLoaded;
    private dispatchMonitorNotLoaded;
    private buildMonTable;
    private getMonTable;
    private onHierarchyChange;
    private onUpdateRowPress;
    private generateColumn;
    private onAllocationDragStart;
    private onDemandDragStart;
    private onDragEnd;
    private onDrop;
    private onRemainingCapacityClick;
    private onDemandClick;
    private onTeamClick;
    private onSearch;
    private onNextDayPress;
    private onPrevDayPress;
    private getRowContextByDemaindId;
    private getIMonTableCols;
    private onSelectedDateChagne;
    private onRefresh;
    private onBeforeOpenContextMenu;
    private onDeleteAllocation;
    private onChangePriority;
    private onChangePriorityReject;
    private onChangePrioritySave;
    private refreshRow;
    private createFilterBuilder;
    private getResourceListId;
    private filterRows;
}
