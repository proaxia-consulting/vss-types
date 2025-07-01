import type { ISrsController } from "dbme/w/lib/core/types/IController";
import type List from "sap/m/List";
import type Tree from "sap/m/Tree";
import type Filter from "sap/ui/model/Filter";
export interface ITreeController extends ISrsController {
    refreshDragDropControlBinding(): void;
    _getDraggableControl(): List;
    _getDroppableControl(): Tree;
    _getTreeValidOnDateFilter(): Filter | undefined;
}
