import type { MultiComboBox$SelectionFinishEvent, MultiComboBox$SelectionChangeEvent } from "sap/m/MultiComboBox";
import type Item from "sap/ui/core/Item";
import type { TTokenData } from "ui5";
import type { IClassificationFilterController } from "pacg/com/rcm/types/IController";
/**
 * @namespace pacg.com.rcm.clfn.eh
 */
export default class ComboBoxHandler {
    private _ctrl;
    private _input;
    private _addedRanges;
    private _removedRanges;
    private _selectionChangePromises;
    constructor(_ctrl: IClassificationFilterController);
    onSelectionFinish(event: MultiComboBox$SelectionFinishEvent): void;
    onSelectionChange(event: MultiComboBox$SelectionChangeEvent): void;
    createTokenDataFromComboBoxItem(charcKey: string, item: Item): TTokenData;
}
