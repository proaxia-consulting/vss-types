import BaseController from "vss/com/dadm/controller/BaseController.controller";
import { Table$BeforeOpenContextMenuEvent } from "sap/ui/table/Table";
import type Event from "sap/ui/base/Event";
import type { IMonTableCols, IDemand } from "vss/com/dadm/types/IEntity";
/**
 * @controller
 * @namespace vss.com.dadm.controller
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
    onSearch(event: Event): void;
    onNextDayPress(event: Event): void;
    onPrevDayPress(event: Event): void;
    private getRowContextByDemaindId;
    private getIMonTableCols;
    onSelectedDateChagne(event: Event): void;
    onRefresh(event: Event): void;
    onBeforeOpenContextMenu(event: Table$BeforeOpenContextMenuEvent): void;
    onDeleteAllocation(demand: IDemand, col: IMonTableCols, selectedDate: string, event: Event): void;
    private onChangePriority;
    private onChangePriorityReject;
    private onChangePrioritySave;
    private refreshRow;
    private createFilterBuilder;
    private getResourceListId;
    private filterRows;
}
