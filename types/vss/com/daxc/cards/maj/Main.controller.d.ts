import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.maj
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    private getEndMarginClassNumeric;
    private getBeginMarginClassIcon;
    private _addMultipleStyleClasses;
    private setupCard;
    resizeCard(newCardLayout: CardLayout): void;
}
