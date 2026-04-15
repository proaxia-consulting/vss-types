import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.promotions
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    resizeCard(newCardLayout: CardLayout): void;
}
