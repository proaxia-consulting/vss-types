import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.nps
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    private customRenderer;
    resizeCard(newCardLayout: CardLayout): void;
    private _setDatasetAndFeeds;
    private onCheckBoxSelect;
}
