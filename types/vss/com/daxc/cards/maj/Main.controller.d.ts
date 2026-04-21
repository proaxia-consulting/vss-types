import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.maj
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    onFilterApply(): void;
    private requestData;
    private getEndMarginClassNumeric;
    private getBeginMarginClassIcon;
    private _addMultipleStyleClasses;
    private setupCard;
    resizeCard(newCardLayout: CardLayout): void;
    private onRefresh;
}
