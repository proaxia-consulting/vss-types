import Context from "sap/ui/model/odata/v4/Context";
import { IMonTableCols } from "../types/IEntity";
import { DragSession } from "sap/ui/core/dnd/DragAndDrop";
import DraggableText from "../control/DraggableText";
import { AllocationOut } from "../types/service";
export declare class DragAndDropHandler {
    private columns;
    private allocLogic;
    constructor(columns: IMonTableCols[]);
    dragDemand(rowCtx: Context, dragSession: DragSession): void;
    dragAllocation(rowCtx: Context, text: DraggableText, selectedDate: string, dragSession: DragSession): void;
    drop(session: DragSession, selectedDate: string): Promise<AllocationOut>;
    private chooseAndMakeDroppable;
    private getColumnForTextControl;
}
