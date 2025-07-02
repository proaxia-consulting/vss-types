import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
/**
 * @namespace vss.com.daxc.cards.maj
 */
export default class Main extends LinkListController {
    onInit(): void;
    onFilterApply(sChannelId: string, sEventName: string, aObjectFilters: object[]): void;
    private requestData;
    private getEndMarginClassNumeric;
    private getBeginMarginClassIcon;
    private _addMultipleStyleClasses;
    private setupCard;
    private resizeCard;
    private onRefresh;
}
