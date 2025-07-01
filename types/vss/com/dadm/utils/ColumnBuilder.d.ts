import Context from "sap/ui/model/Context";
import Column from "sap/ui/table/Column";
import Event from "sap/ui/base/Event";
import { MonTableFormatter } from "./MonTableFormatter";
import { AvailabilityController } from "./AvailabilityController";
import { EventOnClick } from "../types/others";
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
