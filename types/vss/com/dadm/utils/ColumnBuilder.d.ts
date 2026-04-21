import type Event from "sap/ui/base/Event";
import type Context from "sap/ui/model/Context";
import Column from "sap/ui/table/Column";
import type { EventOnClick } from "vss/com/dadm/types/others";
import type { AvailabilityController } from "vss/com/dadm/utils/AvailabilityController";
import type { MonTableFormatter } from "vss/com/dadm/utils/MonTableFormatter";
/**
 * @namespace vss.com.dadm.utils
 */
export declare class ColumnBuilder {
    readonly labelBoxIdPrefix: string;
    readonly valueBoxIdPrefix: string;
    constructor();
    buildColumn(id: string, ctx: Context, onDemandDragStart: (event: Event) => void, onAllocationDragStart: (event: Event) => void, onDragEnd: (event: Event) => void, onDrop: (event: Event) => void, onRemainingCapacityClick: (event: EventOnClick) => void, onDemandClick: (event: EventOnClick) => void, onTeamClick: (event: EventOnClick) => void, formatter: MonTableFormatter, availController: AvailabilityController, selectedDate: string): Column;
    private buildRemainingCapacity;
    private isValueColumn;
    private setLabelStyleForColumnType;
    private getFormattter;
    private createIconColumn;
    private getColumnAllignment;
}
