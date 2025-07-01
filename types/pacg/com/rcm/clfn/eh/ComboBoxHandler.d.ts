import Event from "sap/ui/base/Event";
import Item from "sap/ui/core/Item";
import { TTokenData } from "ui5";
import { IClassificationFilterController } from "pacg/com/rcm/types/IController";
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
    onSelectionFinish(event: Event): void;
    onSelectionChange(event: Event): void;
    createTokenDataFromComboBoxItem(charcKey: string, item: Item): TTokenData;
}
